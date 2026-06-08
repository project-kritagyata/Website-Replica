# Vercel Deployment Guide — Project Kritagyata

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Step-by-Step Setup

### 1. Push to GitHub

Push this entire repository (or just `artifacts/kritagyata/`) to a GitHub repo.

> **Tip:** You can push the whole monorepo and set the Vercel root directory to `artifacts/kritagyata`. This is the recommended approach.

### 2. Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. On the **Configure Project** screen, set:

| Setting | Value |
|---|---|
| **Root Directory** | `artifacts/kritagyata` |
| **Framework Preset** | Vite |
| **Build Command** | `npm run build:vercel` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

4. Click **Deploy** — no environment variables required.

---

## What Changed (Files Modified for Vercel)

| File | What changed | Why |
|---|---|---|
| `vite.vercel.config.ts` | **New file** — Vite config without Replit plugins, no PORT/BASE_PATH requirement, `base: "/"`, outputs to `dist/` | Replit's `vite.config.ts` throws at startup if `PORT` and `BASE_PATH` env vars are missing (Vercel doesn't set them) |
| `vercel.json` | **New file** — sets build command, output dir, SPA rewrites | All routes (e.g. `/our-work`, `/gallery`) must rewrite to `index.html` so React Router (wouter) handles them client-side |
| `tsconfig.vercel.json` | **New file** — standalone TypeScript config with no workspace references | `tsconfig.json` extends `../../tsconfig.base.json` and references `../../lib/api-client-react`, both of which don't exist in a standalone deploy |
| `package.json` | Added `build:vercel` and `preview:vercel` scripts; replaced all `catalog:` references with real semver versions; removed `@replit/vite-plugin-*` and `@workspace/api-client-react` dependencies | `catalog:` is a pnpm workspace feature — it resolves versions from `pnpm-workspace.yaml` which isn't available when Vercel installs just this subdirectory. Replit plugins and workspace packages don't exist outside the monorepo |
| `index.html` | Updated meta description and `<title>` to remove "built on Replit" copy; switched favicon from `favicon.svg` to `logo.png` | Accurate public-facing metadata |

---

## Removed Replit-Specific Dependencies

These packages are **not** installed for the Vercel build:

| Package | Reason removed |
|---|---|
| `@replit/vite-plugin-runtime-error-modal` | Replit-only dev overlay |
| `@replit/vite-plugin-cartographer` | Replit file explorer integration |
| `@replit/vite-plugin-dev-banner` | Replit dev banner |
| `@workspace/api-client-react` | Monorepo workspace package — not needed (all data is hardcoded) |

---

## No Backend Required

This site is **100% static**. All project data (drives, stats, gallery) is hardcoded in `src/data/index.ts`. There are no API calls. Vercel's free Hobby plan is more than sufficient.

---

## Environment Variables

**None required.** The site has no runtime secrets.

---

## Custom Domain

After deploying, go to **Project → Settings → Domains** in Vercel and add your custom domain (e.g. `projectkritagyata.org`). Vercel provisions SSL automatically.

---

## Local Vercel Build Test

To verify the build locally before deploying:

```bash
cd artifacts/kritagyata
npm install
npm run build:vercel
# Output appears in artifacts/kritagyata/dist/
```

To preview the production build locally:

```bash
npm run preview:vercel
# Opens at http://localhost:4173
```
