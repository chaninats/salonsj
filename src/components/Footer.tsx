import { MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/60 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
            <MapPin size={18} className="text-primary" /> ที่ตั้งร้าน
          </h3>
          <p className="text-sm text-muted-foreground">
            สยามสแควร์ซอย 5 ตรงข้ามกับ 7/11<br />
            Rd, Pathum Wan, Bangkok 10330
          </p>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
            <Clock size={18} className="text-primary" /> เวลาเปิด-ปิด
          </h3>
          <p className="text-sm text-muted-foreground">
            ทุกวัน: 9:00 - 20:00
          </p>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
            <MessageCircle size={18} className="text-primary" /> ติดต่อเรา
          </h3>
          <div className="flex items-center justify-center md:justify-start gap-3 mt-1">
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-2xl bg-salon-green px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:scale-105"
            >
              <MessageCircle size={14} /> LINE
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-2xl bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-all hover:scale-105"
            >
              <Instagram size={14} /> Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © 2026 Bloom Salon ✨ All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
