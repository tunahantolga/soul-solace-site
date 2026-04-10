import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Calendar, GraduationCap, Video, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold text-foreground">İbrahim Sarı</h3>
            <p className="mt-1 text-sm text-muted-foreground">MD, MSc</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              İntegratif psikoterapi yaklaşımıyla profesyonel ve güvenilir ruh sağlığı desteği sunuyoruz.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="https://www.udemy.com/user/lale-anna-sari/?srsltid=AfmBOopBlAomDmAE8ZZ4MCbtRJKwWw9HqchsO5UtBGGv3qXBQl0lUC3V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-foreground transition-colors hover:bg-primary/10"
              >
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Udemy Süpervizyon Eğitimleri</span>
                <ExternalLink className="ml-auto h-3.5 w-3.5 text-primary" />
              </a>
              <a
                href="https://www.youtube.com/@dribrahimsari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-foreground transition-colors hover:bg-primary/10"
              >
                <Video className="h-4 w-4 text-primary" />
                <span>YouTube Kanalı</span>
                <ExternalLink className="ml-auto h-3.5 w-3.5 text-primary" />
              </a>
            </div>

            <a
              href="https://www.instagram.com/dribrahimsari/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors hover:bg-primary/15"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wide text-foreground">Hızlı Erişim</h4>
            <nav className="mt-4 flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Ana Sayfa
              </Link>
              <Link to="/hakkimda" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Hakkımda
              </Link>
              <Link to="/iletisim" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                İletişim
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-foreground">İletişim & Randevu</h4>
              <div className="mt-4 space-y-3">
                <a href="mailto:dribrahimsari@gmail.com" className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="break-words">dribrahimsari@gmail.com</span>
                </a>
                <a href="tel:+905326098044" className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>0532 609 80 44</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="break-words">İstanbul, Türkiye</span>
                </div>
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  Online Randevu
                </p>
                <div className="space-y-2">
                  <a
                    href="https://www.doktortakvimi.com/ibrahim-sari-4/psikoloji/istanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-primary transition-colors hover:text-primary-hover"
                  >
                    <span>Doktor Takvimi</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://www.doktorsitesi.com/uzm-psk-ibrahim-sari/psikoloji/istanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-primary transition-colors hover:text-primary-hover"
                  >
                    <span>Doktor Sitesi</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground md:text-left">
            © {new Date().getFullYear()} İbrahim Sarı, MD, MSc. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
