# İntegratif Enstitü — İbrahim Sarı, MD, PhD

Psikoterapist İbrahim Sarı ve İntegratif Enstitü Psikolojik Danışmanlık Merkezi web sitesi:
<https://integratifenstitu.com>

## Teknoloji

- [Astro](https://astro.build) — her sayfa build sırasında statik HTML olarak üretilir
- React — yalnızca fotoğraf galerileri istemcide çalışır ("island"); menü ~1 KB'lık bir script ile çalışır
- Tailwind CSS; tasarım token'ları `src/index.css` içinde (renkler, gölgeler, `.btn-primary`, `.eyebrow` vb.)
- Fontlar: Fraunces (başlıklar) ve Inter (metin), `@fontsource-variable` ile sunucudan servis edilir
- Kaydırma animasyonları ve sayfa geçişleri JavaScript'siz, CSS ile (`.reveal`, View Transitions)
- `astro:assets` ile otomatik WebP / çoklu boyut görsel optimizasyonu
- `@astrojs/sitemap` ile otomatik site haritası

## Geliştirme

Node.js 22.22 veya üzeri gerekir.

```sh
npm ci
npm run dev        # http://localhost:8080
npm run lint       # ESLint
npm run typecheck  # astro check (TypeScript + .astro dosyaları)
npm run build      # dist/ klasörüne statik site
npm run preview    # build çıktısını yerelde sun
```

## Proje yapısı

```
src/
  pages/        Astro sayfaları (URL = dosya adı); başlık, açıklama ve yapısal veri burada
  layouts/      Ortak sayfa iskeleti: <head> SEO etiketleri, JSON-LD, header, footer
  components/   Header, Footer, PageHero, CTA, Gallery (istemci adacığı); home/ ana sayfa bölümleri
  config/       Site geneli bilgiler (iletişim, sosyal medya, ünvan, menü)
  data/         İçerik verileri (terapi sayfaları, eğitim müfredatı, yorumlar)
  lib/          Yardımcılar (görsel optimizasyonu, tipler)
  assets/       Optimize edilecek görseller
public/         Olduğu gibi kopyalanan dosyalar (favicon, PDF, og-image, robots.txt)
```

Terapi sayfaları `src/data/therapies.ts` içindeki verilerden tek bir şablonla (`src/pages/[therapy].astro`)
üretilir; yeni bir terapi eklemek için diziye bir kayıt eklemek yeterlidir.

Yeni sayfa eklemek için `src/pages/` altına bir `.astro` dosyası oluşturun ve `BaseLayout`'a
`title` ve `description` verin; site haritası otomatik güncellenir.

## Yayına alma

`main` dalına her push'ta GitHub Actions lint, typecheck ve build çalıştırır ve siteyi GitHub
Pages'e yayınlar. Pull request'lerde aynı kontroller çalışır, yayın yapılmaz.

Alternatif olarak Docker ile: `docker build -t integratif-site . && docker run -p 4173:4173 integratif-site`.
