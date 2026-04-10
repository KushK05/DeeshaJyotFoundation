# NGO Website (Next.js 14)

Production-ready 7-page NGO website built with Next.js App Router, TypeScript (strict), and Tailwind CSS.
The UI implementation follows the repository design references in:
- `home.html`
- `ourStory.html`
- `shop.html`
- `donate.html`
- `volunteer.html`
- `news.html`
- `gallary.html`

## Stack
- Next.js 14 (App Router)
- TypeScript (`strict: true`)
- Tailwind CSS
- Razorpay (shop checkout + donations)
- Formspree (volunteer + newsletter submissions)

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
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_WEBHOOK_SECRET`
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- `NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID`
- `NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID`
- `NEXT_PUBLIC_NGO_NAME`
- `NEXT_PUBLIC_NGO_TAGLINE`
- `NEXT_PUBLIC_NGO_EMAIL`
- `NEXT_PUBLIC_NGO_PHONE`
- `NEXT_PUBLIC_NGO_ADDRESS`
- `NEXT_PUBLIC_NGO_REG_NUMBER`
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
### Products
Edit: `lib/products.ts`
- Update `products` array:
  - `id`, `slug`, `name`, `description`, `longDescription`, `price`, `category`, `artisanStory`, `images[]`

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
- Name, tagline, contact, registration number, social links, counters, donation presets, donor quotes.

## Asset Placement
Place media under:
- `public/assets/images/`
  - `team/`, `products/`, `gallery/`, `news/`, `about/`
- `public/assets/videos/`
- `public/assets/media-kit.pdf`

All UI references already point to `/public/assets/...` paths so real client assets can be dropped in without code changes.

## Razorpay Flow
- Client checkout helpers: `lib/razorpay.ts`
- Order API route: `app/api/razorpay/order/route.ts`
- Webhook signature verification: `app/api/razorpay/webhook/route.ts`

## Formspree Flow
- Helper: `lib/formspree.ts`
- Volunteer form uses `NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID`
- Newsletter form uses `NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID`

## Notes
- App exports page-level metadata for all routes.
- Navbar is sticky with scroll-state styling and mobile drawer.
- Cart is context-managed (`components/providers/cart-context.tsx`).
