# Aushad - Static site served with Node.js

This small Node.js project serves the existing static HTML/JS files with Express. It's intended to let you run the site locally and later expand the architecture to use server-side logic (APIs, Firebase Admin, etc.).

Prerequisites
- Node.js 18+ installed

Install and run (PowerShell)

```powershell
cd "C:\Users\velpo\OneDrive\Desktop\Aushad"
npm install
npm start
```

Dev (auto-restart with nodemon)

```powershell
npm run dev
```

Notes
- The server serves the current directory as static files. Root (/) redirects to `login.html`.
- To add backend logic (APIs, database), create new routes in `server.js` or split into routes/controllers.
# aushad
# aushad
