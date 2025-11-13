# 🚀 NOMOPIX - Quick Start Guide

## Prerequisites Checklist
- [ ] Node.js installed (v14+)
- [ ] MySQL installed and running
- [ ] Git installed

---

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
cd client && npm install && cd ..
```

### Step 2: Setup Database
```bash
# Login to MySQL
mysql -u root -p

# Create database and run schema
CREATE DATABASE nomopix_db;
USE nomopix_db;
source server/db.sql;
exit;
```

### Step 3: Configure Environment
```bash
# Copy example env file
cp .env.example .env

# Edit .env with your MySQL password
# Change JWT_SECRET to a random string
```

### Step 4: Start Application
```bash
npm run dev
```

### Step 5: Open Browser
```
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```

---

## 🎯 Quick Test

### 1. Test Homepage
- Visit `http://localhost:3000`
- You should see the 3D hero section
- Move mouse to top edge to trigger exit popup

### 2. Test Signup
- Click "Get Started" or "Sign Up"
- Fill in the form
- You should be redirected to dashboard

### 3. Test Dashboard
- Send a test message to admin
- Click WhatsApp button (opens WhatsApp)
- Click Email button (opens email client)

### 4. Test Contact Form (Logged Out)
- Logout from dashboard
- Go to homepage and scroll to contact section
- Fill and submit contact form

---

## 🔧 Common Issues & Fixes

### Issue: "Cannot connect to database"
**Fix:** 
```bash
# Check MySQL is running
sudo service mysql status

# Or on Mac:
brew services list
```

### Issue: "Port 3000 already in use"
**Fix:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

### Issue: "Port 5000 already in use"
**Fix:**
```bash
# Kill the process using port 5000
lsof -ti:5000 | xargs kill -9

# Or change PORT in .env file
```

### Issue: "Module not found"
**Fix:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
rm -rf client/node_modules client/package-lock.json
npm install
cd client && npm install
```

---

## 📝 Default Configuration

### Database
- **Host:** localhost
- **User:** root
- **Database:** nomopix_db

### Ports
- **Backend:** 5000
- **Frontend:** 3000

### Contact Details
- **WhatsApp:** +91 70100 66299
- **Email:** nomopix.designs@gmail.com

---

## 🎨 Customization Checklist

- [ ] Update `.env` with your database credentials
- [ ] Change JWT_SECRET in `.env`
- [ ] Update WhatsApp number in `.env`
- [ ] Update email in `.env`
- [ ] Modify pricing in Hero component (optional)
- [ ] Add your own project images in Portfolio component
- [ ] Update team information in About section

---

## 📱 Features to Test

### Public Features (No Login Required)
- [x] 3D animated hero section
- [x] Auto-scrolling portfolio
- [x] Auto-scrolling testimonials
- [x] Exit-intent popup (move mouse to top)
- [x] WhatsApp button
- [x] Email button
- [x] Contact form submission
- [x] Responsive mobile design

### User Features (After Signup/Login)
- [x] User registration
- [x] User login
- [x] Dashboard access
- [x] Profile display
- [x] Send message to admin
- [x] View message history
- [x] Message status tracking
- [x] Quick WhatsApp access
- [x] Quick email access

---

## 🌐 Production Checklist

Before deploying to production:

- [ ] Change JWT_SECRET to a strong random string
- [ ] Update database credentials for production
- [ ] Build frontend: `cd client && npm run build`
- [ ] Set up SSL certificate
- [ ] Configure production environment variables
- [ ] Set up database backups
- [ ] Configure CORS for your production domain
- [ ] Update WhatsApp number and email
- [ ] Test all features in production
- [ ] Set up monitoring and logging

---

## 📞 Need Help?

If you encounter any issues:

1. **Check the detailed README.md** for comprehensive documentation
2. **Review error logs** in terminal
3. **Check browser console** for frontend errors
4. **Contact Support:**
   - Email: nomopix.designs@gmail.com
   - WhatsApp: +91 70100 66299

---

## 🎉 You're Ready!

Your NOMOPIX website is now running! Start customizing and make it your own.

**Key URLs:**
- Homepage: http://localhost:3000
- Login: http://localhost:3000/login
- Signup: http://localhost:3000/signup
- Dashboard: http://localhost:3000/dashboard
- API: http://localhost:5000/api

**Happy Coding! 🚀**

---

Made with ❤️ by NOMOPIX Team

