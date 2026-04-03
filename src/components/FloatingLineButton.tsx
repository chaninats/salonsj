import { MessageCircle } from "lucide-react";

const FloatingLineButton = () => {
  return (
    <a
      href="https://lin.ee/6cDhGJ3"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-salon-green shadow-cute transition-all hover:scale-110 hover:shadow-cute-hover animate-float"
      aria-label="ติดต่อทาง LINE"
    >
      <MessageCircle size={28} className="text-primary-foreground" />
    </a>
  );
};

export default FloatingLineButton;
