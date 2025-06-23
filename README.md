# Hotel ZY Website

A modern, responsive website for Hotel ZY built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 GitHub Pages Deployment

This website is optimized for GitHub Pages hosting with static export configuration.

### Quick Deploy Steps:

1. **Fork or Clone** this repository
2. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
3. **Push changes** to main branch
4. **Wait for deployment** (usually 2-5 minutes)

### Your website will be available at:
\`\`\`
https://[your-username].github.io/[repository-name]
\`\`\`

## 🛠️ Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
\`\`\`

## 📁 Project Structure

\`\`\`
hotel-zy/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                # Utility functions
├── public/             # Static assets (images, icons)
├── .github/workflows/  # GitHub Actions for deployment
└── next.config.mjs     # Next.js configuration
\`\`\`

## ✨ Features

- 📱 **Fully Responsive** - Works on all devices
- 🎨 **Modern UI** - Clean, professional design
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📞 **Click-to-Call** - Direct phone integration
- 💬 **WhatsApp Integration** - Direct messaging
- 🗺️ **Google Maps** - Interactive location map
- 🖼️ **Image Gallery** - Organized photo showcase
- 🏨 **Room Showcase** - Detailed room information
- 📧 **Contact Form** - Easy inquiry submission

## 🔧 Configuration

The website is pre-configured for GitHub Pages with:

- ✅ Static export enabled
- ✅ Image optimization disabled for static hosting
- ✅ Proper base path handling
- ✅ SEO optimization
- ✅ PWA manifest
- ✅ Automated deployment workflow

## 📝 Customization

### Update Hotel Information:
- Edit contact details in `app/contact/page.tsx`
- Update hotel name and branding in `components/navigation.tsx`
- Modify room information in `app/rooms/page.tsx`

### Replace Images:
- Add your images to `public/images/`
- Update image references in components
- Maintain the same file structure for best results

### Styling:
- Colors and themes: `app/globals.css`
- Component styles: Individual component files
- Tailwind config: `tailwind.config.ts`

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📞 Support

For technical support or customization requests, please create an issue in this repository.

---

Built with ❤️ using Next.js and deployed on GitHub Pages
\`\`\`

Let's create a .gitignore file to exclude unnecessary files:
