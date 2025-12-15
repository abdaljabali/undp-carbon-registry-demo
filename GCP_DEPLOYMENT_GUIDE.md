# Google Cloud Platform Deployment Guide

This guide will help you deploy the Carbon Registry application on Google Cloud Compute Engine, similar to your previous DigitalOcean droplet setup.

## Prerequisites

- ✅ Google Cloud account with Compute Engine API enabled
- ✅ Free trial credits available (258.98 €)
- ✅ `gcloud` CLI installed (or use Cloud Shell)
- ✅ Basic knowledge of Docker and Docker Compose

## Step 1: Create a VM Instance

### Option A: Using Google Cloud Console (Web UI)

1. Go to [Compute Engine > VM Instances](https://console.cloud.google.com/compute/instances)
2. Click **"Create Instance"**
3. Configure the instance:
   - **Name**: `carbon-registry-vm`
   - **Region**: Choose closest to you (e.g., `europe-west1`, `us-central1`)
   - **Zone**: Any zone in your selected region
   - **Machine type**: 
     - **e2-medium** (2 vCPU, 4 GB RAM) - Recommended for trial
     - **e2-small** (2 vCPU, 2 GB RAM) - Minimum, may be slow
   - **Boot disk**: 
     - **OS**: Ubuntu 22.04 LTS
     - **Size**: 30 GB (Standard persistent disk)
   - **Firewall**: 
     - ✅ Allow HTTP traffic
     - ✅ Allow HTTPS traffic
4. Click **"Create"**

### Option B: Using gcloud CLI

```bash
gcloud compute instances create carbon-registry-vm \
    --zone=europe-west1-b \
    --machine-type=e2-medium \
    --image-family=ubuntu-2204-lts \
    --image-project=ubuntu-os-cloud \
    --boot-disk-size=30GB \
    --tags=http-server,https-server \
    --metadata=startup-script='#! /bin/bash
apt-get update
apt-get install -y docker.io docker-compose git
systemctl start docker
systemctl enable docker
usermod -aG docker $USER'
```

## Step 2: Get Your VM's External IP

After creating the VM, note its external IP address:

1. In the VM instances list, find your instance
2. Copy the **External IP** address (e.g., `34.123.45.67`)

Or using CLI:
```bash
gcloud compute instances describe carbon-registry-vm \
    --zone=europe-west1-b \
    --format='get(networkInterfaces[0].accessConfigs[0].natIP)'
```

## Step 3: Configure Firewall Rules

Allow necessary ports:

```bash
# Allow HTTP (port 80)
gcloud compute firewall-rules create allow-http \
    --allow tcp:80 \
    --source-ranges 0.0.0.0/0 \
    --description "Allow HTTP traffic"

# Allow HTTPS (port 443)
gcloud compute firewall-rules create allow-https \
    --allow tcp:443 \
    --source-ranges 0.0.0.0/0 \
    --description "Allow HTTPS traffic"

# Allow custom ports (3000, 3030, 3100, 5432)
gcloud compute firewall-rules create allow-app-ports \
    --allow tcp:3000,tcp:3030,tcp:3100,tcp:5432 \
    --source-ranges 0.0.0.0/0 \
    --description "Allow application ports"
```

Or configure via Console:
1. Go to **VPC network > Firewall**
2. Click **"Create Firewall Rule"**
3. Add rules for ports: 80, 443, 3000, 3030, 3100, 5432

## Step 4: Connect to Your VM

### Option A: Using SSH in Browser
1. In VM instances list, click **"SSH"** button next to your instance

### Option B: Using gcloud CLI
```bash
gcloud compute ssh carbon-registry-vm --zone=europe-west1-b
```

## Step 5: Install Docker and Docker Compose

Once connected to your VM, run:

```bash
# Update system
sudo apt-get update

# Install Docker
sudo apt-get install -y docker.io docker-compose git

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to docker group (to run docker without sudo)
sudo usermod -aG docker $USER

# Log out and log back in for group changes to take effect
exit
```

Reconnect via SSH and verify:
```bash
docker --version
docker-compose --version
```

## Step 6: Upload Your Application Code

### Option A: Using Git (Recommended)

If your code is in a Git repository:

```bash
# Clone your repository
git clone <your-repo-url>
cd undp-carbon-registry-demo
```

### Option B: Using gcloud compute scp

From your local machine:

```bash
# Upload the entire project directory
gcloud compute scp --recurse \
    /path/to/undp-carbon-registry-demo \
    carbon-registry-vm:~/ \
    --zone=europe-west1-b
```

### Option C: Using Cloud Storage

1. Upload your code to Cloud Storage bucket
2. Download it on the VM using `gsutil`

## Step 7: Update docker-compose.yml with Your VM IP

Before deploying, update the IP addresses in `docker-compose.yml`:

1. Get your VM's external IP (from Step 2)
2. Replace all instances of `164.92.193.13` with your new IP

You can use the provided script:
```bash
./update-ip.sh <YOUR_VM_IP>
```

Or manually edit `docker-compose.yml`:
- Replace `http://164.92.193.13:3000` with `http://YOUR_IP:3000`
- Replace `http://164.92.193.13:3030` with `http://YOUR_IP:3030`
- Replace `http://164.92.193.13:3100` with `http://YOUR_IP:3100`

## Step 8: Deploy the Application

On your VM:

```bash
cd ~/undp-carbon-registry-demo

# Build and start all containers
docker-compose up -d --build

# Check container status
docker-compose ps

# View logs
docker-compose logs -f
```

## Step 9: Verify Deployment

1. **Frontend**: `http://YOUR_VM_IP:3030`
2. **Backend API**: `http://YOUR_VM_IP:3000/national`
3. **Analytics API**: `http://YOUR_VM_IP:3100/stats`

## Step 10: Set Up Static IP (Optional but Recommended)

To prevent IP changes when VM restarts:

```bash
# Reserve a static IP
gcloud compute addresses create carbon-registry-ip \
    --region=europe-west1

# Get the reserved IP
gcloud compute addresses describe carbon-registry-ip \
    --region=europe-west1 \
    --format='get(address)'

# Assign it to your VM
gcloud compute instances delete-access-config carbon-registry-vm \
    --zone=europe-west1-b \
    --access-config-name="External NAT"

gcloud compute instances add-access-config carbon-registry-vm \
    --zone=europe-west1-b \
    --address=<RESERVED_IP>
```

## Useful Commands

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f national
docker-compose logs -f web
docker-compose logs -f db
```

### Restart Services
```bash
docker-compose restart
# Or restart specific service
docker-compose restart national
```

### Stop Services
```bash
docker-compose down
```

### Update Application
```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up -d --build
```

### Check Resource Usage
```bash
# CPU and memory usage
htop

# Disk usage
df -h

# Docker disk usage
docker system df
```

## Cost Estimation

For the trial period with your setup:

- **e2-medium VM**: ~€15-20/month
- **30GB Disk**: ~€3/month
- **Network egress**: ~€0.10/GB (first 1GB free)
- **Total**: ~€18-25/month (well within your €258.98 trial budget)

## Troubleshooting

### Containers won't start
```bash
# Check logs
docker-compose logs

# Check if ports are in use
sudo netstat -tulpn | grep -E '3000|3030|3100|5432'
```

### Database connection issues
```bash
# Check if database container is running
docker-compose ps db

# Check database logs
docker-compose logs db

# Connect to database
docker-compose exec db psql -U root -d carbondev
```

### Out of disk space
```bash
# Clean up Docker
docker system prune -a

# Check disk usage
df -h
```

### Firewall issues
```bash
# Test if ports are accessible
curl http://YOUR_VM_IP:3030
curl http://YOUR_VM_IP:3000/national
```

## Next Steps

1. **Set up domain name** (optional): Point your domain to the VM's IP
2. **Set up SSL certificate**: Use Let's Encrypt with Certbot
3. **Set up backups**: Configure automated backups for the database
4. **Monitor costs**: Set up billing alerts in Google Cloud Console

## Support

For issues specific to the Carbon Registry application, refer to the main [README.md](./README.md).

For Google Cloud issues, check:
- [Compute Engine Documentation](https://cloud.google.com/compute/docs)
- [Google Cloud Support](https://cloud.google.com/support)

