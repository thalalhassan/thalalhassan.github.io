# Thalal Hassan — Cinematic Portfolio

A responsive, dark editorial portfolio built with React, TypeScript, Vite, GSAP, Lenis and Lucide.

## Run locally

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
pnpm preview
```

## Personalise before publishing

Search the project for these placeholders and replace them:

- `i.thalalhassan@gmail.com` — your public contact email.
- `https://github.com/` — your GitHub profile URL.
- `https://www.linkedin.com/` — your LinkedIn profile URL.
- Project descriptions and dates in `src/data.ts`.
- The experience statistic in `src/components/About.tsx`.

### Add your portrait

The hero currently uses a designed initials treatment so the site works without a photo. To use your own portrait, add a well-lit, high-resolution cutout or portrait at `public/portrait.webp`, then replace the `.portrait-frame` contents in `src/components/Hero.tsx` with:

```tsx
<img className="portrait-image" src="/portrait.webp" alt="Thalal Hassan" />
```

Add this CSS:

```css
.portrait-image {
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
```

Use a photo you own or have permission to publish. Avoid placing confidential employer or client information in public case studies.

## Deploy to GitHub Pages

This project is a Vite static site.

1. Push the project to a GitHub repository.
2. If publishing at `https://username.github.io/repository/`, change `base` in `vite.config.ts` to `"/repository/"`. For a custom root domain, keep `base: "/"`.
3. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
4. Add the workflow below at `.github/workflows/deploy.yml`.
5. For a custom domain, configure the domain in GitHub Pages and add the matching DNS records at your DNS provider.

```yaml
name: Deploy portfolio
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Generate and commit a lockfile before using `--frozen-lockfile`:

```bash
pnpm install
git add pnpm-lock.yaml
git commit -m "Add pnpm lockfile"
```

## Notes

- The design uses a CSS portrait placeholder and CSS project artwork; no external image dependency is required.
- Motion is disabled for visitors who request reduced motion.
- Update metadata in `index.html` before sharing the site.
- This is a frontend-only portfolio. No backend or secrets are required.
