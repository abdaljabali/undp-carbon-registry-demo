# Development Mode with Hot-Reloading

## 🚀 Quick Start

Instead of rebuilding Docker every time you edit frontend code, use **development mode** with hot-reloading!

### Start Development Mode

```bash
# Stop production containers
docker compose down

# Start development mode (with hot-reloading)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# Or just the web service in dev mode while keeping others in production
docker compose up -d db national stats replicator
docker compose -f docker-compose.dev.yml up -d web-dev
```

### What This Does:
✅ **Hot-Reloading**: Edit files in `web/src/` and see changes **instantly** in the browser (no rebuild!)  
✅ **Fast Feedback**: Changes appear in ~1-2 seconds  
✅ **Source Maps**: Better debugging with actual TypeScript file names  
✅ **Keep Database**: No need to rebuild backend or clear database

### Files That Auto-Reload:
- ✅ `web/src/**/*.tsx` (React components)
- ✅ `web/src/**/*.ts` (TypeScript files)
- ✅ `web/src/**/*.scss` (Styles)
- ✅ `web/src/Utils/demoData.ts` (Demo data)
- ✅ `web/index.html`
- ✅ `web/vite.config.ts`

### Files That Need Rebuild:
- ❌ `web/package.json` (if you add new dependencies)
- ❌ `web/Dockerfile.dev` (if you change Docker config)

---

## 📝 Common Workflows

### Edit Demo Data (No Rebuild!)
```bash
# 1. Edit the file
code web/src/Utils/demoData.ts

# 2. Save (Ctrl+S)
# 3. Browser auto-refreshes! ✨
```

### Edit Components (No Rebuild!)
```bash
# 1. Edit any component
code web/src/Components/PDD/StepperComponent.tsx

# 2. Save
# 3. See changes instantly! ✨
```

### Add New Package (Rebuild Required)
```bash
# 1. Add to package.json
cd web
yarn add some-package

# 2. Rebuild dev container
cd ..
docker compose -f docker-compose.dev.yml up -d --build web-dev
```

---

## 🔄 Switch Between Modes

### Switch to Development Mode:
```bash
docker compose down
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### Switch Back to Production Mode:
```bash
docker compose down
docker compose up -d
```

---

## 📊 View Logs

```bash
# View web dev server logs (to see hot-reload messages)
docker compose -f docker-compose.dev.yml logs -f web-dev

# View all logs
docker compose -f docker-compose.yml -f docker-compose.dev.yml logs -f
```

---

## ⚠️ Troubleshooting

### Hot-reload not working?
```bash
# Restart the web-dev container
docker compose -f docker-compose.dev.yml restart web-dev
```

### Changes not appearing?
1. Check if file is in mounted volumes (see `docker-compose.dev.yml`)
2. Hard refresh browser (Ctrl+Shift+R)
3. Check browser console for errors

### Port already in use?
```bash
# Make sure production web container is stopped
docker compose stop web
docker compose rm -f web
```

---

## 💡 Tips

1. **Keep Backend Running**: You don't need to rebuild backend when editing frontend!
2. **Database Persists**: Your demo users and projects stay intact
3. **Fast Iterations**: Make changes, save, see results in seconds!
4. **Works on Windows, Mac, Linux**: Docker handles file watching across platforms

Happy coding! 🎉


