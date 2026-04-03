import { Scissors, Sparkles, Palette, Wind } from "lucide-react";

const services = [
  { icon: Scissors, name: "ตัดผม", price: "เริ่มต้น 300.-", color: "text-salon-pink" },
  { icon: Sparkles, name: "ดัดวอลลุ่ม", price: "เริ่มต้น 1,500.-", color: "text-salon-lilac" },
  { icon: Palette, name: "ทำสีผม", price: "เริ่มต้น 2,000.-", color: "text-salon-peach" },
  { icon: Wind, name: "สระไดร์", price: "เริ่มต้น 200.-", color: "text-salon-mint" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          บริการของเรา 💇‍♀️
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="gradient-card rounded-3xl p-6 text-center shadow-cute transition-all hover:shadow-cute-hover hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                <s.icon size={40} className={s.color} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{s.name}</h3>
              <p className="text-sm font-semibold text-muted-foreground">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
