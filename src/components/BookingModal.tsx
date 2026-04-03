import { useState } from "react";
import { X } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("จองคิวสำเร็จแล้วค่ะ 💖", {
      description: "เราจะติดต่อกลับเพื่อยืนยันนัดหมายนะคะ",
    });
    onOpenChange(false);
    setName("");
    setPhone("");
    setService("");
    setStylist("");
    setDatetime("");
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
              <SelectItem value="cut">ตัดผม</SelectItem>
              <SelectItem value="perm">ดัดวอลลุ่ม</SelectItem>
              <SelectItem value="color">ทำสีผม</SelectItem>
              <SelectItem value="wash">สระไดร์</SelectItem>
            </SelectContent>
          </Select>
          <Select value={stylist} onValueChange={setStylist}>
            <SelectTrigger className="rounded-2xl border-border bg-muted/50 py-3">
              <SelectValue placeholder="เลือกช่างที่ต้องการ ✂️" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl">
              <SelectItem value="any">ไม่ระบุ</SelectItem>
              <SelectItem value="mod">ช่างมด (Mod)</SelectItem>
              <SelectItem value="bow">ช่างโบว์ (Bow)</SelectItem>
              <SelectItem value="pop">ช่างป๊อป (Pop)</SelectItem>
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
            className="w-full rounded-2xl bg-primary py-3 text-lg font-bold text-primary-foreground shadow-cute transition-all hover:scale-[1.02] hover:shadow-cute-hover active:scale-95"
          >
            ยืนยันการจอง 💖
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
