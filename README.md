# Jayaraj Aalas — Portfolio

Front-end-only personal portfolio built with Next.js (App Router, TypeScript, plain CSS).
Uses a numbered-section layout, with all content sourced from Jayaraj's resume.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

Almost all site text lives in **`data/content.ts`**:

- `site` — name, initials, tagline, email
- `about` — bio paragraphs
- `projects` — the 3 project placeholders (Deepfake Detection, Hospital Management
  System, E-Commerce Website). Each has empty `tech` and `link` fields marked
  `// TODO` — fill these in once you upload the real project details (screenshots,
  live links, GitHub repos, tech stack).
- `beyondTheCode` — certifications / workshops
- `socials` — LinkedIn, email, phone

Sections themselves live in `components/` (`Nav`, `Hero`, `About`, `Projects`,
`ProjectCard`, `BeyondTheCode`, `Footer`) if you want to change layout or styling —
each has a matching `*.module.css` file.

## Build

```bash
npm run build
```

## Deploying later

This project is a static Next.js front end with no backend — it can be deployed to
Vercel (recommended, zero-config) or any static/Node host once you're ready.
