const promotions = [
  {
    title: "🌸 โปรเปิดร้านใหม่!",
    description: "ตัดผม + สระไดร์ เพียง 250.- (จากปกติ 350.-)",
    badge: "HOT 🔥",
    validUntil: "ถึง 30 เม.ย. 2569",
  },
  {
    title: "🎨 ทำสีผม + ทรีทเมนต์",
    description: "แพ็คคู่สุดคุ้ม เพียง 2,800.- (จากปกติ 3,500.-)",
    badge: "SAVE 20%",
    validUntil: "ถึง 30 เม.ย. 2569",
  },
  {
    title: "💖 ดัดวอลลุ่ม เกาหลี",
    description: "ดัดวอลลุ่มสไตล์เกาหลี เพียง 899.- (จากปกติ 1,200.-)",
    badge: "POPULAR ✨",
    validUntil: "ถึง 30 เม.ย. 2569",
  },
];

const PromotionsSection = () => (
  <section id="promotions" className="py-20 px-4 bg-muted/40">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
        โปรโมชั่นพิเศษ 🎉
      </h2>
      <p className="text-center text-muted-foreground mb-10 font-medium">
        ข้อเสนอสุดพิเศษสำหรับคุณ
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {promotions.map((p, i) => (
          <div
            key={i}
            className="gradient-card rounded-3xl shadow-cute p-6 hover:shadow-cute-hover hover:-translate-y-1 transition-all relative overflow-hidden"
          >
            <span className="absolute top-3 right-3 rounded-2xl bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground">
              {p.badge}
            </span>
            <h3 className="text-lg font-bold text-foreground mb-2 pr-16">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {p.description}
            </p>
            <p className="text-[11px] text-muted-foreground/70 font-medium">
              📅 {p.validUntil}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PromotionsSection;
