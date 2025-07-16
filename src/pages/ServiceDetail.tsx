import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Star,
  CheckCircle,
  Zap, 
  Wind, 
  Droplets, 
  Wrench, 
  Home,
  Snowflake
} from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const serviceData: Record<string, any> = {
    ac: {
      icon: Wind,
      title: "Service AC",
      description: "Layanan service AC profesional untuk semua merk",
      services: [
        { id: "service-rutin", name: "Service Rutin", description: "Pembersihan filter dan coil dasar" },
        { id: "ac-tidak-dingin", name: "AC tidak dingin", description: "Diagnosis dan perbaikan AC yang tidak dingin" },
        { id: "bongkar-pasang", name: "Bongkar/pasang AC", description: "Pembongkaran dan pemasangan AC" },
        { id: "ac-bocor", name: "AC bocor", description: "Perbaikan kebocoran freon dan komponen" },
        { id: "ac-rusak", name: "AC rusak", description: "Perbaikan kerusakan komponen AC" },
        { id: "lainnya", name: "Lainnya", description: "Layanan AC lainnya sesuai kebutuhan" }
      ],
      additionalServices: [
        { id: "cuci", name: "Cuci", icon: "🧽", description: "Layanan cuci ac" },
        { id: "perbaikan", name: "Perbaikan", icon: "🔧", description: "Layanan perbaikan ac" },
        { id: "freon", name: "Freon", icon: "❄️", description: "Tambah Freon dari tekanan setengah penuh ke penuh Freon dari tekanan kosong - setengah penuh ke penuh" },
        { id: "instalasi", name: "Instalasi", icon: "⚡", description: "Pemasangan AC baru" }
      ],
      estimatedTime: "1-2 jam",
      estimatedPrice: "Rp 150.000 - Rp 300.000"
    },
    listrik: {
      icon: Zap,
      title: "Perbaikan Listrik", 
      description: "Layanan perbaikan dan instalasi listrik rumah tangga",
      services: [
        { id: "konslet", name: "Konslet listrik", description: "Perbaikan hubungan pendek listrik" },
        { id: "stop-kontak", name: "Ganti stop kontak", description: "Penggantian stop kontak rusak" },
        { id: "instalasi", name: "Instalasi baru", description: "Pemasangan instalasi listrik baru" },
        { id: "mcb", name: "Ganti MCB", description: "Penggantian MCB/sekering" },
        { id: "kabel", name: "Perbaikan kabel", description: "Perbaikan kabel yang rusak" }
      ],
      additionalServices: [
        { id: "instalasi", name: "Instalasi", icon: "⚡", description: "Pemasangan instalasi listrik" },
        { id: "perbaikan", name: "Perbaikan", icon: "🔧", description: "Perbaikan komponen listrik" }
      ],
      estimatedTime: "30 menit - 3 jam",
      estimatedPrice: "Rp 200.000 - Rp 500.000"
    }
  };

  const currentService = serviceData[serviceId as string];

  if (!currentService) {
    return <div>Service tidak ditemukan</div>;
  }

  const formatDateTime = (date: Date) => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                   'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${dayName}, ${day} ${month} ${year} - ${hours}:${minutes}`;
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold">{currentService.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          
          {/* Service Problems */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Keluhan / masalah {currentService.title.split(' ')[1]} <span className="text-red-500">*</span>
            </h3>
            
            <div className="space-y-3">
              {currentService.services.map((service: any) => (
                <div key={service.id} className="flex items-center space-x-3">
                  <Checkbox 
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => handleServiceToggle(service.id)}
                  />
                  <label 
                    htmlFor={service.id} 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {service.name}
                  </label>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 mt-4 italic">
              * Garansi tidak berlaku untuk layanan cuci AC & jasa pengecekan
            </p>
          </div>

          {/* Additional Services */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Layanan yang Anda Butuhkan
            </h3>
            <p className="text-sm text-gray-500 mb-4">Pilih layanan {currentService.title}</p>

            <div className="space-y-4">
              {currentService.additionalServices.map((service: any) => (
                <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-800">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-pink-600 border-pink-600 hover:bg-pink-50">
                    Tambah
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Estimation Details */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800">Detail Estimasi</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Waktu pengerjaan:</strong> {currentService.estimatedTime}</p>
              <p><strong>Estimasi biaya:</strong> {currentService.estimatedPrice}</p>
              <p className="text-blue-700 italic">
                *Waktu dan biaya dapat bervariasi tergantung tingkat kerusakan dan lokasi
              </p>
            </div>
          </div>

          {/* Price Estimation */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 border-t">
              <div>
                <p className="text-sm text-gray-600">Estimasi Harga</p>
                <p className="text-lg font-bold text-gray-800">Rp0</p>
                <p className="text-xs text-gray-500">Min. transaksi Rp75.000</p>
              </div>
              <Link to={`/booking/${serviceId}`}>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg">
                  Selanjutnya
                </Button>
              </Link>
            </div>
          </div>

          {/* Date Time Display */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-2">Waktu saat ini:</p>
            <p className="text-lg font-semibold text-gray-800">{formatDateTime(currentDateTime)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;