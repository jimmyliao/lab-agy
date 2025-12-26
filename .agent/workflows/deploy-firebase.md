---
description: Deploy the frontend to Firebase Hosting
---

## Steps

### 1. Install Firebase Tools
- Ensure `firebase-tools` is installed globally: `npm install -g firebase-tools`
- Log in to Firebase: `firebase login`

### 2. Initialize Firebase
- Run `firebase init hosting` in the project root if not already initialized.
- Select "Use an existing project" or "Create a new project".
- Set public directory to `frontend/out` (for static export) or configure for Next.js web framework integration.

### 3. Build Frontend
- Navigate to `frontend` directory.
- Run `npm run build`.

### 4. Deploy
- Run `firebase deploy --only hosting`.
