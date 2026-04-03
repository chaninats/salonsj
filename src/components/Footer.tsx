import { MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/60 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
            <MapPin size={18} className="text-primary" /> ที่ตั้งร้าน
          </h3>
          <p className="text-sm text-muted-foreground">
            123/45 ถนนสุขุมวิท ซอย 55<br />กรุงเทพมหานคร 10110
          </p>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
            <Clock size={18} className="text-primary" /> เวลาเปิด-ปิด
          </h3>
          <p className="text-sm text-muted-foreground">
            จันทร์ - เสาร์: 10:00 - 20:00<br />อาทิตย์: 10:00 - 18:00
          </p>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
            <Instagram size={18} className="text-primary" /> ติดตามเรา
          </h3>
          <p className="text-sm text-muted-foreground">
            @bloomsalon.bkk
          </p>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © 2026 Bloom Salon ✨ All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
