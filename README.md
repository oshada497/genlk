# Gaming Streamer Portfolio

A dynamic, responsive gaming streamer portfolio website with interactive elements, GSAP animations, and a modern design.

## Features

- Fullscreen intro animation with neon green text
- Hero section with responsive layout and animations
- About section with streamer details
- Streaming setup showcase
- Weekly schedule display
- Gallery with hover effects
- Contact form
- Newsletter subscription
- Mobile-responsive design
- GSAP animations throughout

## Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- GSAP for animations
- Framer Motion
- Shadcn UI components

## Development

To start the development server:

```bash
npm run dev
```

## Building for Production (Static Site)

This project has been configured as a static site that can be deployed to Cloudflare Pages or other static hosting services.

To build the static site:

```bash
node build-static.js
```

The built files will be in the `dist/public` directory.

## Deploying to Cloudflare Pages

1. Push your code to a GitHub repository
2. Log in to the Cloudflare Dashboard
3. Navigate to Pages > Create a project > Connect to Git
4. Select your repository
5. Configure your build settings:
   - Build command: `node build-static.js`
   - Build output directory: `dist/public`
6. Click "Save and Deploy"

## Customization

### Static Data

All site content is configured in the static data file at `client/src/data/static-data.ts`. You can modify this file to update:

- Streamer profile information
- Streaming schedule
- Setup items
- Gallery content

### Styling

The site uses TailwindCSS for styling. Theme colors and other design elements can be customized in:

- `tailwind.config.ts` - Theme colors and typography
- `client/src/index.css` - Global styles and CSS variables

## Forms

Forms are implemented with a static approach:

- Contact form - Simulates submission but can be updated to use a service like Formspree
- Newsletter form - Can be integrated with a newsletter service

## SEO

SEO files are included:

- `robots.txt` - Update with your domain
- `_headers` - Security headers for Cloudflare Pages