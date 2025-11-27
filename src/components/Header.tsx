import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-is.jpg";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="Dr. İbrahim Sarı Logo" 
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                Dr. İbrahim Sarı
              </span>
              <span className="text-xs text-muted-foreground">MD, MSc</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/hakkimda" 
              className={`text-sm font-medium transition-colors ${
                isActive('/hakkimda') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Hakkımda
            </Link>
            <Link 
              to="/sss" 
              className={`text-sm font-medium transition-colors ${
                isActive('/sss') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              SSS
            </Link>
            <Link 
              to="/iletisim" 
              className={`text-sm font-medium transition-colors ${
                isActive('/iletisim') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              İletişim
            </Link>
          </nav>

          {/* CTA Button */}
          <Button 
            size="sm" 
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-accent-blue text-white hover:shadow-button h-10 px-6 text-sm font-medium scale-on-hover"
          >
            Randevu Al
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
