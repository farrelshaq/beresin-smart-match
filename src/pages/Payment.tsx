import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  CreditCard,
  Wallet,
  QrCode,
  Shield
} from "lucide-react";

const Payment = () => {
  const { serviceId } = useParams();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const paymentMethods = [
    {
      id: "qris",
      name: "QRIS",
      description: "Scan QR untuk bayar dengan aplikasi apapun",
      icon: QrCode,
      logo: "🏛️"
    },
    {
      id: "ovo",
      name: "OVO",
      description: "Bayar dengan saldo OVO",
      icon: Wallet,
      logo: "🟣"
    },
    {
      id: "gopay",
      name: "GoPay",
      description: "Bayar dengan saldo GoPay",
      icon: Wallet,
      logo: "🟢"
    },
    {
      id: "dana",
      name: "DANA",
      description: "Bayar dengan saldo DANA",
      icon: Wallet,
      logo: "🔵"
    },
    {
      id: "shopeepay",
      name: "ShopeePay",
      description: "Bayar dengan saldo ShopeePay",
      icon: Wallet,
      logo: "🟠"
    },
    {
      id: "bca",
      name: "BCA Virtual Account",
      description: "Transfer via Virtual Account BCA",
      icon: CreditCard,
      logo: "🏦"
    },
    {
      id: "mandiri",
      name: "Mandiri Virtual Account",
      description: "Transfer via Virtual Account Mandiri",
      icon: CreditCard,
      logo: "🏦"
    },
    {
      id: "bni",
      name: "BNI Virtual Account",
      description: "Transfer via Virtual Account BNI",
      icon: CreditCard,
      logo: "🏦"
    },
    {
      id: "bri",
      name: "BRI Virtual Account", 
      description: "Transfer via Virtual Account BRI",
      icon: CreditCard,
      logo: "🏦"
    },
    {
      id: "debit",
      name: "Kartu Debit",
      description: "Bayar dengan kartu debit",
      icon: CreditCard,
      logo: "💳"
    },
    {
      id: "credit",
      name: "Kartu Kredit",
      description: "Bayar dengan kartu kredit Visa/Mastercard",
      icon: CreditCard,
      logo: "💳"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to={`/booking/${serviceId}`}>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold">Metode Pembayaran</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          
          {/* Order Summary */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3">Ringkasan Pesanan</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Service AC - Cuci AC</span>
                <span>Rp 150.000</span>
              </div>
              <div className="flex justify-between">
                <span>Biaya Admin</span>
                <span>Rp 5.000</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Diskon Member</span>
                <span>-Rp 10.000</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Pembayaran</span>
                <span className="text-pink-600">Rp 145.000</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Pilih Metode Pembayaran
            </h3>
            
            <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value={method.id} id={method.id} />
                    <Label htmlFor={method.id} className="flex items-center gap-3 cursor-pointer flex-1">
                      <span className="text-2xl">{method.logo}</span>
                      <div className="flex-1">
                        <div className="font-medium">{method.name}</div>
                        <div className="text-sm text-gray-600">{method.description}</div>
                      </div>
                      <method.icon className="h-5 w-5 text-gray-400" />
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Security Notice */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-800">Pembayaran Aman</span>
            </div>
            <p className="text-sm text-blue-700">
              Pembayaran Anda akan disimpan dalam sistem escrow. Uang akan dicairkan ke teknisi 
              setelah pekerjaan selesai dan Anda melakukan konfirmasi melalui QR scan.
            </p>
          </div>

          {/* Action Button */}
          <div className="mb-6">
            <Button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg"
              disabled={!selectedPayment}
            >
              {selectedPayment ? `Bayar dengan ${paymentMethods.find(m => m.id === selectedPayment)?.name}` : 'Pilih Metode Pembayaran'}
            </Button>
          </div>

          {/* Terms */}
          <div className="text-center text-sm text-gray-600 mb-6">
            <p>
              Dengan melanjutkan, Anda menyetujui{" "}
              <a href="#" className="text-pink-600 underline">Syarat & Ketentuan</a>{" "}
              dan{" "}
              <a href="#" className="text-pink-600 underline">Kebijakan Privasi</a>
            </p>
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

export default Payment;