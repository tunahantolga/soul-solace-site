import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Brain } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-slate-900 text-lg group-hover:text-slate-700 transition-colors duration-300">
                Dr. İbrahim Sarı, MD, MSc
              </div>
              <div className="text-xs text-slate-600 group-hover:text-slate-500 transition-colors duration-300">
                Psikoterapi Uzmanı
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-slate-900 bg-slate-100' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/hakkimda" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/hakkimda') 
                  ? 'text-slate-900 bg-slate-100' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Hakkımda
            </Link>
            <Link 
              to="/sss" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/sss') 
                  ? 'text-slate-900 bg-slate-100' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              SSS
            </Link>
            <Link 
              to="/iletisim" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/iletisim') 
                  ? 'text-slate-900 bg-slate-100' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              İletişim
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
              <Phone className="mr-2 h-4 w-4" />
              Randevu Al
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-slate-900" />
              ) : (
                <Menu className="h-5 w-5 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200/50">
            <nav className="flex flex-col space-y-1">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-slate-900 bg-slate-100' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                to="/hakkimda" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/hakkimda') 
                    ? 'text-slate-900 bg-slate-100' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımda
              </Link>
              <Link 
                to="/sss" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/sss') 
                    ? 'text-slate-900 bg-slate-100' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                SSS
              </Link>
              <Link 
                to="/iletisim" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/iletisim') 
                    ? 'text-slate-900 bg-slate-100' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="pt-4 border-t border-slate-200/50">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                  <Phone className="mr-2 h-4 w-4" />
                  Randevu Al
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;