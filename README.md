# Portfolio - Ismail Emir Lambacioglu

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, and [Magic UI](https://magicui.design/).

## Features

- All content lives in a [single config file](./src/data/resume.tsx): name, about, skills, work, education, projects, and socials
- MDX blog: drop a `.mdx` file into [content/](./content/) and it shows up at `/blog`
- Light/dark theme, animated dock navbar, responsive across devices
- Optimized for deployment on Vercel

## Getting started

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Edit [src/data/resume.tsx](./src/data/resume.tsx) to change the content. Images referenced there (project screenshots, company logos) live in [public/](./public/).

## Adding a blog post

Create `content/my-post.mdx` with frontmatter:

```mdx
---
title: "Post title"
publishedAt: "2026-01-01"
summary: "One-line summary shown in the blog list."
---

Your content here.
```

It will be available at `/blog/my-post`.

## Scripts

| Command      | Description                       |
| ------------ | --------------------------------- |
| `pnpm dev`   | Start the dev server              |
| `pnpm build` | Production build                  |
| `pnpm start` | Serve the production build        |
| `pnpm lint`  | Run ESLint                        |

## Credits

Based on the [Magic UI portfolio template](https://github.com/dillionverma/portfolio) by Dillion Verma, licensed under MIT.
