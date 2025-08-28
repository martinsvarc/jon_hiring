# Deployment Guide

This guide will help you deploy your Next.js application to GitHub Pages.

## Prerequisites

1. Make sure you have a GitHub account
2. Your project should be pushed to a GitHub repository

## Steps to Deploy

### 1. Push Your Code to GitHub

If you haven't already, push your code to a GitHub repository:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. This will allow the workflow to deploy automatically

### 3. Configure Repository Settings

1. In your repository settings, go to "Actions" → "General"
2. Make sure "Actions permissions" is set to "Allow all actions and reusable workflows"
3. Scroll down to "Workflow permissions" and select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"

### 4. Automatic Deployment

Once you push to the `main` or `master` branch, the GitHub Actions workflow will automatically:

1. Build your Next.js application
2. Export it as static files
3. Deploy to GitHub Pages

### 5. Access Your Deployed Site

After successful deployment, your site will be available at:
`https://[your-username].github.io/jon-carreer/`

## Troubleshooting

### Build Issues
- Check the "Actions" tab in your GitHub repository for build logs
- Ensure all dependencies are properly listed in `package.json`
- Verify that your Next.js configuration is correct

### Deployment Issues
- Make sure GitHub Pages is enabled in repository settings
- Check that the workflow has proper permissions
- Verify the repository name matches the `basePath` in `next.config.mjs`

### Local Testing
To test the production build locally:

```bash
npm run build
npm run start
```

## Notes

- The application is configured for static export, which means it works without a server
- API routes won't work in this static deployment - consider using external APIs or serverless functions
- Images are set to unoptimized mode for static export compatibility
- The base path is set to `/jon-carreer` for GitHub Pages deployment
