// ===== ตั้งค่า URL ของ API ตรงนี้ =====
const BOOKING_API_URL = ""; // TODO: ใส่ URL สำหรับจองคิว
const PRICING_API_URL = ""; // TODO: ใส่ URL สำหรับดึงราคาบริการ

/**
 * ส่งข้อมูลจองคิวไปยัง API
 */
export async function submitBooking(data: {
  customer_name: string;
  customer_phone: string;
  service_type: string;
  hairdresser_name: string;
  booking_date: string;
}) {
  const response = await fetch(BOOKING_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "booking", ...data }),
  });

  if (!response.ok) {
    throw new Error("Booking failed");
  }

  return response.json();
}

/**
 * ดึงราคาบริการจาก API
 */
export async function fetchServicePrice(serviceName: string): Promise<string> {
  const response = await fetch(PRICING_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "get_price", service_name: serviceName }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch price");
  }

  const result = await response.json();
  return result.price;
}
