#!/bin/bash

echo "🚀 Deploying Hotel ZY to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📤 Push to GitHub to trigger deployment"
    echo "🌐 Your site will be available at: https://[your-username].github.io/[repository-name]"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
