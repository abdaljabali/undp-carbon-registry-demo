#!/bin/bash

# Install Google Cloud SDK on macOS

echo "Installing Google Cloud SDK..."

# Download and install
curl https://sdk.cloud.google.com | bash

# Restart shell or source the path
exec -l $SHELL

# Initialize gcloud
echo "Initializing gcloud..."
gcloud init

echo ""
echo "✅ Google Cloud SDK installed!"
echo ""
echo "Next steps:"
echo "1. Run: gcloud init"
echo "2. Login: gcloud auth login"
echo "3. Set project: gcloud config set project YOUR_PROJECT_ID"

