import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Download
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-foreground rounded-lg p-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Beresin</h3>
                <p className="text-primary-foreground/80 text-sm">Tukang Terpercaya</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Platform jasa perbaikan rumah dengan sistem keamanan berlapis, 
              tukang terverifikasi, dan pembayaran aman.
            </p>
            <div className="flex space-x-2">
              <Badge variant="secondary" className="text-xs">
                100% Aman
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Bergaransi
              </Badge>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-lg mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Service AC</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Perbaikan Listrik</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Ledeng & Pipa</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Service Elektronik</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Renovasi Ringan</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Maintenance Rutin</a></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold text-lg mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cara Kerja</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Jadi Mitra Tukang</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Karir</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog & Tips</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Kontak & Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0811-8888-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>help@beresin.id</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Customer Support</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Ikuti Kami</h5>
              <div className="flex space-x-3">
                <Button variant="secondary" size="sm" className="w-10 h-10 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="sm" className="w-10 h-10 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="sm" className="w-10 h-10 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="text-center">
            <h4 className="font-bold text-lg mb-4">Download Aplikasi Beresin</h4>
            <p className="text-primary-foreground/80 text-sm mb-6 max-w-md mx-auto">
              Akses lebih mudah, notifikasi real-time, dan fitur eksklusif mobile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download di App Store
              </Button>
              <Button variant="secondary" className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download di Play Store
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <div>
              <p>&copy; 2024 Beresin. Semua hak dilindungi undang-undang.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Syarat Layanan</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;