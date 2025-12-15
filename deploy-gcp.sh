#!/bin/bash

# GCP Deployment Script for Carbon Registry
# This script automates the deployment on Google Cloud VM

set -e

VM_EXTERNAL_IP="${VM_EXTERNAL_IP:-34.32.83.112}"
VM_NAME="${VM_NAME:-carbon-registry-vm}"
VM_ZONE="${VM_ZONE:-europe-west10-b}"
GIT_REPO_URL="${GIT_REPO_URL:-}"

echo "=========================================="
echo "Carbon Registry - GCP Deployment"
echo "=========================================="
echo ""
echo "VM Name: $VM_NAME"
echo "VM Zone: $VM_ZONE"
echo "VM External IP: $VM_EXTERNAL_IP"
echo ""

# Check if VM_EXTERNAL_IP is set
if [ -z "$VM_EXTERNAL_IP" ]; then
    echo "Error: VM_EXTERNAL_IP environment variable is required"
    echo "Usage: VM_EXTERNAL_IP=34.32.83.112 ./deploy-gcp.sh"
    exit 1
fi

echo "Step 1: Connecting to VM and setting up environment..."
gcloud compute ssh "$VM_NAME" --zone="$VM_ZONE" << 'ENDSSH'
# Update system
sudo apt-get update -y

# Install Docker if not installed
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    sudo apt-get install -y docker.io docker-compose git curl
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -aG docker $USER
    echo "Docker installed successfully!"
else
    echo "Docker is already installed"
fi

# Verify Docker installation
docker --version
docker-compose --version
ENDSSH

echo ""
echo "Step 2: Cloning repository (if GIT_REPO_URL is provided)..."
if [ -n "$GIT_REPO_URL" ]; then
    echo "Cloning from: $GIT_REPO_URL"
    gcloud compute ssh "$VM_NAME" --zone="$VM_ZONE" << ENDSSH
cd ~
if [ -d "undp-carbon-registry-demo" ]; then
    echo "Repository already exists, pulling latest changes..."
    cd undp-carbon-registry-demo
    git pull
else
    echo "Cloning repository..."
    git clone "$GIT_REPO_URL" undp-carbon-registry-demo
    cd undp-carbon-registry-demo
fi
ENDSSH
else
    echo "⚠️  GIT_REPO_URL not provided. Skipping git clone."
    echo "   You'll need to upload your code manually or set GIT_REPO_URL"
fi

echo ""
echo "Step 3: Configuring firewall rules..."
# Create firewall rule for application ports if it doesn't exist
if ! gcloud compute firewall-rules describe allow-app-ports &>/dev/null; then
    echo "Creating firewall rule for application ports..."
    gcloud compute firewall-rules create allow-app-ports \
        --allow tcp:3000,tcp:3030,tcp:3100,tcp:5432 \
        --source-ranges 0.0.0.0/0 \
        --description "Allow Carbon Registry application ports" \
        --quiet
    echo "✅ Firewall rule created!"
else
    echo "✅ Firewall rule already exists"
fi

echo ""
echo "Step 4: Deploying application on VM..."
gcloud compute ssh "$VM_NAME" --zone="$VM_ZONE" << ENDSSH
cd ~/undp-carbon-registry-demo

# Export VM_EXTERNAL_IP for docker-compose
export VM_EXTERNAL_IP="$VM_EXTERNAL_IP"

# Stop existing containers if running
docker-compose -f docker-compose.gcp.yml down 2>/dev/null || true

# Build and start containers
echo "Building and starting containers..."
docker-compose -f docker-compose.gcp.yml up -d --build

# Wait a bit for containers to start
sleep 10

# Check container status
echo ""
echo "Container status:"
docker-compose -f docker-compose.gcp.yml ps

echo ""
echo "Recent logs (last 20 lines):"
docker-compose -f docker-compose.gcp.yml logs --tail=20
ENDSSH

echo ""
echo "=========================================="
echo "Deployment Complete!"
echo "=========================================="
echo ""
echo "Your application should now be running at:"
echo "  🌐 Frontend:  http://$VM_EXTERNAL_IP:3030"
echo "  🔌 Backend:   http://$VM_EXTERNAL_IP:3000/national"
echo "  📊 Stats API: http://$VM_EXTERNAL_IP:3100/stats"
echo ""
echo "To view logs, SSH into the VM and run:"
echo "  gcloud compute ssh $VM_NAME --zone=$VM_ZONE"
echo "  cd ~/undp-carbon-registry-demo"
echo "  docker-compose -f docker-compose.gcp.yml logs -f"
echo ""

