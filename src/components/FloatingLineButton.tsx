import { MessageCircle, Bot } from "lucide-react";

const GOOGLE_SCRIPT_URL = ""; // TODO: ใส่ URL ของ API ที่นี่

const FloatingLineButton = () => {
  return (
    <>
      {/* ปุ่ม AI Chatbot - คุยกับ AI ผู้ช่วยของเรา */}
      <button
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-cute transition-all hover:scale-110 hover:shadow-cute-hover animate-float group"
        aria-label="คุยกับ AI ผู้ช่วยของเรา"
        title="คุยกับ AI ผู้ช่วยของเรา 🤖"
        onClick={() => {
          // TODO: เปิด Botnoi chatbot widget ตรงนี้
          console.log("Open chatbot");
        }}
      >
        <Bot size={28} className="text-accent-foreground" />
        <span className="absolute -top-8 right-0 whitespace-nowrap rounded-xl bg-card px-3 py-1 text-xs font-semibold text-foreground shadow-cute opacity-0 group-hover:opacity-100 transition-opacity">
          คุยกับ AI ผู้ช่วย 🤖
        </span>
      </button>

      {/* ปุ่ม LINE */}
      <a
        href="https://lin.ee/6cDhGJ3"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-salon-green shadow-cute transition-all hover:scale-110 hover:shadow-cute-hover animate-float"
        aria-label="ติดต่อทาง LINE"
      >
        <MessageCircle size={28} className="text-primary-foreground" />
      </a>
    </>
  );
};

export default FloatingLineButton;
