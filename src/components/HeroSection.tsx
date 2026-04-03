import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onBookingClick: () => void;
}

const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="Bloom Salon background"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          ยินดีต้อนรับสู่ Bloom Salon 💖
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
          ร้านทำผมสไตล์น่ารักย่านสยามสแควร์ เปลี่ยนลุคใหม่ให้คุณมั่นใจกว่าที่เคย
        </p>
        <button
          onClick={onBookingClick}
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-cute transition-all hover:scale-105 hover:shadow-cute-hover active:scale-95"
        >
          จองคิวทำผม 📅
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
