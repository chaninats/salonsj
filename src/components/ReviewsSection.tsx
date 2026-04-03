const reviews = [
  {
    name: "คุณมิ้นท์",
    rating: 5,
    text: "ทำสีผมสวยมากค่ะ ช่างนุ่นเก่งมาก สีออกมาตรงปกเลย ประทับใจมากๆ 💕",
    service: "ทำสีผม",
    stylist: "ช่างนุ่น",
  },
  {
    name: "คุณเบล",
    rating: 5,
    text: "ตัดผมกับช่างเจนสวยทุกครั้งเลยค่ะ เข้าใจสไตล์ที่เราต้องการ แนะนำเลย ✨",
    service: "ตัดผมหญิง",
    stylist: "ช่างเจน",
  },
  {
    name: "คุณพลอย",
    rating: 5,
    text: "ดัดวอลลุ่มกับช่างโบว์ ผมฟูสวยมากค่ะ อยู่ทนด้วย รักเลย 🥰",
    service: "ดัดวอลลุ่ม",
    stylist: "ช่างโบว์",
  },
  {
    name: "คุณนัท",
    rating: 4,
    text: "ร้านน่ารักมาก บรรยากาศดี ช่างใจดี ทำทรีทเมนต์แล้วผมนุ่มสลวยมากเลย 💖",
    service: "ทรีทเมนต์",
    stylist: "ช่างโบว์",
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 px-4 bg-background">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
        รีวิวจากลูกค้า 💬
      </h2>
      <p className="text-center text-muted-foreground mb-10 font-medium">
        เสียงจากลูกค้าที่ไว้วางใจเรา
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="gradient-card rounded-3xl shadow-cute p-5 hover:shadow-cute-hover transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
                {r.name.charAt(3)}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{r.name}</h4>
                <p className="text-[10px] text-muted-foreground">
                  {r.service} • {r.stylist}
                </p>
              </div>
              <div className="ml-auto text-sm">
                {"⭐".repeat(r.rating)}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
