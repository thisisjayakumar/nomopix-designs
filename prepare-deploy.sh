#!/bin/bash

# NOMOPIX - Prepare for Deployment Script

echo "🚀 NOMOPIX Deployment Preparation"
echo "=================================="
echo ""

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the nomopix root directory"
    exit 1
fi

echo "Step 1: Getting your backend URL"
echo "================================="
echo ""
read -p "Enter your backend URL (e.g., https://nomopix-backend.onrender.com): " BACKEND_URL

if [ -z "$BACKEND_URL" ]; then
    echo "❌ Backend URL is required!"
    exit 1
fi

echo ""
echo "Step 2: Updating frontend configuration..."
echo "=========================================="

# Create/update client/.env.production
cat > client/.env.production << EOF
# Production API URL
REACT_APP_API_URL=$BACKEND_URL

# Disable source maps in production
GENERATE_SOURCEMAP=false
EOF

echo "✅ Created client/.env.production"

# Update config.js with backend URL
cat > client/src/config.js << EOF
// API Configuration
// Automatically uses production or development API URL

const config = {
  apiUrl: process.env.REACT_APP_API_URL || 
          (process.env.NODE_ENV === 'production' 
            ? '$BACKEND_URL'
            : 'http://localhost:5000'),
};

export default config;
EOF

echo "✅ Updated client/src/config.js"

# Ensure _redirects file exists
if [ ! -f "client/public/_redirects" ]; then
    echo "/*    /index.html   200" > client/public/_redirects
    echo "✅ Created client/public/_redirects"
else
    echo "✅ client/public/_redirects already exists"
fi

# Ensure netlify.toml exists
if [ ! -f "netlify.toml" ]; then
    echo "⚠️  netlify.toml not found (should exist)"
else
    echo "✅ netlify.toml exists"
fi

echo ""
echo "Step 3: Testing build..."
echo "========================"
echo ""

cd client
echo "Installing dependencies..."
npm install > /dev/null 2>&1

echo "Building production bundle..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    BUILD_SIZE=$(du -sh build | cut -f1)
    echo "   Build size: $BUILD_SIZE"
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi

cd ..

echo ""
echo "=================================="
echo "✅ Deployment Preparation Complete!"
echo "=================================="
echo ""
echo "Your configuration:"
echo "  Backend URL: $BACKEND_URL"
echo "  Build output: client/build"
echo ""
echo "📋 Next Steps:"
echo ""
echo "For Netlify (Drag & Drop):"
echo "  1. Go to https://app.netlify.com"
echo "  2. Drag the 'client/build' folder to Netlify"
echo "  3. Your site will be live in ~30 seconds!"
echo ""
echo "For Netlify (GitHub Auto-Deploy):"
echo "  1. Commit and push your changes:"
echo "     git add ."
echo "     git commit -m 'Prepare for deployment'"
echo "     git push origin main"
echo ""
echo "  2. Go to https://app.netlify.com"
echo "  3. Click 'Add new site' → 'Import from Git'"
echo "  4. Configure:"
echo "     Base directory: client"
echo "     Build command: npm run build"
echo "     Publish directory: client/build"
echo ""
echo "  5. Add environment variable:"
echo "     REACT_APP_API_URL=$BACKEND_URL"
echo ""
echo "  6. Click 'Deploy site'"
echo ""
echo "📖 For detailed instructions, see:"
echo "   - DEPLOYMENT_GUIDE.md"
echo "   - deploy-checklist.md"
echo ""
echo "🎉 Good luck with your deployment!"

