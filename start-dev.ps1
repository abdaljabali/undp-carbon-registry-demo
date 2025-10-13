# Development Mode Startup Script for Windows
# This script starts the application in development mode with hot-reloading

Write-Host "🚀 Starting UNDP Carbon Registry in Development Mode..." -ForegroundColor Cyan
Write-Host ""

# Stop any running containers
Write-Host "⏸️  Stopping production containers..." -ForegroundColor Yellow
docker compose down

Write-Host ""
Write-Host "🔨 Building development containers..." -ForegroundColor Yellow
docker compose -f docker-compose.yml -f docker-compose.dev.yml build web-dev

Write-Host ""
Write-Host "▶️  Starting all services..." -ForegroundColor Yellow
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

Write-Host ""
Write-Host "✅ Development mode started successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Your application is now running with HOT-RELOADING enabled:" -ForegroundColor Cyan
Write-Host "   Frontend (with hot-reload): http://localhost:3030" -ForegroundColor White
Write-Host "   Backend API: http://localhost:3000" -ForegroundColor White
Write-Host "   Stats API: http://localhost:3100" -ForegroundColor White
Write-Host ""
Write-Host "💡 Tips:" -ForegroundColor Yellow
Write-Host "   - Edit files in web/src/ and see changes instantly!" -ForegroundColor White
Write-Host "   - View logs: docker compose -f docker-compose.yml -f docker-compose.dev.yml logs -f web-dev" -ForegroundColor White
Write-Host "   - Stop: docker compose down" -ForegroundColor White
Write-Host ""
Write-Host "Happy coding! 🎉" -ForegroundColor Green


