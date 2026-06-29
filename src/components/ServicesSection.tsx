import { useState, useEffect } from "react";
import {
  Scissors,
  Sparkles,
  Palette,
  Wind,
  Star,
  Droplets,
  Crown,
  Loader2,
  Brush,
  Wand2,
  Heart,
  PaintBucket,
} from "lucide-react";
import { fetchServicePrice } from "@/lib/api";

type Service = {
  icon: typeof Scissors;
  name: string;
  fallbackPrice: string;
  recommended?: boolean;
  category: "cut" | "wash" | "color" | "perm" | "treatment" | "event";
};

const services: Service[] = [
  // ตัด
  { icon: Scissors, name: "ตัดผมชาย", fallbackPrice: "200.-", category: "cut" },
  { icon: Scissors, name: "ตัดผมหญิง", fallbackPrice: "150.-", category: "cut" },
  { icon: Brush, name: "ซอยผมชาย", fallbackPrice: "120.-", category: "cut" },
  { icon: Brush, name: "ซอยผมหญิง", fallbackPrice: "150.-", category: "cut" },
  // สระ / เซ็ต
  { icon: Wind, name: "สระไดร์", fallbackPrice: "1,250.-", category: "wash" },
  { icon: Sparkles, name: "เซ็ตผม", fallbackPrice: "900.-", category: "wash" },
  // สี
  { icon: PaintBucket, name: "ทำสีผม + ฟอกสีผม", fallbackPrice: "600.-", recommended: true, category: "color" },
  { icon: Palette, name: "ทำสีผม", fallbackPrice: "1,500.-", recommended: true, category: "color" },
  { icon: Wand2, name: "ไฮไลท์สีผม", fallbackPrice: "1,200.-", recommended: true, category: "color" },
  // ดัด / ยืด
  { icon: Sparkles, name: "ดัดลอน", fallbackPrice: "1,500.-", category: "perm" },
  { icon: Sparkles, name: "ดัดวอลลุ่ม", fallbackPrice: "500.-", recommended: true, category: "perm" },
  { icon: Droplets, name: "ยืดผม", fallbackPrice: "1,500.-", category: "perm" },
  // ทรีทเมนต์
  { icon: Crown, name: "ทรีทเมนต์บำรุงผม", fallbackPrice: "2,000.-", recommended: true, category: "treatment" },
  { icon: Crown, name: "เคราติน", fallbackPrice: "1,000.-", category: "treatment" },
  // ออกงาน
  { icon: Heart, name: "ทำผมออกงาน (หญิง)", fallbackPrice: "350.-", category: "event" },
  { icon: Heart, name: "ทำผมออกงาน (ชาย)", fallbackPrice: "350.-", category: "event" },
];

const ServicesSection = () => {
  const [prices, setPrices] = useState<Record<string, string>>({});
  const [loadingPrices, setLoadingPrices] = useState<Record<string, boolean>>({});

  useEffect(() => {
    services.forEach(async (s) => {
      setLoadingPrices((prev) => ({ ...prev, [s.name]: true }));
      try {
        const price = await fetchServicePrice(s.name);
        setPrices((prev) => ({ ...prev, [s.name]: price }));
      } catch {
        // ใช้ fallbackPrice ถ้า API ยังไม่พร้อม
      } finally {
        setLoadingPrices((prev) => ({ ...prev, [s.name]: false }));
      }
    });
  }, []);

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          บริการของเรา 💇‍♀️
        </h2>
        <p className="text-center text-muted-foreground mb-10 font-medium">
          ราคาเริ่มต้น เลือกได้ตามใจคุณ ✨
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
          {services.map((s) => (
            <div
              key={s.name}
              className="relative gradient-card rounded-3xl p-5 text-center shadow-cute transition-all hover:shadow-cute-hover hover:-translate-y-1"
            >
              {s.recommended && (
                <span className="absolute -top-2 -right-2 flex items-center gap-1 rounded-2xl bg-secondary px-2.5 py-1 text-[10px] font-bold text-secondary-foreground shadow-cute">
                  <Star size={10} className="fill-current" /> แนะนำ
                </span>
              )}
              <div className="mb-3 flex justify-center">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <s.icon size={26} className="text-primary" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1 leading-tight min-h-[2.5rem] flex items-center justify-center">
                {s.name}
              </h3>
              <p className="text-sm font-semibold text-primary">
                {loadingPrices[s.name] ? (
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Loader2 size={12} className="animate-spin" /> กำลังโหลด...
                  </span>
                ) : (
                  <>เริ่มต้น {prices[s.name] || s.fallbackPrice}</>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
