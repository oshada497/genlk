# Deploying to Cloudflare Pages

This guide provides steps for deploying your gaming streamer portfolio website to Cloudflare Pages.

## Option 1: Frontend-only Deployment

### Step 1: Prepare your frontend for production

Create a production build configuration file in your project root:

```bash
# Create cloudflare-pages.json
echo '{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "root": "."
}' > cloudflare-pages.json
```

### Step 2: Update API endpoints

Update your frontend API calls to point to your hosted backend. Create a .env file for production:

```
# .env.production
VITE_API_URL=https://your-backend-url.com/api
```

Then update your API client (in client/src/lib/queryClient.ts) to use this URL:

```typescript
// Use environment variables for API URL
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const url = `${API_BASE_URL}${endpoint}`;
  // ...rest of your function
}
```

### Step 3: Deploy to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist/public`
   - Root directory: (leave blank)
3. Add environment variables as needed
4. Deploy!

## Option 2: Full-stack Deployment

For a complete deployment including the backend, you have several options:

### Option 2A: Using Cloudflare Workers for backend

1. Convert your Express API to Cloudflare Workers
2. Use Cloudflare D1 (SQLite database) or connect to an external PostgreSQL database
3. Create a deployment pipeline using Wrangler

### Option 2B: Separate backend hosting

1. Deploy the frontend to Cloudflare Pages as in Option 1
2. Deploy the backend to a service like:
   - Railway
   - Render
   - Fly.io
   - Heroku
3. Set up a PostgreSQL database on a service that provides PostgreSQL:
   - Neon Database (recommended)
   - Supabase
   - Railway
   - Render

## Database Migration

Before deploying, you'll need to migrate your database schema to your production database:

1. Set up a new PostgreSQL database
2. Update your connection string to point to the new database
3. Run migrations:
```bash
DATABASE_URL=your_production_db_url npm run db:push
DATABASE_URL=your_production_db_url npm run db:seed
```

## Environment Variables

Make sure to set these environment variables in your Cloudflare Pages project settings:

For frontend-only deployment:
- `VITE_API_URL`: URL to your backend API

For backend (if applicable):
- `DATABASE_URL`: Your PostgreSQL connection string
- Any other secrets your application needs

## CORS Configuration

If you're hosting frontend and backend separately, you'll need to configure CORS in your Express backend:

```typescript
// Add this to your server/index.ts
import cors from 'cors';

// Configure CORS to allow requests from your Cloudflare Pages domain
app.use(cors({
  origin: 'https://your-frontend-domain.pages.dev',
  credentials: true
}));
```

Don't forget to install the cors package: `npm install cors @types/cors`

## Continuous Deployment

Cloudflare Pages supports automatic deployments when you push to your GitHub repository. To set this up:

1. Connect your GitHub repository to Cloudflare Pages
2. Configure the build settings
3. Each time you push to the main branch, a new deployment will be triggered

## Custom Domain

To use a custom domain with your Cloudflare Pages site:

1. Go to your Cloudflare Pages project
2. Click on "Custom domains"
3. Follow the instructions to set up your domain

## Testing Your Deployment

After deploying, make sure to test:
1. The intro animation works properly
2. All animations and transitions function as expected
3. API requests succeed
4. All pages load correctly