import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BookingModal from "@/components/BookingModal";
import ServicesSection from "@/components/ServicesSection";
import StylistsSection from "@/components/StylistsSection";
import PromotionsSection from "@/components/PromotionsSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import FloatingLineButton from "@/components/FloatingLineButton";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onBookingClick={() => setBookingOpen(true)} />
      <ServicesSection />
      <PromotionsSection />
      <StylistsSection />
      <ReviewsSection />
      <Footer />
      <FloatingLineButton />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
