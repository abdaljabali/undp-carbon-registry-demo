#!/bin/bash

# Google Cloud Setup Script for Carbon Registry
# This script helps automate the VM creation and initial setup

set -e

PROJECT_ID=$(gcloud config get-value project 2>/dev/null)
ZONE="${ZONE:-europe-west1-b}"
MACHINE_TYPE="${MACHINE_TYPE:-e2-medium}"
VM_NAME="${VM_NAME:-carbon-registry-vm}"
DISK_SIZE="${DISK_SIZE:-30}"

echo "=========================================="
echo "Google Cloud Carbon Registry Setup"
echo "=========================================="
echo ""
echo "Project ID: $PROJECT_ID"
echo "Zone: $ZONE"
echo "VM Name: $VM_NAME"
echo "Machine Type: $MACHINE_TYPE"
echo "Disk Size: ${DISK_SIZE}GB"
echo ""

read -p "Continue with these settings? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 1
fi

# Check if VM already exists
if gcloud compute instances describe "$VM_NAME" --zone="$ZONE" &>/dev/null; then
    echo "⚠️  VM '$VM_NAME' already exists in zone '$ZONE'"
    read -p "Do you want to delete and recreate it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Deleting existing VM..."
        gcloud compute instances delete "$VM_NAME" --zone="$ZONE" --quiet
    else
        echo "Using existing VM."
        EXISTING_VM=true
    fi
fi

if [ "$EXISTING_VM" != true ]; then
    echo ""
    echo "Step 1: Creating VM instance..."
    gcloud compute instances create "$VM_NAME" \
        --zone="$ZONE" \
        --machine-type="$MACHINE_TYPE" \
        --image-family=ubuntu-2204-lts \
        --image-project=ubuntu-os-cloud \
        --boot-disk-size="${DISK_SIZE}GB" \
        --tags=http-server,https-server \
        --metadata=startup-script='#! /bin/bash
apt-get update
apt-get install -y docker.io docker-compose git curl
systemctl start docker
systemctl enable docker
usermod -aG docker $USER'

    echo "✅ VM created successfully!"
fi

echo ""
echo "Step 2: Getting VM external IP..."
VM_IP=$(gcloud compute instances describe "$VM_NAME" \
    --zone="$ZONE" \
    --format='get(networkInterfaces[0].accessConfigs[0].natIP)')

echo "VM External IP: $VM_IP"

echo ""
echo "Step 3: Configuring firewall rules..."

# Check and create firewall rules if they don't exist
if ! gcloud compute firewall-rules describe allow-http &>/dev/null; then
    echo "Creating HTTP firewall rule..."
    gcloud compute firewall-rules create allow-http \
        --allow tcp:80 \
        --source-ranges 0.0.0.0/0 \
        --description "Allow HTTP traffic" \
        --quiet
fi

if ! gcloud compute firewall-rules describe allow-https &>/dev/null; then
    echo "Creating HTTPS firewall rule..."
    gcloud compute firewall-rules create allow-https \
        --allow tcp:443 \
        --source-ranges 0.0.0.0/0 \
        --description "Allow HTTPS traffic" \
        --quiet
fi

if ! gcloud compute firewall-rules describe allow-app-ports &>/dev/null; then
    echo "Creating application ports firewall rule..."
    gcloud compute firewall-rules create allow-app-ports \
        --allow tcp:3000,tcp:3030,tcp:3100,tcp:5432 \
        --source-ranges 0.0.0.0/0 \
        --description "Allow application ports" \
        --quiet
fi

echo "✅ Firewall rules configured!"

echo ""
echo "Step 4: Waiting for VM to be ready..."
sleep 10

echo ""
echo "=========================================="
echo "Setup Complete!"
echo "=========================================="
echo ""
echo "VM Details:"
echo "  Name: $VM_NAME"
echo "  Zone: $ZONE"
echo "  External IP: $VM_IP"
echo ""
echo "Next Steps:"
echo "1. Connect to your VM:"
echo "   gcloud compute ssh $VM_NAME --zone=$ZONE"
echo ""
echo "2. Once connected, install Docker (if not already installed):"
echo "   sudo apt-get update"
echo "   sudo apt-get install -y docker.io docker-compose git"
echo "   sudo systemctl start docker"
echo "   sudo systemctl enable docker"
echo "   sudo usermod -aG docker \$USER"
echo "   exit"
echo ""
echo "3. Upload your application code to the VM"
echo ""
echo "4. Update docker-compose.yml with the new IP:"
echo "   ./update-ip.sh $VM_IP"
echo ""
echo "5. Deploy the application:"
echo "   docker-compose up -d --build"
echo ""
echo "Access your application at:"
echo "  Frontend: http://$VM_IP:3030"
echo "  Backend:  http://$VM_IP:3000/national"
echo "  Stats:    http://$VM_IP:3100/stats"
echo ""

