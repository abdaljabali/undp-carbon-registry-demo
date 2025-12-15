#!/bin/bash

# Script to update IP addresses in docker-compose.yml
# Usage: ./update-ip.sh <NEW_IP_ADDRESS>

if [ -z "$1" ]; then
    echo "Error: IP address required"
    echo "Usage: ./update-ip.sh <NEW_IP_ADDRESS>"
    echo "Example: ./update-ip.sh 34.123.45.67"
    exit 1
fi

NEW_IP=$1
OLD_IP="164.92.193.13"
COMPOSE_FILE="docker-compose.yml"

if [ ! -f "$COMPOSE_FILE" ]; then
    echo "Error: $COMPOSE_FILE not found"
    exit 1
fi

echo "Updating IP addresses in $COMPOSE_FILE..."
echo "Old IP: $OLD_IP"
echo "New IP: $NEW_IP"

# Create backup
cp "$COMPOSE_FILE" "${COMPOSE_FILE}.backup"
echo "Backup created: ${COMPOSE_FILE}.backup"

# Update IP addresses
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s|http://${OLD_IP}|http://${NEW_IP}|g" "$COMPOSE_FILE"
    sed -i '' "s|http://164.92.193.13|http://${NEW_IP}|g" "$COMPOSE_FILE"
else
    # Linux
    sed -i "s|http://${OLD_IP}|http://${NEW_IP}|g" "$COMPOSE_FILE"
    sed -i "s|http://164.92.193.13|http://${NEW_IP}|g" "$COMPOSE_FILE"
fi

echo "✅ IP addresses updated successfully!"
echo ""
echo "Updated occurrences:"
grep -n "$NEW_IP" "$COMPOSE_FILE" | head -10

echo ""
echo "Please review the changes and restart containers:"
echo "  docker-compose down"
echo "  docker-compose up -d --build"

