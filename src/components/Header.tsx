import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { useState } from "react";
import beresinLogo from "@/assets/beresin-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <img src={beresinLogo} alt="Beresin Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">BERESIN</h1>
              <p className="text-primary-foreground/80 text-xs">Tukang Terpercaya</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#cara-kerja" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
              Cara Kerja
            </a>
            <a href="#layanan" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
              Layanan
            </a>
            <a href="#jadi-mitra" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
              Jadi Mitra
            </a>
            <a href="#kontak" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
              Kontak
            </a>
            <Button variant="cta" size="sm">
              <MapPin className="h-4 w-4" />
              Cari Tukang
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-3 pt-4">
              <a 
                href="#cara-kerja" 
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cara Kerja
              </a>
              <a 
                href="#layanan" 
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan
              </a>
              <a 
                href="#jadi-mitra" 
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Jadi Mitra
              </a>
              <a 
                href="#kontak" 
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </a>
              <Button variant="cta" size="sm" className="mt-2">
                <MapPin className="h-4 w-4" />
                Cari Tukang
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;