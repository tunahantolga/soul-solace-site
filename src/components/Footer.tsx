import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Dr. Ayşe Kaya</h3>
            <p className="text-text-secondary">
              Profesyonel psikolojik danışmanlık hizmetleri ile size destek olmaya devam ediyorum.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-text-secondary">
                <Clock className="h-4 w-4 text-primary" />
                <span>Pazartesi - Cuma: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Hızlı Linkler</h4>
            <nav className="space-y-2">
              <Link to="/hakkimda" className="block text-text-secondary hover:text-primary transition-colors">
                Hakkımda
              </Link>
              <Link to="/hizmetler" className="block text-text-secondary hover:text-primary transition-colors">
                Hizmetler
              </Link>
              <Link to="/blog" className="block text-text-secondary hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/sss" className="block text-text-secondary hover:text-primary transition-colors">
                SSS
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">Hizmetler</h4>
            <nav className="space-y-2">
              <Link to="/hizmetler" className="block text-text-secondary hover:text-primary transition-colors">
                Bireysel Terapi
              </Link>
              <Link to="/hizmetler" className="block text-text-secondary hover:text-primary transition-colors">
                Çift & Aile Terapisi
              </Link>
              <Link to="/hizmetler" className="block text-text-secondary hover:text-primary transition-colors">
                Çocuk & Ergen Terapisi
              </Link>
              <Link to="/hizmetler" className="block text-text-secondary hover:text-primary transition-colors">
                Online Terapi
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-text-secondary">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>0532 XXX XX XX</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@draysekaya.com</span>
              </div>
              <div className="flex items-start gap-2 text-text-secondary">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Nişantaşı, İstanbul<br />Detaylı adres bilgisi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-text-secondary">
            © 2024 Dr. Ayşe Kaya. Tüm hakları saklıdır. | 
            <span className="text-primary"> Gizlilik Politikası</span> | 
            <span className="text-primary"> Çerez Politikası</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;