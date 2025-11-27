import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="text-base font-semibold tracking-tight text-foreground hover:text-foreground/70 transition-colors">
            Dr. İbrahim Sarı
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
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary-hover h-9 px-4 text-sm"
          >
            Randevu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
