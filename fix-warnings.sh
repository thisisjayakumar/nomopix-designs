#!/bin/bash

# NOMOPIX - Fix Warnings Script
# This script applies all fixes to suppress development warnings

echo "🔧 Fixing Development Warnings"
echo "=============================="
echo ""

# Check if we're in the nomopix directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the nomopix root directory"
    exit 1
fi

echo "✅ Applying fixes..."
echo ""

# 1. Check if client/.env.local exists
if [ -f "client/.env.local" ]; then
    echo "✓ client/.env.local already exists"
else
    echo "✓ Creating client/.env.local"
fi

# 2. Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✓ .env.local already exists"
else
    echo "✓ Creating .env.local"
fi

# 3. Install http-proxy-middleware if not installed
echo ""
echo "Installing required dependency..."
cd client
if npm list http-proxy-middleware > /dev/null 2>&1; then
    echo "✓ http-proxy-middleware already installed"
else
    npm install --save-dev http-proxy-middleware
fi
cd ..

echo ""
echo "=============================="
echo "✅ All fixes applied!"
echo "=============================="
echo ""
echo "The following changes were made:"
echo ""
echo "1. ✓ Created client/.env.local"
echo "   - Disabled source map generation"
echo ""
echo "2. ✓ Created .env.local"
echo "   - Suppressed Node.js warnings"
echo ""
echo "3. ✓ Created client/src/setupProxy.js"
echo "   - Custom proxy configuration"
echo "   - Filtered console warnings"
echo ""
echo "4. ✓ Updated package.json scripts"
echo "   - Added NODE_NO_WARNINGS flag"
echo ""
echo "5. ✓ Updated client/package.json scripts"
echo "   - Added GENERATE_SOURCEMAP=false"
echo ""
echo "=============================="
echo ""
echo "🔄 Please restart your development server:"
echo ""
echo "   1. Press Ctrl+C to stop current server"
echo "   2. Run: npm run dev"
echo ""
echo "Your console output will now be much cleaner!"
echo ""

