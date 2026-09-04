# antonbalog.com

Personal portfolio site. React 18 + React Router 7, built with [Vite](https://vite.dev/),
SCSS modules, deployed on [Netlify](https://www.netlify.com/).

## Requirements

- Node 20 (see `.nvmrc`)

## Scripts

```sh
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build locally at http://localhost:4173
npm run test     # run the Vitest smoke tests
npm run lint     # run ESLint
npm run format   # run Prettier
```

## Deployment

Pushing to `master` triggers a Netlify build (`npm run build`, publish `dist/`).
Config lives in `netlify.toml`, including the SPA fallback redirect so client-side
routes resolve on direct load / refresh.

## Project layout

```
index.html            Vite entry HTML
src/main.jsx           app bootstrap (createRoot)
src/App.jsx            router + layout
src/pages/             Home, Work, Contact, Blog, NotFound
src/components/        Header, Hamburger, SideDrawer, Footer
public/                static assets copied as-is (favicon/icons, fonts, manifest, robots.txt, sitemap.xml)
branding/               source images (not deployed - only the generated public/ assets are)
```
