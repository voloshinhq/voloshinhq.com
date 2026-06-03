# Yaroslav Voloshin's Personal Website

Source code for the personal website at https://voloshinhq.com.

## Stack

- Astro static site
- Markdown blog posts
- English default routes and Russian routes under \`/ru\`
- Light and dark themes with localStorage persistence and system-theme fallback

## Project Structure

\`\`\`text
├── src/
│   ├── components/          # Shared Astro components
│   ├── content/blog/        # Markdown posts by language
│   ├── data/                # Site copy and helpers
│   ├── layouts/             # Base layout
│   ├── pages/               # Static routes
│   └── styles/              # Global CSS
├── public/                  # Static assets and client scripts
├── dist/                    # Production build output
├── astro.config.mjs
├── package.json
└── README.md
\`\`\`

## Commands

| Command | Action |
| :-- | :-- |
| \`npm install\` | Install dependencies |
| \`npm run dev\` | Run local development server |
| \`npm run build\` | Type-check and build static files into \`dist/\` |
| \`npm run preview\` | Preview the production build locally |

## Deployment

The site is compatible with Vercel and Cloudflare Pages.

- Build command: \`npm run build\`
- Output directory: \`dist\`

The current server deployment uses Nginx with this web root:

\`\`\`text
/var/www/voloshinhq.com/dist
\`\`\`

After changing source files on the server:

\`\`\`bash
npm run build
/usr/sbin/nginx -t
systemctl reload nginx
\`\`\`

## Content

Blog posts live in \`src/content/blog/{ru,en}/\`.

Homepage copy, project placeholders, testimonials, and CTA text live in \`src/data/site.ts\`.

The root route \`/\` is English. Russian content lives under \`/ru\`.
On first visit to \`/\`, a small inline script checks the browser languages and redirects Russian-language users to \`/ru\` unless they already picked a language manually.

## License

This repository is licensed under the [MIT License](LICENSE).
