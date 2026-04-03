import { useState, useEffect } from "react";
import { Scissors, Sparkles, Palette, Wind, Star, Droplets, Crown, Loader2 } from "lucide-react";
import { fetchServicePrice } from "@/lib/api";

const services = [
  { icon: Scissors, name: "ตัดผมชาย", fallbackPrice: "200.-", recommended: false },
  { icon: Scissors, name: "ตัดผมหญิง", fallbackPrice: "150.-", recommended: false },
  { icon: Wind, name: "สระไดร์", fallbackPrice: "150.-", recommended: false },
  { icon: Palette, name: "ทำสีผม", fallbackPrice: "1,500.-", recommended: true },
  { icon: Sparkles, name: "ดัดวอลลุ่ม", fallbackPrice: "500.-", recommended: true },
  { icon: Droplets, name: "ยืดผม", fallbackPrice: "1,500.-", recommended: false },
  { icon: Crown, name: "ทรีทเมนต์บำรุงผม", fallbackPrice: "2,000.-", recommended: true },
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          บริการของเรา & แนะนำ 💇‍♀️
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="relative gradient-card rounded-3xl p-6 text-center shadow-cute transition-all hover:shadow-cute-hover hover:-translate-y-1"
            >
              {s.recommended && (
                <span className="absolute -top-2 -right-2 flex items-center gap-1 rounded-2xl bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow-cute">
                  <Star size={12} className="fill-current" /> แนะนำ
                </span>
              )}
              <div className="mb-4 flex justify-center">
                <s.icon size={36} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">{s.name}</h3>
              <p className="text-sm font-semibold text-muted-foreground">
                {loadingPrices[s.name] ? (
                  <span className="inline-flex items-center gap-1">
                    <Loader2 size={14} className="animate-spin" /> กำลังโหลด...
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
