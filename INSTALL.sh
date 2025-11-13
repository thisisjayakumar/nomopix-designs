#!/bin/bash

# NOMOPIX Website - Installation Script
# This script automates the installation process

echo "🚀 NOMOPIX Website - Installation Script"
echo "=========================================="
echo ""

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check npm installation
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Check MySQL installation
if ! command -v mysql &> /dev/null; then
    echo "⚠️  MySQL is not installed or not in PATH."
    echo "Please make sure MySQL is installed and running."
    echo ""
    read -p "Continue anyway? (y/n): " continue_install
    if [ "$continue_install" != "y" ]; then
        exit 1
    fi
fi

echo ""
echo "📦 Installing dependencies..."
echo ""

# Install root dependencies
echo "Installing backend dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

# Install client dependencies
echo ""
echo "Installing frontend dependencies..."
cd client
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

cd ..

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Setup environment file
if [ ! -f ".env" ]; then
    echo "📝 Creating .env file..."
    
    read -p "Enter MySQL username (default: root): " db_user
    db_user=${db_user:-root}
    
    read -sp "Enter MySQL password: " db_password
    echo ""
    
    read -p "Enter database name (default: nomopix_db): " db_name
    db_name=${db_name:-nomopix_db}
    
    read -p "Enter WhatsApp number (default: 917010066299): " whatsapp_number
    whatsapp_number=${whatsapp_number:-917010066299}
    
    read -p "Enter admin email (default: nomopix.designs@gmail.com): " admin_email
    admin_email=${admin_email:-nomopix.designs@gmail.com}
    
    # Generate random JWT secret
    jwt_secret=$(openssl rand -base64 32 2>/dev/null || echo "nomopix_jwt_secret_$(date +%s)")
    
    cat > .env << EOF
# Server Configuration
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_USER=$db_user
DB_PASSWORD=$db_password
DB_NAME=$db_name

# JWT Secret
JWT_SECRET=$jwt_secret

# WhatsApp Configuration
WHATSAPP_NUMBER=$whatsapp_number

# Email Configuration
ADMIN_EMAIL=$admin_email
EOF

    echo ""
    echo "✅ .env file created successfully!"
else
    echo "⚠️  .env file already exists. Skipping..."
fi

echo ""
echo "🗄️  Database Setup"
echo "=================="
echo ""
echo "Would you like to set up the database now?"
read -p "Setup database? (y/n): " setup_db

if [ "$setup_db" = "y" ]; then
    echo ""
    echo "Creating database and tables..."
    echo "You may need to enter your MySQL password..."
    
    mysql -u $db_user -p$db_password -e "CREATE DATABASE IF NOT EXISTS $db_name;"
    mysql -u $db_user -p$db_password $db_name < server/db.sql
    
    if [ $? -eq 0 ]; then
        echo "✅ Database setup completed!"
    else
        echo "❌ Database setup failed. Please run manually:"
        echo "   mysql -u $db_user -p $db_name < server/db.sql"
    fi
else
    echo ""
    echo "⚠️  Skipping database setup."
    echo "Remember to create the database manually:"
    echo "   mysql -u $db_user -p"
    echo "   CREATE DATABASE $db_name;"
    echo "   USE $db_name;"
    echo "   source server/db.sql;"
fi

echo ""
echo "=========================================="
echo "✨ Installation Complete!"
echo "=========================================="
echo ""
echo "🎉 NOMOPIX website is ready to run!"
echo ""
echo "To start the application:"
echo "   npm run dev"
echo ""
echo "Then open your browser to:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:5000"
echo ""
echo "📚 Documentation:"
echo "   - README.md       - Full documentation"
echo "   - QUICK_START.md  - Quick setup guide"
echo "   - FEATURES.md     - Complete feature list"
echo ""
echo "📞 Support:"
echo "   Email: $admin_email"
echo "   WhatsApp: +$whatsapp_number"
echo ""
echo "=========================================="
echo "Made with ❤️  by NOMOPIX Team"
echo "=========================================="

