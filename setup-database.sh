#!/bin/bash

# NOMOPIX Database Setup Script
# This script will create the database and tables

echo "🗄️  NOMOPIX Database Setup"
echo "=========================="
echo ""

# Check if MySQL is running
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL is not installed or not in PATH"
    echo "Please install MySQL first"
    exit 1
fi

echo "✅ MySQL found"
echo ""

# Get MySQL credentials
read -p "Enter MySQL username (default: root): " DB_USER
DB_USER=${DB_USER:-root}

echo ""
read -sp "Enter MySQL password: " DB_PASSWORD
echo ""
echo ""

# Create database and import schema
echo "Creating database and tables..."
echo ""

mysql -u "$DB_USER" -p"$DB_PASSWORD" << EOF
-- Drop database if exists (for clean setup)
DROP DATABASE IF EXISTS nomopix_db;

-- Create database
CREATE DATABASE nomopix_db;

-- Use the database
USE nomopix_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Messages Table
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('unread', 'read', 'replied') DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Contact Inquiries Table (for non-logged-in users)
CREATE TABLE IF NOT EXISTS contact_inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    source VARCHAR(50) DEFAULT 'contact_form',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_message_user ON messages(user_id);
CREATE INDEX idx_message_status ON messages(status);

-- Show created tables
SHOW TABLES;
EOF

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Database setup completed successfully!"
    echo ""
    echo "Database: nomopix_db"
    echo "Tables created:"
    echo "  - users"
    echo "  - messages"
    echo "  - contact_inquiries"
    echo ""
    echo "Now you can start the application with:"
    echo "  npm run dev"
else
    echo ""
    echo "❌ Database setup failed!"
    echo "Please check your MySQL credentials and try again."
    exit 1
fi

