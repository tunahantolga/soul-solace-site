import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Dr. İbrahim Sarı</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Profesyonel psikoterapi hizmetleri
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Hızlı Erişim</h3>
            <nav className="flex flex-col gap-1">
              <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Ana Sayfa
              </Link>
              <Link to="/hakkimda" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Hakkımda
              </Link>
              <Link to="/sss" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                SSS
              </Link>
              <Link to="/iletisim" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                İletişim
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-2">İletişim</h3>
            <div className="flex flex-col gap-1">
              <a 
                href="mailto:info@dribrahimsari.com" 
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-3 h-3" />
                info@dribrahimsari.com
              </a>
              <a 
                href="tel:+905555555555" 
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Phone className="w-3 h-3" />
                +90 555 555 55 55
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Dr. İbrahim Sarı
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
