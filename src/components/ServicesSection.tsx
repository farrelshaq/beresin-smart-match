import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Wrench, 
  Droplets, 
  Wind, 
  Snowflake, 
  Home,
  Phone,
  Star,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Perbaikan Listrik",
      description: "Instalasi, perbaikan konslet, ganti stop kontak, dan masalah listrik rumah tangga",
      features: ["Konsultasi gratis", "Spare part bergaransi", "Teknisi bersertifikat"],
      startingPrice: "Mulai Rp 200.000",
      rating: 4.9,
      jobs: "2,500+ pekerjaan",
      badge: "Terpopuler"
    },
    {
      icon: Wind,
      title: "Service AC",
      description: "Cuci AC, isi freon, perbaikan kompresor, dan maintenance rutin untuk semua merk",
      features: ["Garansi 30 hari", "Freon original", "Teknisi berpengalaman"],
      startingPrice: "Mulai Rp 150.000",
      rating: 4.8,
      jobs: "3,200+ pekerjaan",
      badge: "Favorit"
    },
    {
      icon: Droplets,
      title: "Ledeng & Pipa",
      description: "Atasi kebocoran, saluran mampet, perbaikan kran, dan instalasi pipa baru",
      features: ["Respons cepat", "Peralatan lengkap", "Bersih setelah kerja"],
      startingPrice: "Mulai Rp 180.000",
      rating: 4.7,
      jobs: "1,800+ pekerjaan",
      badge: "Handal"
    },
    {
      icon: Wrench,
      title: "Service Elektronik",
      description: "Perbaikan mesin cuci, kulkas, TV, dan peralatan elektronik rumah tangga",
      features: ["Diagnostik gratis", "Spare part ori/KW", "Garansi service"],
      startingPrice: "Mulai Rp 120.000",
      rating: 4.8,
      jobs: "2,100+ pekerjaan",
      badge: "Berkualitas"
    },
    {
      icon: Home,
      title: "Renovasi Ringan",
      description: "Cat tembok, pasang keramik, gypsum, dan perbaikan interior rumah",
      features: ["Konsultasi desain", "Material berkualitas", "Hasil rapi"],
      startingPrice: "Mulai Rp 300.000",
      rating: 4.9,
      jobs: "1,500+ pekerjaan",
      badge: "Premium"
    },
    {
      icon: Snowflake,
      title: "Maintenance Rutin",
      description: "Paket perawatan berkala untuk menjaga kondisi rumah tetap optimal",
      features: ["Jadwal fleksibel", "Checklist lengkap", "Laporan detail"],
      startingPrice: "Mulai Rp 250.000",
      rating: 4.8,
      jobs: "900+ pekerjaan",
      badge: "Terbaru"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Terpopuler": return "destructive";
      case "Favorit": return "default";
      case "Premium": return "secondary";
      default: return "outline";
    }
  };

  return (
    <section id="layanan" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Wrench className="h-4 w-4 mr-2" />
            Layanan Lengkap & Terpercaya
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Semua Kebutuhan <span className="text-primary">Perbaikan Rumah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari masalah kecil hingga renovasi besar, tukang bersertifikat kami siap membantu
            dengan harga transparan dan garansi terpercaya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 border-0 shadow-medium hover:shadow-large transition-all duration-300 group hover:scale-105">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant={getBadgeVariant(service.badge)} className="text-xs">
                    {service.badge}
                  </Badge>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats & Price */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-trust fill-current" />
                      <span className="font-medium">{service.rating}</span>
                      <span className="text-muted-foreground">({service.jobs})</span>
                    </div>
                    <span className="font-bold text-primary">{service.startingPrice}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4" />
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Emergency Service */}
        <Card className="bg-destructive/5 border-destructive/20 p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Layanan Darurat 24/7
            </h3>
            <p className="text-muted-foreground mb-6">
              Untuk masalah mendesak seperti konslet listrik, kebocoran pipa besar, 
              atau kerusakan AC di cuaca panas - kami siap membantu kapan saja.
            </p>
            <Button variant="destructive" size="lg" className="font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Hubungi Sekarang: 0811-8888-1234
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;