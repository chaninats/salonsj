import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { submitBooking } from "@/lib/api";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("");
  const [datetime, setDatetime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const bookingData = {
      customer_name: name,
      customer_phone: phone,
      service_type: service,
      hairdresser_name: stylist || "ไม่ระบุ",
      booking_date: new Date(datetime).toISOString(),
    };

    try {
      // บันทึกลง Supabase (real-time)
      const { error } = await supabase.from("bookings").insert(bookingData);
      if (error) throw error;

      // ส่งไปยัง API ภายนอก (Google Sheet / อื่นๆ)
      try {
        await submitBooking(bookingData);
      } catch {
        // ถ้า API URL ยังไม่ได้ตั้งค่า จะข้ามไป ไม่ block การจอง
        console.warn("External API not configured yet");
      }

      toast.success("จองคิวสำเร็จ รอรับบริการได้เลยค่ะ 💖", {
        description: "เราจะติดต่อกลับเพื่อยืนยันนัดหมายนะคะ",
      });
      onOpenChange(false);
      setName("");
      setPhone("");
      setService("");
      setStylist("");
      setDatetime("");
    } catch {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งค่ะ 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-3xl border-border shadow-cute max-w-md mx-auto backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">
            จองคิวทำผม ✨
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input
            placeholder="ชื่อ-นามสกุล 💕"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-2xl border-border bg-muted/50 py-3 focus:ring-primary"
          />
          <Input
            placeholder="เบอร์โทรศัพท์ 📱"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="rounded-2xl border-border bg-muted/50 py-3"
          />
          <Select value={service} onValueChange={setService} required>
            <SelectTrigger className="rounded-2xl border-border bg-muted/50 py-3">
              <SelectValue placeholder="เลือกบริการที่ต้องการ 💇‍♀️" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl">
              <SelectItem value="ตัดผมชาย">ตัดผมชาย (200.-)</SelectItem>
              <SelectItem value="ตัดผมหญิง">ตัดผมหญิง (150.-)</SelectItem>
              <SelectItem value="สระไดร์">สระไดร์ (150.-)</SelectItem>
              <SelectItem value="ทำสีผม">ทำสีผม (1,500.-)</SelectItem>
              <SelectItem value="ดัดวอลลุ่ม">ดัดวอลลุ่ม (500.-)</SelectItem>
              <SelectItem value="ยืดผม">ยืดผม (1,500.-)</SelectItem>
              <SelectItem value="ทรีทเมนต์บำรุงผม">ทรีทเมนต์บำรุงผม (2,000.-)</SelectItem>
            </SelectContent>
          </Select>
          <Select value={stylist} onValueChange={setStylist}>
            <SelectTrigger className="rounded-2xl border-border bg-muted/50 py-3">
              <SelectValue placeholder="เลือกช่างที่ต้องการ ✂️" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl">
              <SelectItem value="ไม่ระบุ">ไม่ระบุ</SelectItem>
              <SelectItem value="ช่างเจน">ช่างเจน (Jane)</SelectItem>
              <SelectItem value="ช่างนุ่น">ช่างนุ่น (Noon)</SelectItem>
              <SelectItem value="ช่างโบว์">ช่างโบว์ (Bow)</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            required
            className="rounded-2xl border-border bg-muted/50 py-3"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-primary py-3 text-lg font-bold text-primary-foreground shadow-cute transition-all hover:scale-[1.02] hover:shadow-cute-hover active:scale-95 disabled:opacity-60"
          >
            {loading ? "กำลังจอง..." : "ยืนยันการจอง 💖"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
