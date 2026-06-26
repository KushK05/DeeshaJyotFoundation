# NGO Website (Next.js 14)

Production-ready 6-page NGO website built with Next.js App Router, TypeScript (strict), and Tailwind CSS.
The UI implementation follows the repository design references in:
- `home.html`
- `ourStory.html`
- `donate.html`
- `volunteer.html`
- `news.html`
- `gallary.html`

## Stack
- Next.js 14 (App Router)
- TypeScript (`strict: true`)
- Tailwind CSS
- Formspree (volunteer submissions)

## Requirements
- Node.js 18+
- npm

## Setup
1. Install dependencies:
```bash
npm install
```
2. Create local env file:
```bash
cp .env.local.example .env.local
```
3. Fill all required variables in `.env.local`.
4. Run development server:
```bash
npm run dev
```
5. Open `http://localhost:3000`.

## Environment Variables
See `.env.local.example`.

Required keys:
- `NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID`
- `NEXT_PUBLIC_NGO_NAME`
- `NEXT_PUBLIC_NGO_TAGLINE`
- `NEXT_PUBLIC_NGO_PHONE`
- `NEXT_PUBLIC_NGO_ADDRESS`
- `NEXT_PUBLIC_SITE_URL`

## Scripts
```bash
npm run dev        # local development
npm run typecheck  # TypeScript checks
npm run lint       # ESLint checks
npm run build      # production build
npm run start      # run production server
```

## Content Update Guide
### News / Press
Edit: `lib/news.ts`
- Update clippings data:
  - `id`, `headline`, `publication`, `date`, `year`, `excerpt`, `externalUrl`, `imageUrl`

### Gallery (Photos + Videos)
Edit: `lib/gallery.ts`
- Photos: `photos[]`
- Videos: `videos[]` (supports local MP4 and YouTube link fields used by UI)

### Events
Edit: `lib/events.ts`
- Update event cards used in Gallery Events tab.

### NGO Profile + Site-wide constants
Edit: `lib/constants.ts`
- Name, tagline, contact, social links, counters, and donation presets.

## Asset Placement
Place media under:
- `public/assets/images/`
  - `team/`, `gallery/`, `news/`, `about/`
- `public/assets/videos/`
- `public/assets/media-kit.pdf`

All UI references already point to `/public/assets/...` paths so real client assets can be dropped in without code changes.

## Formspree Flow
- Helper: `lib/formspree.ts`
- Volunteer form uses `NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID`

## Notes
- App exports page-level metadata for all routes.
- Navbar is sticky with scroll-state styling and mobile drawer.
