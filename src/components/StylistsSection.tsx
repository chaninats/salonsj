import stylistMod from "@/assets/stylist-mod.jpg";
import stylistBow from "@/assets/stylist-bow.jpg";
import stylistPop from "@/assets/stylist-pop.jpg";

const stylists = [
  {
    name: "ช่างมด (Mod)",
    image: stylistMod,
    specialty: "ผู้เชี่ยวชาญด้านการทำสีผมออร์แกนิค",
    tag: "Color Expert 🎨",
    tagColor: "bg-salon-peach",
  },
  {
    name: "ช่างโบว์ (Bow)",
    image: stylistBow,
    specialty: "ถนัดดัดวอลลุ่มสไตล์เกาหลี",
    tag: "Perm Queen 👑",
    tagColor: "bg-salon-lilac",
  },
  {
    name: "ช่างป๊อป (Pop)",
    image: stylistPop,
    specialty: "สไตลิสต์ตัดผมทุกสไตล์",
    tag: "All-Rounder ✨",
    tagColor: "bg-salon-mint",
  },
];

const StylistsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/40">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          ทำความรู้จักช่างของเรา ✂️
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-medium">
          เลือกช่างที่ใช่ สไตล์ที่ชอบ สำหรับคุณโดยเฉพาะ
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stylists.map((s) => (
            <div
              key={s.name}
              className="gradient-card rounded-3xl p-6 text-center shadow-cute transition-all hover:shadow-cute-hover hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-border shadow-cute">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.specialty}</p>
              <span className={`inline-block rounded-2xl ${s.tagColor} px-3 py-1 text-xs font-bold text-foreground`}>
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylistsSection;
