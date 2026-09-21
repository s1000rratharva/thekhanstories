# /images — Content directory

Drop the photographer's real files in here. Paths referenced by the site are
configured in `lib/projects.ts` (and a few components). While a file is
missing the site renders a clearly-marked placeholder, so there are **no**
broken image URLs — either a real image shows, or an intentional box does.

## Suggested filenames

| File | Where it appears | Config location |
| --- | --- | --- |
| `hero-still.jpg` | Hero opening band | `components/Hero.tsx` (`image` prop) |
| `about-portrait.jpg` | About section | `components/About.tsx` (`image` prop) |
| `project-01.jpg` … `project-06.jpg` | Selected Work | `lib/projects.ts` → `projects[].image` |
| `showreel.mp4` (or Vimeo/YouTube id) | Showreel | `components/Showreel.tsx` |

## To place an image

1. Copy the file into this folder, e.g. `project-01.jpg`.
2. In `lib/projects.ts`, change the matching `image` field from
   `null` to `"/images/project-01.jpg"`.

Serving from Vercel/Netlify/CDN also works — just use the full URL.

## File notes

- `.gitkeep` exists only so the folder survives in git.
- Images are rendered with `object-cover` inside fixed aspect-ratio frames,
  so most crops will centre themselves automatically.