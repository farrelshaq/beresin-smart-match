import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CreditCard, QrCode, Users, Clock, Award } from "lucide-react";

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Verifikasi KTP",
      description: "Semua tukang sudah diverifikasi identitas dan lulus training keamanan",
      badge: "100% Aman"
    },
    {
      icon: CreditCard,
      title: "Escrow Payment",
      description: "Uang Anda ditahan platform, baru cair setelah pekerjaan selesai & diverifikasi",
      badge: "Pembayaran Aman"
    },
    {
      icon: QrCode,
      title: "QR Check-Out",
      description: "Sistem verifikasi fisik di lokasi untuk memastikan pekerjaan benar-benar selesai",
      badge: "Verifikasi Real"
    },
    {
      icon: Users,
      title: "Review Terverifikasi",
      description: "Review hanya muncul setelah QR check-out, tidak ada fake rating",
      badge: "Review Jujur"
    },
    {
      icon: Clock,
      title: "Garansi 7 Hari",
      description: "Garansi tertulis minimal 7 hari untuk revisi pekerjaan tanpa biaya tambahan",
      badge: "Garansi Pasti"
    },
    {
      icon: Award,
      title: "Sertifikasi Resmi",
      description: "Tukang bersertifikat melalui program training resmi dari mitra terpercaya",
      badge: "Berstandar"
    }
  ];

  return (
    <section id="keamanan" className="py-16 lg:py-24 bg-card-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Sistem Keamanan Berlapis
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kenapa <span className="text-primary">Beresin</span> Beda?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami memahami keresahan Anda tentang tukang tidak jujur. 
            Sistem keamanan berlapis kami dirancang khusus untuk memastikan kepercayaan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="p-6 border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">10,000+</div>
              <div className="text-primary-foreground/80">Tukang Terverifikasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">50,000+</div>
              <div className="text-primary-foreground/80">Pekerjaan Selesai</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">4.8★</div>
              <div className="text-primary-foreground/80">Rating Rata-rata</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">99.8%</div>
              <div className="text-primary-foreground/80">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;