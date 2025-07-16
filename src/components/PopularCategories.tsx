import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Wind, 
  Droplets, 
  Wrench, 
  Home,
  Snowflake,
  Clock,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  const categories = [
    {
      id: "ac",
      icon: Wind,
      title: "Service AC",
      description: "Cuci AC, isi freon, perbaikan",
      rating: 4.8,
      jobs: "3,200+ pekerjaan",
      startingPrice: "Mulai Rp 150.000",
      badge: "Favorit",
      badgeColor: "bg-blue-500 text-white"
    },
    {
      id: "listrik", 
      icon: Zap,
      title: "Perbaikan Listrik",
      description: "Instalasi, konslet, stop kontak",
      rating: 4.9,
      jobs: "2,500+ pekerjaan", 
      startingPrice: "Mulai Rp 200.000",
      badge: "Terpopuler",
      badgeColor: "bg-destructive text-white"
    },
    {
      id: "ledeng",
      icon: Droplets,
      title: "Ledeng & Pipa", 
      description: "Kebocoran, saluran mampet",
      rating: 4.7,
      jobs: "1,800+ pekerjaan",
      startingPrice: "Mulai Rp 180.000",
      badge: "Handal",
      badgeColor: "bg-green-500 text-white"
    },
    {
      id: "elektronik",
      icon: Wrench,
      title: "Service Elektronik",
      description: "Mesin cuci, kulkas, TV",
      rating: 4.8,
      jobs: "2,100+ pekerjaan", 
      startingPrice: "Mulai Rp 120.000",
      badge: "Berkualitas",
      badgeColor: "bg-purple-500 text-white"
    },
    {
      id: "renovasi",
      icon: Home,
      title: "Renovasi Ringan",
      description: "Cat tembok, keramik, gypsum",
      rating: 4.9,
      jobs: "1,500+ pekerjaan",
      startingPrice: "Mulai Rp 300.000", 
      badge: "Premium",
      badgeColor: "bg-trust text-white"
    },
    {
      id: "maintenance",
      icon: Snowflake,
      title: "Maintenance Rutin",
      description: "Perawatan berkala rumah",
      rating: 4.8,
      jobs: "900+ pekerjaan",
      startingPrice: "Mulai Rp 250.000",
      badge: "Terbaru", 
      badgeColor: "bg-cta text-white"
    }
  ];

  return (
    <section id="layanan" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kategori <span className="text-primary">Terpopuler</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih layanan yang Anda butuhkan dari kategori populer kami
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/service/${category.id}`}>
              <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 h-full">
                <div className="text-center space-y-3">
                  <div className="bg-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-tight">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Detailed Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={`${category.id}-detail`} to={`/service/${category.id}`}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={`text-xs ${category.badgeColor}`}>
                      {category.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-trust fill-current" />
                      <span className="font-medium">{category.rating}</span>
                      <span className="text-muted-foreground">({category.jobs})</span>
                    </div>
                    <span className="font-bold text-primary">{category.startingPrice}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;