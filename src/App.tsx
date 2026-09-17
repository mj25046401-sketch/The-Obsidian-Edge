import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TransformationsGallery } from './components/TransformationsGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SingleHtmlModal } from './components/SingleHtmlModal';
import { BarberService } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: BarberService) => {
    setSelectedServiceId(service.id);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-neutral-300 selection:text-black font-sans">
      
      {/* Sticky Header Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBooking}
          onSelectService={handleSelectService}
        />

        {/* About Alex Coutinho */}
        <AboutSection />

        {/* Specialized Barbering Services Grid (Tabbed Categories) */}
        <ServicesSection 
          onOpenBooking={handleOpenBooking}
        />

        {/* Hair Transformation Gallery */}
        <TransformationsGallery 
          onOpenBooking={() => handleOpenBooking('texture-styling')}
        />

        {/* Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Studio Location & Hours */}
        <LocationHoursSection 
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
      />

      {/* Interactive Booking Modal Popup */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceId}
      />

      {/* Standalone HTML File Code Viewer & Downloader Modal */}
      <SingleHtmlModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />

    </div>
  );
}
