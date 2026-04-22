import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const endpoints = [
  {
    title: "บันทึกการจองคิว",
    method: "POST",
    url: "BOOKING_API_URL",
    description: "รับข้อมูลการจองจากป๊อปอัปจองคิว แล้วส่งออกไปยังระบบหลังบ้านทันทีหลังลูกค้ายืนยัน",
    body: `{
  "action": "booking",
  "customer_name": "สมหญิง ใจดี",
  "customer_phone": "0812345678",
  "service_type": "ทำสีผม",
  "hairdresser_name": "ช่างเจน",
  "booking_date": "2026-04-22T10:30:00.000Z"
}`,
    response: `{
  "success": true,
  "message": "Booking saved"
}`,
  },
  {
    title: "ดึงราคาบริการ",
    method: "POST",
    url: "PRICING_API_URL",
    description: "ใช้ดึงราคาปัจจุบันของแต่ละบริการเพื่อแสดงบนการ์ดบริการอัตโนมัติ",
    body: `{
  "action": "get_price",
  "service_name": "ตัดผมหญิง"
}`,
    response: `{
  "price": "150.-"
}`,
  },
];

const notes = [
  "หน้าเว็บตั้งค่าให้เรียกใช้งานทั้งสอง endpoint แบบ POST แล้ว",
  "ให้นำ URL จริงไปใส่ที่ไฟล์ src/lib/api.ts ในตัวแปร BOOKING_API_URL และ PRICING_API_URL",
  "ถ้า API ราคาใช้เวลาตอบกลับ ระบบจะแสดงสถานะกำลังโหลดบนการ์ดบริการอัตโนมัติ",
  "การจองคิวจะบันทึกเข้าฐานข้อมูลของเว็บก่อน แล้วจึงส่งต่อไปยัง API ภายนอกอีกครั้ง",
];

const ApiDocs = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b bg-card/60">
        <div className="container mx-auto px-4 pb-10 pt-28">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            กลับหน้าแรก
          </Link>

          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-normal text-muted-foreground">API Docs</p>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">เอกสารเชื่อมต่อ API ของ Salon Sajai</h1>
            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              หน้านี้สรุปรูปแบบ request และ response สำหรับ endpoint ที่หน้าเว็บใช้งานอยู่ตอนนี้ เพื่อให้ต่อเข้าระบบหลังบ้านได้ง่ายขึ้น
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-6 px-4 py-10">
        {endpoints.map((endpoint) => (
          <Card key={endpoint.title} className="border-border/80 bg-card shadow-cute">
            <CardHeader className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {endpoint.method}
                </span>
                <CardTitle className="text-2xl text-foreground">{endpoint.title}</CardTitle>
              </div>
              <CardDescription className="text-base leading-7">{endpoint.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Endpoint</p>
                <div className="overflow-x-auto rounded-lg border border-border bg-muted/40 px-4 py-3 font-mono text-sm text-foreground">
                  {endpoint.url}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Request Body</p>
                  <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-sm leading-6 text-foreground">
                    <code>{endpoint.body}</code>
                  </pre>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Response ตัวอย่าง</p>
                  <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-sm leading-6 text-foreground">
                    <code>{endpoint.response}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-border/80 bg-card shadow-cute">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">หมายเหตุการใช้งาน</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-base leading-7 text-muted-foreground">
              {notes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            กลับไปหน้าร้าน
          </Link>
          <a
            href="https://lin.ee/6cDhGJ3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition-transform hover:scale-[1.02]"
          >
            คุยต่อทาง LINE
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ApiDocs;