# NOMOPIX Designs - Stunning 3D Business Website

<div align="center">
  <h3>🚀 Elevate Your Digital Identity with Exceptional Website Design Creations!</h3>
  <p><strong>Professional Websites Starting at Just ₹999</strong></p>
</div>

---

## ✨ Features

### 🎨 Stunning 3D Design
- **Interactive 3D Hero Section** with Three.js animations
- Modern, eye-catching UI with smooth animations using Framer Motion
- Responsive design that looks great on all devices

### 💰 Special Offers
- **Main Offer**: Websites starting at just ₹999 (90% OFF from ₹9,999)
- **Exit-Intent Popup**: Special first-time user discount of ₹499
- Attractive pricing display with countdown timers

### 👤 User Authentication
- Complete signup/login system with JWT authentication
- Secure password hashing with bcrypt
- Protected routes and user sessions

### 📊 Customer Dashboard
- Personalized user dashboard with profile information
- Send messages directly to admin
- View message history with status tracking (unread/read/replied)
- Quick access to WhatsApp and email support

### 📱 Contact Features
- **WhatsApp Integration** - Direct chat button with pre-filled messages
- **Email Integration** - One-click email to admin
- Contact form for non-registered users
- Multiple touchpoints for customer engagement

### 🎯 Business Sections
- About section with team information
- Services showcase (6+ services)
- Animated portfolio with horizontal auto-scroll
- Client testimonials carousel
- Core attributes with statistics
- Professional contact section

### 🔔 Marketing Features
- Exit-intent popup to capture leaving visitors
- Persuasive copy to encourage customer action
- Social proof with client testimonials
- Trust indicators and satisfaction guarantees

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern JavaScript library
- **React Router** - Client-side routing
- **Three.js & React Three Fiber** - 3D graphics and animations
- **Framer Motion** - Smooth animations
- **Axios** - HTTP client
- **React Hot Toast** - Beautiful notifications
- **React Icons** - Icon library

### Backend
- **Node.js & Express** - Server framework
- **MySQL** - Relational database
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MySQL** (v5.7 or higher)

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
cd nomopix
```

### 2. Install Dependencies

#### Install root dependencies (backend):
```bash
npm install
```

#### Install client dependencies (frontend):
```bash
cd client
npm install
cd ..
```

**Or install both at once:**
```bash
npm run install-all
```

### 3. Database Setup

#### Create MySQL Database:
```bash
mysql -u root -p
```

Then run the SQL commands:
```sql
CREATE DATABASE nomopix_db;
USE nomopix_db;
```

#### Run the database schema:
```bash
mysql -u root -p nomopix_db < server/db.sql
```

### 4. Environment Configuration

Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Update the `.env` file with your configuration:
```env
# Server Configuration
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=nomopix_db

# JWT Secret (Change this to a random string)
JWT_SECRET=your_super_secret_jwt_key_change_this

# WhatsApp Configuration
WHATSAPP_NUMBER=917010066299

# Email Configuration
ADMIN_EMAIL=nomopix.designs@gmail.com
```

### 5. Start the Application

#### Development Mode (runs both frontend and backend):
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend React app on `http://localhost:3000`

#### Or run them separately:

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

### 6. Access the Application

Open your browser and navigate to:
- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000/api`

---

## 📁 Project Structure

```
nomopix/
├── client/                      # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── Scene3D.js       # 3D animations
│   │   │   ├── About.js
│   │   │   ├── Services.js
│   │   │   ├── Portfolio.js
│   │   │   ├── CoreAttributes.js
│   │   │   ├── Testimonials.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   └── ExitPopup.js     # Exit-intent popup
│   │   ├── pages/               # Page components
│   │   │   ├── HomePage.js
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   └── Dashboard.js
│   │   ├── context/
│   │   │   └── AuthContext.js   # Authentication context
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server/                      # Node.js backend
│   ├── config/
│   │   └── db.js               # Database connection
│   ├── middleware/
│   │   └── auth.js             # JWT authentication
│   ├── routes/
│   │   ├── auth.js             # Auth routes
│   │   ├── messages.js         # Message routes
│   │   └── user.js             # User routes
│   ├── db.sql                  # Database schema
│   └── index.js                # Server entry point
├── .env                        # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### User
- `GET /api/user/profile` - Get user profile (protected)
- `PUT /api/user/profile` - Update user profile (protected)

### Messages
- `POST /api/messages/send` - Send message to admin (protected)
- `GET /api/messages/my-messages` - Get user messages (protected)
- `POST /api/messages/contact` - Contact form submission (public)

### Health Check
- `GET /api/health` - Check API status

---

## 🎨 Key Features Explained

### 1. 3D Hero Section
The hero section uses Three.js for stunning 3D animations:
- Animated sphere with distortion effects
- Particle ring system
- Auto-rotating camera
- Stars background

### 2. Exit-Intent Popup
Detects when users are about to leave and shows special offer:
- Triggers on mouse leaving viewport
- Shows once per session
- ₹499 special offer for first-time users
- Direct WhatsApp and signup buttons

### 3. Customer Dashboard
After login, users get access to:
- Profile information display
- Message sending interface
- Message history with status tracking
- Quick action buttons (WhatsApp, Email)
- Special offers and promotions

### 4. Auto-Scrolling Sections
- Portfolio section with horizontal auto-scroll
- Testimonials carousel
- Smooth animations and hover effects

---

## 📱 Contact Integration

### WhatsApp
Pre-configured with your WhatsApp number:
```javascript
const whatsappNumber = '917010066299';
const message = 'Hi! I am interested in your Rs.999 website offer!';
window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
```

### Email
Direct email integration:
```javascript
const email = 'nomopix.designs@gmail.com';
window.location.href = `mailto:${email}`;
```

---

## 🔧 Customization

### Update Contact Information
Edit in `.env`:
```env
WHATSAPP_NUMBER=your_number
ADMIN_EMAIL=your_email@example.com
```

### Change Pricing
Update in `client/src/components/Hero.js`:
```javascript
<span className="old-price">₹9,999</span>
<span className="new-price">₹999</span>
```

### Modify Colors
Edit CSS variables in `client/src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
}
```

---

## 🐛 Troubleshooting

### Database Connection Issues
1. Ensure MySQL is running
2. Check credentials in `.env`
3. Verify database exists: `SHOW DATABASES;`

### Port Already in Use
Change ports in `.env`:
```env
PORT=5001  # Or any available port
```

### Frontend Not Loading
1. Clear browser cache
2. Delete `node_modules` and reinstall:
```bash
cd client
rm -rf node_modules package-lock.json
npm install
```

---

## 📈 Production Deployment

### Build Frontend
```bash
cd client
npm run build
```

### Environment Variables
Set production environment variables on your hosting platform.

### Database
1. Create production MySQL database
2. Run `server/db.sql` on production database
3. Update `.env` with production credentials

### Server
Deploy backend to services like:
- Heroku
- AWS EC2
- DigitalOcean
- Vercel (for Node.js)

---

## 📞 Support

For support and inquiries:
- 📧 Email: nomopix.designs@gmail.com
- 📱 WhatsApp: +91 70100 66299

---

## 📄 License

This project is proprietary software owned by NOMOPIX Designs.

---

## 👥 Team

**NOMOPIX Digital Studio** - Founded by Jay and Khalid

---

<div align="center">
  <p>Made with ❤️ by NOMOPIX Team</p>
  <p>© 2026 NOMOPIX. All rights reserved.</p>
</div>

