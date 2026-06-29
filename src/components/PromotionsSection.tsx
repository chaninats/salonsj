const promotions = [
  {
    title: "🌸 คอมโบสาวมั่น",
    description: "ตัดผมหญิง + สระไดร์ + ทรีทเมนต์ เพียง 1,990.- (จากปกติ 3,400.-)",
    badge: "SAVE 40%",
    validUntil: "ถึง 31 ก.ค. 2569",
  },
  {
    title: "🎨 เปลี่ยนลุคสาวสายสี",
    description: "ฟอก + ทำสีผม + ทรีทเมนต์ เพียง 2,790.- (จากปกติ 4,100.-)",
    badge: "HOT 🔥",
    validUntil: "ถึง 31 ก.ค. 2569",
  },
  {
    title: "💫 ดัดวอลลุ่มเกาหลี",
    description: "ดัดวอลลุ่ม + ทรีทเมนต์บำรุง เพียง 1,990.- (จากปกติ 2,500.-)",
    badge: "POPULAR ✨",
    validUntil: "ถึง 31 ก.ค. 2569",
  },
  {
    title: "👨 แพ็คหนุ่มเนี้ยบ",
    description: "ตัดผมชาย + สระไดร์ เพียง 390.- (จากปกติ 1,450.-)",
    badge: "MEN ONLY",
    validUntil: "ถึง 31 ก.ค. 2569",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {promotions.map((p, i) => (
          <div
            key={i}
            className="gradient-card rounded-3xl shadow-cute p-6 hover:shadow-cute-hover hover:-translate-y-1 transition-all relative overflow-hidden"
          >
            <span className="absolute top-3 right-3 rounded-2xl bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground">
              {p.badge}
            </span>
            <h3 className="text-lg font-bold text-foreground mb-2 pr-20">
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
