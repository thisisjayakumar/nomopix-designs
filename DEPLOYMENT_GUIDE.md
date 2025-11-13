# 🚀 NOMOPIX Deployment Guide

## Deployment Architecture

Since you have a **separate frontend (React)** and **backend (Node.js/Express)**, you'll need to deploy them separately:

- **Frontend**: Deploy to **Netlify** (React app)
- **Backend**: Deploy to **Render/Railway/Heroku** (Node.js API)
- **Database**: Use online MySQL (e.g., PlanetScale, Railway, AWS RDS, or any MySQL hosting)

---

## 📋 Pre-Deployment Checklist

### 1. Setup Online MySQL Database

Choose one of these providers (all have free tiers):

#### Option A: Railway (Recommended - Easy + Free Tier)
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Provision MySQL"
4. Copy the connection details:
   - `MYSQL_HOST`
   - `MYSQL_USER`
   - `MYSQL_PASSWORD`
   - `MYSQL_DATABASE`
   - `MYSQL_PORT`

#### Option B: PlanetScale (MySQL-compatible, Serverless)
1. Go to https://planetscale.com
2. Create a new database
3. Get connection string

#### Option C: AWS RDS / DigitalOcean / Any MySQL hosting

### 2. Create Tables in Online Database

Connect to your online MySQL database and run:

```bash
mysql -h YOUR_HOST -u YOUR_USER -p YOUR_DATABASE < server/db.sql
```

Or use a GUI tool like:
- **MySQL Workbench**
- **DBeaver**
- **phpMyAdmin**
- **TablePlus**

And execute the SQL from `server/db.sql`

---

## 🎯 DEPLOYMENT PLAN

### Architecture:
```
┌─────────────────┐
│   Netlify       │ ← React Frontend (Static)
│  (Frontend)     │   URL: https://nomopix.netlify.app
└────────┬────────┘
         │ API Calls
         ↓
┌─────────────────┐
│   Render/       │ ← Node.js Backend (API)
│   Railway        │   URL: https://nomopix-api.onrender.com
└────────┬────────┘
         │ MySQL Connection
         ↓
┌─────────────────┐
│   Railway/      │ ← MySQL Database
│   PlanetScale    │
└─────────────────┘
```

---

## 🔧 STEP-BY-STEP DEPLOYMENT

---

## PART 1: Deploy Backend (Node.js API)

### Option A: Deploy to Render (Recommended - Free Tier)

#### 1. Prepare Backend for Deployment

**Create `server/server.js` (production entry point):**

Already done! Your `server/index.js` is ready.

**Update `package.json` in root:**

Add this to scripts (already there):
```json
"start": "node server/index.js"
```

#### 2. Create Render Account

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository

#### 3. Configure Render Settings

```
Name: nomopix-backend
Region: Choose closest to you
Branch: main
Root Directory: (leave empty)
Environment: Node
Build Command: npm install
Start Command: npm start
```

#### 4. Add Environment Variables on Render

In Render dashboard, add these environment variables:

```
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=nomopix_db
JWT_SECRET=your_super_secret_jwt_key_production_random_string
WHATSAPP_NUMBER=917010066299
ADMIN_EMAIL=nomopix.designs@gmail.com
NODE_ENV=production
```

#### 5. Deploy

Click "Create Web Service" - Render will automatically deploy!

Your backend URL will be: `https://nomopix-backend-xxxx.onrender.com`

**Test it:** Visit `https://your-backend-url.onrender.com/api/health`

---

### Option B: Deploy to Railway (Alternative)

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Railway auto-detects Node.js
5. Add environment variables (same as above)
6. Deploy!

---

## PART 2: Deploy Frontend (React) to Netlify

### 1. Update Frontend API URL

**Create `client/.env.production`:**

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

### 2. Update Axios Base URL

**Edit `client/src/App.js`:**

Add at the top (after imports):

```javascript
import axios from 'axios';

// Set API base URL based on environment
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

### 3. Build Frontend

```bash
cd client
npm run build
```

This creates a `client/build` folder with optimized static files.

### 4. Deploy to Netlify

#### Method 1: Drag & Drop (Easiest)

1. Go to https://app.netlify.com
2. Sign up/Login
3. Drag the `client/build` folder to Netlify
4. Done! Your site is live!

#### Method 2: GitHub Auto-Deploy (Recommended)

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repository
5. Configure build settings:

```
Base directory: client
Build command: npm run build
Publish directory: client/build
```

6. Add environment variables:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com
GENERATE_SOURCEMAP=false
```

7. Click "Deploy site"

### 5. Configure Netlify Redirects (IMPORTANT!)

**Create `client/public/_redirects`:**

```
/*    /index.html   200
```

This ensures React Router works properly.

---

## 📝 Complete Deployment Commands

### For Backend (Render/Railway):

```bash
# No special commands needed
# Just push to GitHub and connect to Render/Railway
```

### For Frontend (Netlify):

```bash
# Build command (Netlify runs this automatically):
cd client && npm install && npm run build

# Publish directory:
client/build
```

---

## 🔒 Security Checklist

Before deploying:

- [ ] Change `JWT_SECRET` to a strong random string in production
- [ ] Update CORS origins in `server/index.js`:

```javascript
app.use(cors({
  origin: [
    'https://your-netlify-site.netlify.app',
    'https://your-custom-domain.com'
  ],
  credentials: true
}));
```

- [ ] Enable HTTPS (Netlify and Render do this automatically)
- [ ] Use environment variables for all secrets
- [ ] Never commit `.env` file to GitHub

---

## 📁 Files to Create/Update for Deployment

### 1. `client/.env.production`

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
GENERATE_SOURCEMAP=false
```

### 2. `client/public/_redirects`

```
/*    /index.html   200
```

### 3. Update `server/index.js` - Add CORS for production

```javascript
const cors = require('cors');

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-netlify-site.netlify.app', 'https://your-custom-domain.com']
    : 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
```

### 4. Root `.gitignore` - Make sure these are ignored

```
node_modules/
.env
.env.local
client/build/
```

---

## 🌐 Custom Domain (Optional)

### On Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS settings with your domain provider

### On Render:
1. Go to your service settings
2. Add custom domain
3. Configure DNS

---

## 🧪 Testing Production Deployment

### Test Backend:
```bash
curl https://your-backend-url.onrender.com/api/health
```

### Test Frontend:
1. Visit your Netlify URL
2. Test signup/login
3. Test dashboard
4. Test messaging
5. Test WhatsApp/Email buttons

---

## 📊 Deployment Summary

| Component | Platform | URL | Cost |
|-----------|----------|-----|------|
| Frontend | Netlify | https://nomopix.netlify.app | Free |
| Backend | Render/Railway | https://nomopix-api.onrender.com | Free tier available |
| Database | Railway/PlanetScale | Internal | Free tier available |

---

## 🔄 Continuous Deployment

Once set up with GitHub:

1. Push changes to GitHub: `git push origin main`
2. Netlify automatically rebuilds frontend
3. Render/Railway automatically redeploys backend
4. Zero downtime deployments!

---

## 🐛 Common Deployment Issues & Fixes

### Issue 1: API calls failing
**Fix:** Check CORS settings and API URL in `.env.production`

### Issue 2: Routes not working (404 on refresh)
**Fix:** Add `_redirects` file to `client/public/`

### Issue 3: Database connection failing
**Fix:** Verify all DB credentials in environment variables

### Issue 4: Build fails on Netlify
**Fix:** Check build command and publish directory settings

---

## 💡 Pro Tips

1. **Use Railway for everything** - Deploy backend and MySQL in one place
2. **Enable auto-deploy** - Push to GitHub triggers automatic deployment
3. **Monitor logs** - Check Render/Railway logs for backend issues
4. **Use Netlify Analytics** - Track your site performance
5. **Set up custom domain** - Professional appearance

---

## 📞 Quick Start Commands

### 1. Setup Production Environment

```bash
# Create production env files
echo "REACT_APP_API_URL=https://your-backend.onrender.com" > client/.env.production

# Create redirects file
echo "/*    /index.html   200" > client/public/_redirects
```

### 2. Test Build Locally

```bash
# Build frontend
cd client
npm run build

# Test backend
cd ..
npm start
```

### 3. Deploy

```bash
# Push to GitHub (triggers auto-deploy)
git add .
git commit -m "Prepare for production deployment"
git push origin main
```

Then connect to Netlify and Render via their dashboards!

---

## 🎉 You're Ready to Deploy!

Follow the steps above and your NOMOPIX website will be live on the internet!

**Questions?** Check the troubleshooting section or contact support.

---

Made with ❤️ by NOMOPIX Team

