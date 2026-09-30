# KiaRelay Website

Public marketing site for KiaRelay, a delivery logistics platform serving Texas and Louisiana. Built with Next.js (App Router), TypeScript, Tailwind CSS, and `next-themes`.

The site is **informational only**. It has no backend or forms of its own:

- **Customers and drivers** sign up and sign in inside the KiaRelay mobile apps.
- **The web app** at `kiarelay-webapp.vercel.app` has one role-based sign-in page, linked from the header's **Log In** button. It sends KiaRelay Business users and KiaRelay admins to their own dashboards, and new companies register from it. Set `NEXT_PUBLIC_WEB_APP_URL` if the web app lives elsewhere.
- **Every call to action** is a page link, an email link, or a phone link.
- The business product's name lives in one constant, `BUSINESS_BRAND` in `lib/site-config.ts`.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

| What | Where |
|---|---|
| Page copy: industries, delivery types, FAQs, features | `lib/content.ts` |
| Contacts, phone, navigation, service area, launch flags | `lib/site-config.ts` |
| SEO metadata and JSON-LD structured data | `lib/seo.ts` |
| Pages | `app/**/page.tsx` |
| Shared UI | `components/` |

Facts on the site, such as payout options, billing terms, driver requirements and specialized services, mirror the KiaRelay admin web app and the PRD. Update them here whenever the platform changes.

## Launch checklist

These are set in `lib/site-config.ts` or through environment variables:

- [ ] `NEXT_PUBLIC_SITE_URL`: the production domain.
- [ ] Store links for both apps. Until these are set, the badges link to a `#` placeholder:
  - `NEXT_PUBLIC_CUSTOMER_APP_STORE_URL` and `NEXT_PUBLIC_CUSTOMER_PLAY_STORE_URL`: the **KiaRelay** customer app. One app covers individuals and companies. `/download` still gives each its own labelled path (KiaRelay Business / KiaRelay for Individuals) and tells them which account to choose at sign-up.
  - `NEXT_PUBLIC_DRIVER_APP_STORE_URL` and `NEXT_PUBLIC_DRIVER_PLAY_STORE_URL`: the **KiaRelay Driver** app.
  - Confirm the app names in `APPS` in `lib/site-config.ts`.
- [ ] `COMPANY_ADDRESS`: the registered address. Nothing shows an address until this is set.
- [ ] `PHONE`: currently one interim number used for every team. Replace it with per-team numbers if they exist.
- [ ] Confirm the mailboxes in `contactChannels` exist.
- [ ] Have counsel review `/privacy` and `/terms`. The Terms assume a 7-day claims window and Texas governing law.
- [ ] Add insurance and DOT/MC trust badges once real coverage details and registration numbers are supplied.
