import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, MapPin, Clock, CheckCircle, Shield, Star } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<string | null>(null);

  const services = [
    { id: "ac", name: "Service AC", basePrice: 150000, estimatedTime: "1-2 jam", difficulty: "sedang" },
    { id: "listrik", name: "Perbaikan Listrik", basePrice: 200000, estimatedTime: "30 menit - 3 jam", difficulty: "tinggi" },
    { id: "ledeng", name: "Ledeng & Pipa", basePrice: 180000, estimatedTime: "1-4 jam", difficulty: "sedang" },
    { id: "mesin-cuci", name: "Service Mesin Cuci", basePrice: 120000, estimatedTime: "45 menit - 2 jam", difficulty: "mudah" },
    { id: "kulkas", name: "Service Kulkas", basePrice: 170000, estimatedTime: "1-3 jam", difficulty: "sedang" },
  ];

  const locations = [
    { id: "jakarta", name: "Jakarta", multiplier: 1.3 },
    { id: "bandung", name: "Bandung", multiplier: 1.1 },
    { id: "surabaya", name: "Surabaya", multiplier: 1.2 },
    { id: "yogyakarta", name: "Yogyakarta", multiplier: 1.0 },
    { id: "medan", name: "Medan", multiplier: 1.1 },
  ];

  const calculateEstimate = () => {
    if (selectedService && selectedLocation) {
      const service = services.find(s => s.id === selectedService);
      const location = locations.find(l => l.id === selectedLocation);
      
      if (service && location) {
        const basePrice = service.basePrice * location.multiplier;
        const minPrice = Math.floor(basePrice * 0.8);
        const maxPrice = Math.floor(basePrice * 1.2);
        setEstimatedPrice(`Rp ${minPrice.toLocaleString()} - Rp ${maxPrice.toLocaleString()}`);
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-cta/5 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4" />
                100% Tukang Terverifikasi
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Tukang <span className="text-primary">Terpercaya</span> untuk
                <span className="text-cta block">Rumah Anda</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Platform jasa perbaikan dengan sistem keamanan berlapis, escrow payment, 
                dan garansi tertulis. Tidak ada lagi takut ditipu!
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Verifikasi KTP</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-success" />
                <span>Escrow Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-5 w-5 text-trust" />
                <span>Review Terverifikasi</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="cta" className="text-lg px-8">
                <MapPin className="h-5 w-5" />
                Cari Tukang Terdekat
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Shield className="h-5 w-5" />
                Cara Kerja Kami
              </Button>
            </div>
          </div>

          {/* Right Content - AI Estimator */}
          <div className="lg:pl-8">
            <Card className="p-6 shadow-large border-0 bg-background">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI Estimator</h3>
                    <p className="text-sm text-muted-foreground">Estimasi harga transparan sebelum booking</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Pilih Layanan</label>
                    <Select onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis perbaikan..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Lokasi</label>
                    <Select onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kota Anda..." />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calculateEstimate}
                    disabled={!selectedService || !selectedLocation}
                    className="w-full"
                    variant="default"
                  >
                    <Calculator className="h-4 w-4" />
                    Hitung Estimasi
                  </Button>

                  {estimatedPrice && (
                    <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium text-success">Estimasi Detail</span>
                      </div>
                      <p className="text-2xl font-bold text-success">{estimatedPrice}</p>
                      <div className="mt-3 space-y-1 text-sm">
                        <p className="text-muted-foreground">
                          ⏱️ <strong>Waktu pengerjaan:</strong> {services.find(s => s.id === selectedService)?.estimatedTime}
                        </p>
                        <p className="text-muted-foreground">
                          🔧 <strong>Tingkat kesulitan:</strong> {services.find(s => s.id === selectedService)?.difficulty}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        *Harga sudah termasuk biaya jasa & material dasar
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;