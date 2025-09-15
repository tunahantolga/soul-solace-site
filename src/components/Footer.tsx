import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Calendar, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Dr. İbrahim Sarı</h3>
            <p className="text-slate-600">
              Psikanaliz ve nörobilim temelli terapi yaklaşımlarıyla profesyonel destek sunuyorum.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="h-4 w-4 text-slate-600" />
                <span>Pazartesi - Cuma: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Hızlı Linkler</h4>
            <nav className="space-y-2">
              <Link to="/hakkimda" className="block text-slate-600 hover:text-slate-800 transition-colors">
                Hakkımda
              </Link>
              <Link to="/sss" className="block text-slate-600 hover:text-slate-800 transition-colors">
                SSS
              </Link>
              <Link to="/iletisim" className="block text-slate-600 hover:text-slate-800 transition-colors">
                İletişim
              </Link>
              <a href="https://calendly.com/dr-ibrahim-sari" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-600 hover:text-slate-800 transition-colors">
                Online Randevu
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Terapi Alanları</h4>
            <nav className="space-y-2">
              <span className="block text-slate-600 text-sm">Dinamik Psikoterapi</span>
              <span className="block text-slate-600 text-sm">Kişilik Bozuklukları</span>
              <span className="block text-slate-600 text-sm">Travma & Dissosiyasyon</span>
              <span className="block text-slate-600 text-sm">Duygu Odaklı Terapi</span>
              <span className="block text-slate-600 text-sm">TLDP (Zaman Sınırlı)</span>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="h-4 w-4 text-slate-600 flex-shrink-0" />
                <a href="tel:+905321234567" className="hover:text-slate-800 transition-colors">
                  0532 123 45 67
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="h-4 w-4 text-slate-600 flex-shrink-0" />
                <a href="mailto:dr.ibrahim.sari@gmail.com" className="hover:text-slate-800 transition-colors">
                  dr.ibrahim.sari@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-600">
                <MapPin className="h-4 w-4 text-slate-600 flex-shrink-0 mt-1" />
                <span>Nişantaşı, İstanbul</span>
              </div>
            </div>
            
            <Button 
              size="sm" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="https://udemy.com/user/dr-ibrahim-sari" target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                Udemy Kursları
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 text-center">
          <p className="text-slate-600">
            © 2024 Dr. İbrahim Sarı MD., MSc. Tüm hakları saklıdır. | 
            <Link to="/sss" className="text-slate-800 hover:underline"> Gizlilik Politikası</Link> | 
            <Link to="/sss" className="text-slate-800 hover:underline"> Çerez Politikası</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;