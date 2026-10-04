# Astro GitHub Pages Site

A lightweight Astro site prepared for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Push to `main`. GitHub Actions builds the site and deploys it to GitHub Pages.

## Paper reading login gate

Daily paper-reading posts (`src/content/blog/*-paper-reading.md`) carry `private: true` in frontmatter. Private posts are hidden entirely from public listings (homepage "Writing", blog index, archive, tags, collections) until a visitor unlocks the gate; their post pages show an unlock panel instead of the body.

- The gate lives in `src/layouts/BaseLayout.astro`: an inline script adds `pr-unlocked` on `<html>` when `localStorage['paper-reading-unlock']` is `'1'`; gated elements are marked `pr-item` / `pr-content`; a SHA-256 check of the entered password stores the flag.
- Change the password: `printf '%s' 'NEWPASSWORD' | sha256sum`, then replace the `HASH` constant in `src/layouts/BaseLayout.astro`.
- Front-end gate only (static site): keeps posts out of normal browsing, not out of the raw HTML.
- Automated publishing was retired on 2026-10-04; new posts are written manually (or via `/login/`).
