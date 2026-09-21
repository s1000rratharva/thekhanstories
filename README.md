# THEKHANSTORIES

Premium portfolio website for THEKHANSTORIES — a Mumbai-based photographer and filmmaker.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Create a production build          |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Project structure

The application lives in the `my-app/` directory:

```
my-app/
  app/            App router pages, layout, global styles
  components/     Sections and UI components
  lib/            Site data (site config, projects, services, motion)
  public/         Static assets (images, videos)
```

## Configuration

- Site contact details and navigation live in `my-app/lib/site.ts`.
- Project data lives in `my-app/lib/projects.ts`.
- Design tokens (palette, fonts, type scale) live in `my-app/app/globals.css`.
- Placeholder visuals are used until real media is added; see `my-app/public/images/README.md`.

## Deployment

The site is fully static. Intended for Vercel (zero-config) with the root directory set to `my-app`, or a static host with `output: "export"`.