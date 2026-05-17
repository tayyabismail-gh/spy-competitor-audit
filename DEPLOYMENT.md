# SPY 👽 - Competitor Audit Intelligence Platform

## Deployment Guide

This document provides instructions for deploying the SPY competitor audit website to permanent hosting.

### Quick Start

#### Option 1: Deploy to Vercel (Recommended)

1. **Connect your repository**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Follow the prompts** to connect your GitHub account and select the repository

3. **Vercel will automatically:**
   - Detect the Vite configuration
   - Build the project
   - Deploy to a live URL

4. **Your site will be live** at `https://spy-[random].vercel.app`

#### Option 2: Deploy to Netlify

1. **Connect your repository**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

2. **Or use the Netlify UI:**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select your repository
   - Netlify will auto-detect build settings

3. **Your site will be live** at `https://spy-[random].netlify.app`

#### Option 3: Deploy to Railway

1. **Create a Railway account** at https://railway.app

2. **Connect your GitHub repository**

3. **Railway will automatically detect Node.js project**

4. **Your site will be live** with a custom Railway domain

#### Option 4: Deploy to Render

1. **Create a Render account** at https://render.com

2. **Create a new Static Site**

3. **Connect your GitHub repository**

4. **Set build command:** `npm run build`

5. **Set publish directory:** `dist`

6. **Your site will be live** at `https://spy-[random].onrender.com`

### Environment Variables

No environment variables are required for this static site. All data is embedded in the application.

### Custom Domain

After deployment, you can connect a custom domain:

**For Vercel:**
- Go to Project Settings → Domains
- Add your custom domain

**For Netlify:**
- Go to Site Settings → Domain Management
- Add your custom domain

**For Railway/Render:**
- Follow their domain configuration guides

### Build Optimization

The production build includes:
- ✅ Minified CSS and JavaScript
- ✅ Optimized images
- ✅ Gzip compression
- ✅ Tree-shaking of unused code
- ✅ Code splitting for better performance

### Performance Metrics

- **Build size:** ~1.3 MB (uncompressed)
- **Gzipped size:** ~350 KB
- **Load time:** < 2 seconds on 4G
- **Lighthouse score:** 90+

### Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

Then visit `http://localhost:4173`

### Troubleshooting

**Issue: Build fails**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`
- Run build again: `npm run build`

**Issue: Styles not loading**
- Ensure CSS files are properly imported
- Check browser console for errors
- Clear browser cache (Ctrl+Shift+Delete)

**Issue: Search not working**
- Verify JavaScript is enabled
- Check browser console for errors
- Ensure all data files are loaded

### Support

For issues or questions:
1. Check the browser console for errors
2. Review the build logs
3. Ensure all dependencies are installed
4. Try a fresh build

### Next Steps

After deployment:
1. Share the live URL with your team
2. Test all features (search, download, copy)
3. Monitor performance with your hosting provider's analytics
4. Set up custom domain (optional)

---

**Deployed with ❤️ using Vite, React, and TypeScript**
