import { Scissors, Sparkles, Palette, Wind, Star, Droplets, Crown } from "lucide-react";

const services = [
  { icon: Scissors, name: "ตัดผมชาย", price: "200.-", recommended: false },
  { icon: Scissors, name: "ตัดผมหญิง", price: "150.-", recommended: false },
  { icon: Wind, name: "สระไดร์", price: "150.-", recommended: false },
  { icon: Palette, name: "ทำสีผม", price: "1,500.-", recommended: true },
  { icon: Sparkles, name: "ดัดวอลลุ่ม", price: "500.-", recommended: true },
  { icon: Droplets, name: "ยืดผม", price: "1,500.-", recommended: false },
  { icon: Crown, name: "ทรีทเมนต์บำรุงผม", price: "2,000.-", recommended: true },
];

const ServicesSection = () => {
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
              <p className="text-sm font-semibold text-muted-foreground">เริ่มต้น {s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
