import { useState, useEffect, useRef } from 'react';
import { Terminal, Database, Activity, Sparkles, AlertCircle, Info, ShieldAlert, ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FunnelMode, DiagnosticResult, Reservation, AnalyticsEvent } from './types';
import SimulatorControlBar from './components/SimulatorControlBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhySeeingThis from './components/WhySeeingThis';
import WhatAstrateqIsValidatingFirst from './components/WhatAstrateqIsValidatingFirst';
import CohortBenefits from './components/CohortBenefits';
import TierSelection from './components/TierSelection';
import ReservationForm from './components/ReservationForm';
import PostSubmissionConfirmation from './components/PostSubmissionConfirmation';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatYourReadinessScoreMeans from './components/WhatYourReadinessScoreMeans';
import WhyAstrateqIsBuildingThis from './components/WhyAstrateqIsBuildingThis';
import WhatHappensAfterYouSubmit from './components/WhatHappensAfterYouSubmit';

export default function App() {
  // Sandbox States
  const [mode, setMode] = useState<FunnelMode>('mode-a');
  const [selectedTierId, setSelectedTierId] = useState<string>('tier-2');
  
  const [diagnostic, setDiagnostic] = useState<DiagnosticResult>({
    score: 80,
    classification: 'Priority Evaluation Cohort',
    confidence: 'High',
    riskProfile: 'Highway / Seasonal',
    region: 'Ontario / GTA',
    vehicleType: 'SUV / Crossover',
    vehicleYear: 2022,
  });

  // Analytics Event Logs & Captured Reservations
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [activeReservation, setActiveReservation] = useState<Reservation | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll references
  const reservationFormRef = useRef<HTMLDivElement>(null);

  // Scroll to Top Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    triggerEvent('scroll_to_top_clicked', {});
  };

  // Log events helper
  const triggerEvent = (name: string, metadata: Record<string, any>) => {
    const newEvent: AnalyticsEvent = {
      id: 'EVT-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      name,
      timestamp: new Date().toISOString(),
      metadata,
    };
    
    setEvents((prev) => [newEvent, ...prev]);
    console.log(`[Analytics Event fired] ${name}`, metadata);
  };

  // On page load
  useEffect(() => {
    // Load existing reservations from localStorage
    const saved = localStorage.getItem('astrateq_reservations');
    if (saved) {
      try {
        setReservations(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved reservations', e);
      }
    }

    // Trigger page view event
    triggerEvent('reservation_page_view', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      screenResolution: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer || 'direct',
    });

    triggerEvent('qualification_summary_viewed', {
      score: diagnostic.score,
      classification: diagnostic.classification,
      region: diagnostic.region,
    });
  }, []);

  // Update localStorage when database changes
  const saveReservations = (updated: Reservation[]) => {
    setReservations(updated);
    localStorage.setItem('astrateq_reservations', JSON.stringify(updated));
  };

  const handleReservationComplete = (reservation: Reservation) => {
    const updated = [reservation, ...reservations];
    saveReservations(updated);
    setActiveReservation(reservation);
    
    // Smooth scroll to top of reservation card area to see results cleanly
    if (reservationFormRef.current) {
      reservationFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleResetForm = () => {
    setActiveReservation(null);
    triggerEvent('form_reset_clicked', {});
  };

  const handleClearDatabase = () => {
    saveReservations([]);
    triggerEvent('database_cleared', {});
  };

  const handleClearEvents = () => {
    setEvents([]);
  };

  // Scroll Actions
  const scrollToForm = () => {
    if (reservationFormRef.current) {
      reservationFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      triggerEvent('section_scrolled_to', { sectionId: id });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F9FC] text-[#081A33] flex flex-col font-sans selection:bg-[#0B7CFF]/10 selection:text-[#081A33]" id="root-layout">
      
      {/* 1. Sandbox Control Bar */}
      <SimulatorControlBar
        mode={mode}
        onModeChange={setMode}
        diagnostic={diagnostic}
        onDiagnosticChange={setDiagnostic}
        onTriggerEvent={triggerEvent}
      />

      {/* 2. Brand Header */}
      <Header
        mode={mode}
        onScrollToForm={scrollToForm}
        onScrollToSection={scrollToSection}
      />

      {/* Main landing funnel layout */}
      <main className="flex-grow">
        
        {/* 3. Hero section / Result Carryover card */}
        <HeroSection
          mode={mode}
          diagnostic={diagnostic}
          onScrollToForm={scrollToForm}
          onTriggerEvent={triggerEvent}
        />

        {/* 4. Why seeing this page */}
        <WhySeeingThis />

        {/* 4.5 What Astrateq is validating first */}
        <WhatAstrateqIsValidatingFirst />

        {/* 5. Cohort Benefits */}
        <CohortBenefits />

        {/* 6. Interactive Package/Tier Validation */}
        <TierSelection
          mode={mode}
          score={diagnostic.score}
          selectedTierId={selectedTierId}
          onSelectTier={setSelectedTierId}
          onTriggerEvent={triggerEvent}
        />

        {/* 6.1 What your readiness score means */}
        <WhatYourReadinessScoreMeans />

        {/* 6.2 Why Astrateq is building this */}
        <WhyAstrateqIsBuildingThis />

        {/* 6.3 What happens after you submit */}
        <WhatHappensAfterYouSubmit />

        {/* 7. Reservation / Form Section */}
        <div ref={reservationFormRef} className="scroll-mt-20 border-b border-[#D7E7F5] bg-white">
          {activeReservation ? (
            <PostSubmissionConfirmation
              reservation={activeReservation}
              onReset={handleResetForm}
              onTriggerEvent={triggerEvent}
            />
          ) : (
            <ReservationForm
              mode={mode}
              diagnostic={diagnostic}
              selectedTierId={selectedTierId}
              onReservationComplete={handleReservationComplete}
              onTriggerEvent={triggerEvent}
            />
          )}
        </div>

        {/* 8. Trust Section */}
        <TrustSection />

        {/* 9. Collapsible FAQ */}
        <FAQSection onTriggerEvent={triggerEvent} />

        {/* 10. Footer Section */}
        <Footer
          mode={mode}
          onScrollToForm={scrollToForm}
          onTriggerEvent={triggerEvent}
        />

      </main>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 30 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 rounded-full shadow-[0_10px_35px_rgba(0,191,239,0.35)] bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] text-white border border-[#00BFEF]/30 cursor-pointer focus:outline-none"
            title="Back to Top"
            id="back-to-top-btn"
          >
            <ArrowUp className="h-5 w-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
