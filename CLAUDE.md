# CLAUDE.md

This file provides context to Claude (and other AI assistants) about this project.

## Project Overview

**Makhana Mingle** - A premium makhana (fox nuts) food brand landing page built with Next.js 16, React 19, and TypeScript.

- Live: https://makhana-mingle.vercel.app/
- Repo: https://github.com/sonimohit481/Makhana-Mingle

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Language**: TypeScript 5.9
- **Styling**: CSS with custom design tokens (globals.css)
- **Analytics**: Vercel Analytics
- **Linting**: ESLint 9

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Main landing page
│   ├── layout.tsx          # Root layout with metadata
│   └── globals.css         # Global styles and design tokens
├── components/             # React components
├── public/                 # Static assets (SVG illustrations, images)
├── src/                    # Additional source files
├── next.config.ts          # Next.js configuration
├── package.json
├── tsconfig.json
└── .eslintrc.cjs           # ESLint configuration
```

## Key Conventions

- Components use inline styles or CSS classes from globals.css
- SVG illustrations are in `/public` directory
- Metadata configured via `generateMetadata` in layout.tsx
- Analytics via `@vercel/analytics` package

## Editor Setup

- Recommended: VS Code with ESLint extension
- Format on save enabled
- TypeScript strict mode enabled

## Environment Variables

Copy `.env.sample` to `.env.local` if needed. Currently no required env vars.

## Notes

- This is a static landing page (SSG/SSR via App Router)
- No database or API routes currently
- E-commerce ready structure for future expansion