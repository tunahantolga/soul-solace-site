import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Dr. Ayşe Kaya
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-text-secondary'}`}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/hakkimda" 
              className={`hover:text-primary transition-colors ${isActive('/hakkimda') ? 'text-primary font-medium' : 'text-text-secondary'}`}
            >
              Hakkımda
            </Link>
            <Link 
              to="/hizmetler" 
              className={`hover:text-primary transition-colors ${isActive('/hizmetler') ? 'text-primary font-medium' : 'text-text-secondary'}`}
            >
              Hizmetler
            </Link>
            <Link 
              to="/blog" 
              className={`hover:text-primary transition-colors ${isActive('/blog') ? 'text-primary font-medium' : 'text-text-secondary'}`}
            >
              Blog
            </Link>
            <Link 
              to="/sss" 
              className={`hover:text-primary transition-colors ${isActive('/sss') ? 'text-primary font-medium' : 'text-text-secondary'}`}
            >
              SSS
            </Link>
            <Link 
              to="/iletisim" 
              className={`hover:text-primary transition-colors ${isActive('/iletisim') ? 'text-primary font-medium' : 'text-text-secondary'}`}
            >
              İletişim
            </Link>
          </nav>

          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button">
            <Phone className="mr-2 h-4 w-4" />
            Randevu Al
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;