# Production Mode Startup Script for Windows
# This script starts the application in production mode (optimized build)

Write-Host "🚀 Starting UNDP Carbon Registry in Production Mode..." -ForegroundColor Cyan
Write-Host ""

# Stop any running containers
Write-Host "⏸️  Stopping development containers..." -ForegroundColor Yellow
docker compose -f docker-compose.yml -f docker-compose.dev.yml down

Write-Host ""
Write-Host "🔨 Building production containers..." -ForegroundColor Yellow
docker compose build

Write-Host ""
Write-Host "▶️  Starting all services..." -ForegroundColor Yellow
docker compose up -d

Write-Host ""
Write-Host "✅ Production mode started successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Your application is now running:" -ForegroundColor Cyan
Write-Host "   Frontend (production): http://localhost:3030" -ForegroundColor White
Write-Host "   Backend API: http://localhost:3000" -ForegroundColor White
Write-Host "   Stats API: http://localhost:3100" -ForegroundColor White
Write-Host ""
Write-Host "💡 Note: In production mode, you need to rebuild after code changes." -ForegroundColor Yellow
Write-Host "   For faster development, use: .\start-dev.ps1" -ForegroundColor White
Write-Host ""


