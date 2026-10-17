import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  pathname: string;
  logoSrc: string;
}

const Header = ({ pathname, logoSrc }: HeaderProps) => {
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const useSolidHeader = !isHome || isScrolled;
  
  const isActive = (path: string) => pathname === path;
  const navLinks = [
    { to: "/", label: "Ana Sayfa" },
    { to: "/hakkimda", label: "Hakkımda" },
    { to: "/psikodinamik-psikoterapi-egitimi", label: "Eğitim Programı" },
    { to: "/iletisim", label: "İletişim" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        useSolidHeader
          ? "bg-white/88 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16">
          <a href="/" className="flex items-center md:w-48">
            <img
              src={logoSrc}
              alt="İntegratif Enstitü logosu"
              className={`h-9 w-auto object-contain transition-all ${useSolidHeader ? "" : "invert brightness-0"}`}
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.to}
                href={item.to}
                aria-current={isActive(item.to) ? "page" : undefined}
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
              </a>
            ))}
          </nav>

          <div className="hidden md:block md:w-48" aria-hidden="true"></div>

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
          <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.to}
                href={item.to}
                aria-current={isActive(item.to) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.to)
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
