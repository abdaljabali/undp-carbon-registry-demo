# Quick Start Guide - Deploy on Google Cloud

Your VM is already created! Here's the fastest way to deploy:

## Your VM Details
- **VM Name**: `carbon-registry-vm`
- **Zone**: `europe-west10-b`
- **External IP**: `34.32.83.112` (may change if VM restarts)
- **Machine Type**: e2-medium (2 vCPU, 4 GB RAM)

## Option 1: Automated Deployment (Recommended)

### If your code is in a Git repository:

```bash
# Set your Git repository URL
export GIT_REPO_URL="https://github.com/your-username/your-repo.git"
export VM_EXTERNAL_IP="34.32.83.112"

# Make script executable and run
chmod +x deploy-gcp.sh
./deploy-gcp.sh
```

### If you need to upload code manually:

1. **First, connect to your VM and set it up:**
```bash
gcloud compute ssh carbon-registry-vm --zone=europe-west10-b
```

2. **On the VM, install Docker:**
```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose git
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
exit
```

3. **Reconnect and clone your repo (or upload code):**
```bash
gcloud compute ssh carbon-registry-vm --zone=europe-west10-b
cd ~
git clone <your-repo-url> undp-carbon-registry-demo
cd undp-carbon-registry-demo
```

4. **Deploy:**
```bash
export VM_EXTERNAL_IP="34.32.83.112"
docker-compose -f docker-compose.gcp.yml up -d --build
```

## Option 2: Manual Step-by-Step

### Step 1: Connect to VM
```bash
gcloud compute ssh carbon-registry-vm --zone=europe-west10-b
```

### Step 2: Install Docker
```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose git
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
exit  # Log out and back in
```

### Step 3: Clone Repository
```bash
gcloud compute ssh carbon-registry-vm --zone=europe-west10-b
cd ~
git clone <your-git-repo-url> undp-carbon-registry-demo
cd undp-carbon-registry-demo
```

### Step 4: Set IP Address and Deploy
```bash
# Set your VM's external IP
export VM_EXTERNAL_IP="34.32.83.112"

# Deploy using GCP-specific docker-compose file
docker-compose -f docker-compose.gcp.yml up -d --build

# Check status
docker-compose -f docker-compose.gcp.yml ps

# View logs
docker-compose -f docker-compose.gcp.yml logs -f
```

### Step 5: Configure Firewall (if not done automatically)
```bash
# From your local machine (not on VM)
gcloud compute firewall-rules create allow-app-ports \
    --allow tcp:3000,tcp:3030,tcp:3100,tcp:5432 \
    --source-ranges 0.0.0.0/0 \
    --description "Allow Carbon Registry ports"
```

## Access Your Application

After deployment, access:
- **Frontend**: http://34.32.83.112:3030
- **Backend API**: http://34.32.83.112:3000/national
- **Stats API**: http://34.32.83.112:3100/stats

## Important Notes

1. **IP Address**: The current IP (`34.32.83.112`) is session-specific and may change when the VM restarts. Consider reserving a static IP if you need a permanent address.

2. **Disk Size**: Your VM has 10GB disk. Docker images may need more space. Consider increasing disk size if needed:
   ```bash
   gcloud compute disks resize carbon-registry-vm \
       --size=30 \
       --zone=europe-west10-b
   ```

3. **Firewall**: Make sure firewall rules allow ports 3000, 3030, 3100, and 5432.

## Useful Commands

### View Logs
```bash
docker-compose -f docker-compose.gcp.yml logs -f
```

### Restart Services
```bash
docker-compose -f docker-compose.gcp.yml restart
```

### Stop Services
```bash
docker-compose -f docker-compose.gcp.yml down
```

### Update Application
```bash
cd ~/undp-carbon-registry-demo
git pull
export VM_EXTERNAL_IP="34.32.83.112"
docker-compose -f docker-compose.gcp.yml up -d --build
```

## Troubleshooting

### Check if containers are running
```bash
docker-compose -f docker-compose.gcp.yml ps
```

### Check container logs
```bash
docker-compose -f docker-compose.gcp.yml logs national
docker-compose -f docker-compose.gcp.yml logs web
docker-compose -f docker-compose.gcp.yml logs db
```

### Check disk space
```bash
df -h
docker system df
```

### If you need to increase disk size
```bash
# Stop VM first
gcloud compute instances stop carbon-registry-vm --zone=europe-west10-b

# Resize disk
gcloud compute disks resize carbon-registry-vm \
    --size=30 \
    --zone=europe-west10-b

# Start VM
gcloud compute instances start carbon-registry-vm --zone=europe-west10-b
```

