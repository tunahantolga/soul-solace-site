import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center shadow-button group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">İS</span>
            </div>
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Dr. İbrahim Sarı</span>
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
