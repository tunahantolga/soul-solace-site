import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const useSolidHeader = !isHome || isScrolled;
  
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [
    { to: "/", label: "Ana Sayfa" },
    { to: "/hakkimda", label: "Hakkımda" },
    { to: "/iletisim", label: "İletişim" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        useSolidHeader
          ? "bg-white/88 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex w-auto md:w-56 items-center gap-3 group">
            <div className="flex flex-col">
              <span
                className={`text-base font-bold group-hover:text-primary transition-colors leading-tight ${
                  useSolidHeader ? "text-foreground" : "text-white"
                }`}
              >
                Dr. İbrahim Sarı
              </span>
              <span className={`text-xs ${useSolidHeader ? "text-muted-foreground" : "text-white/75"}`}>
                MD, MSc
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.to)
                    ? useSolidHeader
                      ? "text-foreground"
                      : "text-white"
                    : useSolidHeader
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block md:w-56" aria-hidden="true"></div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`ml-auto inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
              useSolidHeader
                ? "border-border bg-white/80 text-foreground"
                : "border-white/30 bg-black/10 text-white"
            }`}
            aria-label="Menüyü aç/kapat"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-xl">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.to)
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
