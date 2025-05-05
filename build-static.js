// Static site build script for Cloudflare Pages
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

console.log(`${colors.bright}${colors.cyan}⚡ Building Static Site for Cloudflare Pages${colors.reset}\n`);

try {
  // Step 1: Build frontend
  console.log(`${colors.yellow}📦 Building frontend...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Frontend built successfully${colors.reset}\n`);

  // Step 2: Copy static assets to the output directory
  console.log(`${colors.yellow}📋 Copying static assets...${colors.reset}`);
  
  // Ensure _headers file is in the output directory
  if (fs.existsSync('_headers')) {
    fs.copyFileSync('_headers', path.join('dist', 'public', '_headers'));
    console.log(`${colors.green}✓ Copied _headers file${colors.reset}`);
  }
  
  // Copy robots.txt if exists
  if (fs.existsSync('robots.txt')) {
    fs.copyFileSync('robots.txt', path.join('dist', 'public', 'robots.txt'));
    console.log(`${colors.green}✓ Copied robots.txt file${colors.reset}`);
  }
  
  console.log(`\n${colors.bright}${colors.green}🚀 Static site build complete!${colors.reset}`);
  console.log(`${colors.blue}The static site is ready in the dist/public directory.${colors.reset}`);
  console.log(`${colors.blue}You can deploy this directory to Cloudflare Pages.${colors.reset}\n`);

} catch (error) {
  console.error(`${colors.bright}\x1b[31m❌ Build failed:${colors.reset}`, error);
  process.exit(1);
}