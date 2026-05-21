# FOR-BPM 2026 Landing Page

Static landing page for the FOR-BPM 2026 workshop, generated from markdown with Eleventy (11ty).

## Content workflow
1. Edit only `cfp.md` for workshop content.
2. Run `npm run build` to generate static output in `_site/`.
3. Deploy `_site/` (or let Cloudflare run the build).

The BPM logo is shown in the header from `assets/bpm-logo.svg`.

## Files
- `cfp.md`: Source content (the only file you normally edit)
- `_includes/layouts/base.njk`: Page template
- `.eleventy.js`: Eleventy config
- `styles.css`: Visual design and responsive behavior
- `assets/bpm-logo.svg`: Small BPM logo shown in header
- `package.json`: Build/dev scripts and dependencies

## Local run
1. `npm install`
2. `npm run dev`
3. Open the local URL shown by Eleventy

## Deploy to Cloudflare Pages
1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Cloudflare Dashboard, go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select your repository and branch.
4. Use these build settings:
   - Framework preset: `Eleventy`
   - Build command: `npm run build`
   - Build output directory: `_site`
5. Deploy.

For updates, commit and push changes to your connected branch and Cloudflare Pages will redeploy automatically.
