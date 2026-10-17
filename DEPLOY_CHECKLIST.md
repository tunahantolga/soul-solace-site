# Deploy Checklist

## 1) Pre-deploy
- `npm ci`
- `npm run lint` (0 errors)
- `npm run typecheck`
- `npm run build`
- `npm run preview` and test key pages (and a non-existent URL for the 404 page):
  - `/`
  - `/hakkimda`
  - `/iletisim`
  - `/bireysel-terapi`
  - `/cift-terapisi`
  - `/aile-terapisi`

## 2) Responsive QA
- Test widths: `320`, `375`, `390`, `768`, `1024`, `1280`
- Verify:
  - Header mobile menu opens/closes correctly
  - No horizontal scroll on any page
  - Hero badge/title do not overflow
  - Footer email/address wrap correctly

## 3) SEO QA
- Page has valid:
  - `title`
  - `meta description`
  - OpenGraph and Twitter tags
  - `lang="tr"`
- Verify favicon appears in browser tab
- Each page has its own title/description and a canonical URL
- Share a link in WhatsApp and check the `og-image.jpg` preview
- Validate JSON-LD with https://search.google.com/test/rich-results

## 4) Performance QA
- Confirm images are served as WebP from `/_astro/` with `srcset`
- Confirm only the header and galleries load JavaScript (`/_astro/*.js`)
- Run Lighthouse (mobile + desktop) and target:
  - Performance >= 85
  - Accessibility >= 90
  - Best Practices >= 90
  - SEO >= 90

## 5) Post-deploy smoke test
- Open deployed domain in Chrome + Safari (desktop)
- Open deployed domain on iOS Safari + Android Chrome
- Verify:
  - WhatsApp links open correctly
  - Udemy/YouTube links open in new tab
  - Contact info is readable and tappable
