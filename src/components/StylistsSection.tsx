import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import stylistMod from "@/assets/stylist-mod.jpg";
import stylistBow from "@/assets/stylist-bow.jpg";
import stylistPop from "@/assets/stylist-pop.jpg";

const stylists = [
  {
    id: "jane",
    dbName: "ช่างเจน",
    name: "ช่างเจน (Jane)",
    image: stylistMod,
    specialty: "ผู้เชี่ยวชาญด้านการตัดผมสไตล์เกาหลี",
    tag: "Cut Expert ✂️",
  },
  {
    id: "noon",
    dbName: "ช่างนุ่น",
    name: "ช่างนุ่น (Noon)",
    image: stylistPop,
    specialty: "ถนัดทำสีผมและไฮไลท์",
    tag: "Color Queen 🎨",
  },
  {
    id: "bow",
    dbName: "ช่างโบว์",
    name: "ช่างโบว์ (Bow)",
    image: stylistBow,
    specialty: "สไตลิสต์ดัดวอลลุ่มและทรีทเมนต์",
    tag: "Perm & Care 💖",
  },
];

const days = ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"];
const dayMap: Record<string, number> = {
  "อาทิตย์": 0, "จันทร์": 1, "อังคาร": 2, "พุธ": 3,
  "พฤหัสบดี": 4, "ศุกร์": 5, "เสาร์": 6,
};
const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

const getWeekDates = () => {
  const now = new Date();
  const currentDay = now.getDay(); // 0=Sun
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((currentDay + 6) % 7));
  monday.setHours(0, 0, 0, 0);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);
  return { monday, sunday };
};

const StylistsSection = () => {
  const [selected, setSelected] = useState("jane");
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());

  const fetchBookings = useCallback(async () => {
    const stylist = stylists.find((s) => s.id === selected);
    if (!stylist) return;

    const { monday, sunday } = getWeekDates();

    const { data } = await supabase.rpc("get_booking_availability", {
      p_hairdresser_name: stylist.dbName,
      p_start_date: monday.toISOString(),
      p_end_date: sunday.toISOString(),
    });

    const slots = new Set<string>();
    (data as { booking_date: string }[] | null)?.forEach((b) => {
      const d = new Date(b.booking_date);
      const dayIndex = d.getDay();
      const dayName = Object.entries(dayMap).find(([, v]) => v === dayIndex)?.[0];
      const hour = d.getHours().toString().padStart(2, "0") + ":00";
      if (dayName) slots.add(`${dayName}-${hour}`);
    });
    setBookedSlots(slots);
  }, [selected]);

  useEffect(() => {
    fetchBookings();

    // Poll every 10 seconds for near-real-time updates (secure alternative to realtime subscription)
    const interval = setInterval(fetchBookings, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [fetchBookings]);

  return (
    <section id="stylists" className="py-20 px-4 bg-muted/40">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          ทำความรู้จักช่าง & เช็คคิวว่าง ✂️
        </h2>
        <p className="text-center text-muted-foreground mb-10 font-medium">
          เลือกช่างที่ใช่ สไตล์ที่ชอบ สำหรับคุณโดยเฉพาะ
        </p>

        {/* Stylist Toggle Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto mb-10">
          {stylists.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={`rounded-3xl p-3 md:p-5 text-center transition-all hover:-translate-y-1 ${
                selected === s.id
                  ? "gradient-card shadow-cute-hover ring-2 ring-primary"
                  : "gradient-card shadow-cute opacity-70 hover:opacity-100"
              }`}
            >
              <div className="mx-auto mb-2 h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full border-3 border-border shadow-cute">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <h3 className="text-xs md:text-sm font-bold text-foreground mb-0.5">{s.name}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground hidden md:block">{s.specialty}</p>
              <span className="inline-block mt-1 rounded-2xl bg-secondary px-2 py-0.5 text-[10px] md:text-xs font-bold text-secondary-foreground">
                {s.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Weekly Calendar / Time Slots */}
        <div className="max-w-4xl mx-auto gradient-card rounded-3xl shadow-cute p-4 md:p-6 overflow-x-auto">
          <h3 className="text-lg font-bold text-foreground mb-1 text-center">
            📅 ตารางคิวสัปดาห์นี้ — {stylists.find((s) => s.id === selected)?.name}
          </h3>
          <div className="flex items-center justify-center gap-4 mb-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3.5 w-3.5 rounded-full bg-green-500 shadow-sm" /> ว่าง
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3.5 w-3.5 rounded-full bg-red-400 shadow-sm" /> ติดจองแล้ว
            </span>
          </div>
          <div className="min-w-[600px]">
            <div className="grid grid-cols-8 gap-1 text-center text-xs font-bold text-muted-foreground mb-1">
              <div className="py-2">เวลา</div>
              {days.map((d) => (
                <div key={d} className="py-2">{d}</div>
              ))}
            </div>
            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-8 gap-1 text-center text-xs mb-1">
                <div className="py-2 font-semibold text-foreground rounded-xl bg-muted/60">{time}</div>
                {days.map((day) => {
                  const booked = bookedSlots.has(`${day}-${time}`);
                  return (
                    <div
                      key={`${day}-${time}`}
                      className={`py-2 rounded-xl font-semibold transition-colors ${
                        booked
                          ? "bg-red-400/30 text-red-600 border border-red-300/50"
                          : "bg-green-400/25 text-green-700 border border-green-300/40"
                      }`}
                    >
                      {booked ? "🔴" : "🟢"}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylistsSection;
