import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, CreditCard, QrCode, Star, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Pilih Layanan & Estimasi",
      description: "Gunakan AI Estimator untuk mendapat perkiraan harga transparan sebelum booking",
      details: ["Pilih jenis perbaikan", "Tentukan lokasi", "Dapatkan estimasi real-time"],
      color: "primary"
    },
    {
      number: "02", 
      icon: Calendar,
      title: "Matching Otomatis",
      description: "Sistem kami secara otomatis mencari tukang terdekat yang tersedia",
      details: ["Verifikasi KTP otomatis", "Cek rating & sertifikasi", "Konfirmasi ketersediaan"],
      color: "cta"
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Pembayaran Aman",
      description: "Bayar melalui escrow system - uang ditahan sampai pekerjaan selesai",
      details: ["Pembayaran ditahan platform", "Tidak langsung ke tukang", "Aman dari penipuan"],
      color: "trust"
    },
    {
      number: "04",
      icon: QrCode,
      title: "QR Check-Out",
      description: "Setelah pekerjaan selesai, scan QR code untuk verifikasi dan pencairan dana",
      details: ["Verifikasi fisik di lokasi", "Konfirmasi pekerjaan selesai", "Dana otomatis cair"],
      color: "success"
    },
    {
      number: "05",
      icon: Star,
      title: "Review & Garansi",
      description: "Berikan review jujur dan dapatkan garansi 7 hari untuk revisi gratis",
      details: ["Review terverifikasi", "Garansi tertulis", "Support 24/7"],
      color: "primary"
    }
  ];

  return (
    <section id="cara-kerja" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <CheckCircle className="h-4 w-4 mr-2" />
            Proses Mudah & Aman
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Bagaimana <span className="text-primary">Cara Kerjanya?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proses booking yang simple dalam 5 langkah mudah. 
            Setiap langkah dirancang untuk memastikan keamanan dan kenyamanan Anda.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Step Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
                    ${step.color === 'primary' ? 'bg-primary text-primary-foreground' : ''}
                    ${step.color === 'cta' ? 'bg-cta text-cta-foreground' : ''}
                    ${step.color === 'trust' ? 'bg-trust text-trust-foreground' : ''}
                    ${step.color === 'success' ? 'bg-success text-success-foreground' : ''}
                  `}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Visual */}
              <div className="flex-1 flex justify-center">
                <Card className={`
                  p-8 border-0 shadow-large w-full max-w-sm text-center
                  ${step.color === 'primary' ? 'bg-primary/5 border-primary/20' : ''}
                  ${step.color === 'cta' ? 'bg-cta/5 border-cta/20' : ''}
                  ${step.color === 'trust' ? 'bg-trust/5 border-trust/20' : ''}
                  ${step.color === 'success' ? 'bg-success/5 border-success/20' : ''}
                `}>
                  <div className={`
                    w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4
                    ${step.color === 'primary' ? 'bg-primary/10' : ''}
                    ${step.color === 'cta' ? 'bg-cta/10' : ''}
                    ${step.color === 'trust' ? 'bg-trust/10' : ''}
                    ${step.color === 'success' ? 'bg-success/10' : ''}
                  `}>
                    <step.icon className={`
                      h-10 w-10
                      ${step.color === 'primary' ? 'text-primary' : ''}
                      ${step.color === 'cta' ? 'text-cta' : ''}
                      ${step.color === 'trust' ? 'text-trust' : ''}
                      ${step.color === 'success' ? 'text-success' : ''}
                    `} />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Langkah {step.number}</h4>
                  <p className="text-sm text-muted-foreground">{step.title}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-cta rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Siap Mencoba Sistem Terpercaya Kami?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Bergabung dengan 50,000+ pengguna yang sudah merasakan layanan aman dan berkualitas
            </p>
            <Button size="lg" variant="secondary" className="font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Mulai Sekarang - Gratis!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;