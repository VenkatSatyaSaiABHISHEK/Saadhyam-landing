#!/bin/bash
# Backend Setup Script

echo "🚀 Leads Backend Setup"
echo "====================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Download Firebase service account JSON from Firebase Console"
echo "2. Download Google service account JSON from Google Cloud Console"
echo "3. Share your Google Sheet with the service account email"
echo "4. Update .env file with your credentials"
echo "5. Run: npm run dev"
echo ""
echo "📚 See README.md for detailed instructions"
