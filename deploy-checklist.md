# 🚀 Quick Deployment Checklist

## Before You Deploy

### 1. Setup Online MySQL Database ✅
- [ ] Create MySQL database on Railway/PlanetScale/AWS
- [ ] Note down connection details (host, user, password, database)
- [ ] Run `server/db.sql` to create tables

### 2. Prepare Backend for Deployment ✅
- [ ] Push code to GitHub
- [ ] Have database credentials ready

### 3. Prepare Frontend for Deployment ✅
- [ ] Update `client/.env.production` with backend URL
- [ ] Verify `_redirects` file exists in `client/public/`

---

## Deploy Backend (5 minutes)

### Option: Render (Recommended)

1. **Go to Render:**
   - Visit https://render.com
   - Sign up with GitHub

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select your repo

3. **Configure:**
   ```
   Name: nomopix-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Add Environment Variables:**
   ```
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=nomopix_db
   JWT_SECRET=random_secret_string_min_32_chars
   PORT=5000
   WHATSAPP_NUMBER=917010066299
   ADMIN_EMAIL=nomopix.designs@gmail.com
   NODE_ENV=production
   ```

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - Copy your backend URL: `https://nomopix-backend-xxxx.onrender.com`

6. **Test:**
   - Visit `https://your-backend-url.onrender.com/api/health`
   - Should see: `{"status":"OK","message":"NOMOPIX API is running"}`

---

## Deploy Frontend (3 minutes)

### Step 1: Update Backend URL

Edit `client/.env.production`:
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

### Step 2: Deploy to Netlify

**Method A: Drag & Drop (Fastest)**
1. Build locally: `cd client && npm run build`
2. Go to https://app.netlify.com
3. Drag `client/build` folder to Netlify
4. Done!

**Method B: GitHub Auto-Deploy (Best for updates)**
1. Push updated `.env.production` to GitHub
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Configure:
   ```
   Base directory: client
   Build command: npm run build
   Publish directory: client/build
   ```
6. Environment variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```
7. Click "Deploy site"

### Step 3: Test Your Live Site!

Visit your Netlify URL (e.g., `https://nomopix-xyz.netlify.app`)

Test:
- [ ] Homepage loads with 3D animation
- [ ] Sign up works
- [ ] Login works
- [ ] Dashboard shows your name
- [ ] Send message works
- [ ] WhatsApp button opens WhatsApp
- [ ] Email button opens email

---

## 🎉 You're Live!

Your site is now online at:
- **Frontend:** https://your-site.netlify.app
- **Backend:** https://your-backend.onrender.com

---

## Quick Commands Reference

```bash
# Update backend URL in frontend
echo "REACT_APP_API_URL=https://your-backend.onrender.com" > client/.env.production

# Build frontend locally (optional)
cd client && npm run build

# Push to GitHub (triggers auto-deploy if connected)
git add .
git commit -m "Deploy to production"
git push origin main
```

---

## Costs

All free tiers:
- Netlify: Free (100GB bandwidth/month)
- Render: Free (750 hours/month)
- Railway MySQL: Free (512MB storage)

---

## Next Steps

- [ ] Add custom domain on Netlify
- [ ] Set up SSL (automatic on Netlify)
- [ ] Monitor with Render dashboard
- [ ] Share your website! 🎉

---

## Troubleshooting

**Frontend can't connect to backend:**
- Check CORS settings in `server/index.js`
- Verify `REACT_APP_API_URL` in Netlify environment variables

**Database connection error:**
- Verify all DB credentials in Render environment variables
- Check if MySQL is accessible from outside

**404 on page refresh:**
- Verify `_redirects` file exists in `client/public/`
- Check Netlify redirects settings

---

Made with ❤️ by NOMOPIX

