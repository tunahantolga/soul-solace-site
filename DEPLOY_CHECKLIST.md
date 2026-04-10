# Deploy Checklist

## 1) Pre-deploy
- `npm ci`
- `npm run build`
- `npm run dev` and test key pages:
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

## 4) Performance QA
- Confirm optimized assets are loaded from:
  - `src/assets/hero-chair-optimized.jpg`
  - `src/assets/dr-ibrahim-main-optimized.jpg`
  - `src/assets/hakkimda-group-optimized.jpg`
  - `src/assets/youtube-card-bg.jpg`
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
