# Northslope Web

Marketing site for Northslope — a software consultancy focused on complex environments, regulated industries, and high-stakes operations.

Built with Next.js 16, React 19, and Tailwind CSS v4.

## Structure

```
src/
  app/
    layout.tsx       # Root layout, fonts, metadata
    page.tsx         # Single-page composition
    globals.css      # Design tokens, typography scale, layout helpers
  components/
    Nav.tsx          # Top navigation bar
    Hero.tsx         # Split-layout hero with animated network graph
    NetworkGraph.tsx # Canvas-based node/edge animation
    Services.tsx     # Service offerings section
    Work.tsx         # Case studies / selected work
    SocialProof.tsx  # Client logos or testimonials
    CTA.tsx          # Bottom call-to-action
    Footer.tsx       # Site footer
```

## Running locally

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build   # Production build
npm run start   # Serve the production build locally
npm run lint    # Run ESLint
```

## Deploying to Vercel

### Option A — Vercel CLI

```bash
# Install the CLI (once)
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Option B — Git integration (recommended)

1. Push the repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build configuration needed.
4. Every push to `main` deploys to production automatically. Pull requests get preview URLs.

### Environment variables

No environment variables are required to run the site. If you add any in future, set them in the Vercel dashboard under **Project → Settings → Environment Variables**, or via the CLI:

```bash
vercel env add MY_VAR
```
