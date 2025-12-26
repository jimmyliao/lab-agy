---
description: Start the local development environment with Docker
---

## Steps

### 1. Check Docker Status
- Ensure Docker Desktop is running.

// turbo
### 2. Start Services
- Run `docker-compose up -d --build` to start all services (frontend, backend, db, milvus).
- Wait for healthy status on essential services.

### 3. Verify Frontend
- Visit http://localhost:3000 to see the application.

### 4. Verify Backend
- Visit http://localhost:8000/api/health to check API status.
