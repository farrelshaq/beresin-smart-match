import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft, 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Phone
} from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const Booking = () => {
  const { serviceId } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
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

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to={`/service/${serviceId}`}>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold">Booking Service</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          
          {/* Customer Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              <User className="inline h-5 w-5 mr-2" />
              Informasi Pelanggan
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nama Lengkap *</Label>
                <Input id="name" placeholder="Masukkan nama lengkap" />
              </div>
              <div>
                <Label htmlFor="phone">Nomor Telepon *</Label>
                <Input id="phone" placeholder="08xxxxxxxxxx" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Alamat Lengkap *</Label>
                <Textarea id="address" placeholder="Masukkan alamat lengkap dengan detail" />
              </div>
            </div>
          </div>

          {/* Service Schedule */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              <CalendarIcon className="inline h-5 w-5 mr-2" />
              Jadwal Layanan
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label>Pilih Tanggal *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP", { locale: id }) : "Pilih tanggal"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label>Pilih Waktu *</Label>
                <Select onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jam layanan" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time} WIB
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Gender Preference */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Apakah kamu memiliki preferensi gender dari Mitra Beresin? *
            </h3>
            <RadioGroup value={selectedGender} onValueChange={setSelectedGender}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pria" id="pria" />
                <Label htmlFor="pria">Pria</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="wanita" id="wanita" />
                <Label htmlFor="wanita">Wanita</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Additional Notes */}
          <div className="mb-8">
            <Label htmlFor="notes">Catatan Tambahan</Label>
            <Textarea 
              id="notes" 
              placeholder="Jelaskan detail masalah atau instruksi khusus untuk teknisi"
              className="mt-2"
            />
          </div>

          {/* Price Summary */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3">Ringkasan Pesanan</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Biaya Layanan</span>
                <span>Rp 150.000</span>
              </div>
              <div className="flex justify-between">
                <span>Biaya Admin</span>
                <span>Rp 5.000</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>Rp 155.000</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link to={`/payment/${serviceId}`} className="flex-1">
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg">
                Lanjut ke Pembayaran
              </Button>
            </Link>
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

export default Booking;