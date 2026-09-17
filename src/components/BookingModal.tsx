import { useState, useEffect, FormEvent } from 'react';
import { X, Calendar, Clock, Scissors, Check, Sparkles, User, Phone, Mail, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES, STUDIO_INFO } from '../data/barberData';
import { BarberService } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export function BookingModal({ isOpen, onClose, initialServiceId }: BookingModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Client details
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [hairType, setHairType] = useState('Straight / Pin-Straight');
  const [notes, setNotes] = useState('');

  // Confirmation state
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  useEffect(() => {
    // Set default date to tomorrow in YYYY-MM-DD
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setSelectedDate(dateStr);
    setSelectedTime('11:00 AM');
  }, []);

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const timeSlots = [
    { label: 'Morning', slots: ['9:30 AM', '10:15 AM', '11:00 AM', '11:45 AM'] },
    { label: 'Afternoon', slots: ['1:00 PM', '1:45 PM', '2:30 PM', '3:30 PM'] },
    { label: 'Evening', slots: ['4:30 PM', '5:15 PM', '6:00 PM', '6:45 PM'] }
  ];

  const handleConfirmBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      return;
    }
    const generatedId = `OB-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingId(generatedId);
    setIsConfirmed(true);
  };

  const handleDownloadCalendar = () => {
    const calendarContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Obsidian Edge//Barber Studio Booking//EN
BEGIN:VEVENT
UID:${bookingId}@theobsidianedge.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:The Obsidian Edge - ${currentService.title} with Alex Coutinho
DESCRIPTION:${currentService.description}\\nStudio: 1235 W. Chestnut St, Union, NJ\\nPhone: (908) 583-9244
LOCATION:1235 W. Chestnut St, Union, NJ 07083
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([calendarContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ObsidianEdge-Booking-${bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setBookingId('');
    onClose();
  };

  return (
    <div 
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="booking-modal-card"
        className="relative w-full max-w-2xl bg-[#0F141F] border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden my-6"
      >
        {/* Top Header Bar */}
        <div className="px-6 py-5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-neutral-900 border border-neutral-700 text-white">
              <Scissors className="w-4 h-4 text-neutral-300" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-white tracking-wide uppercase">
                {isConfirmed ? 'Booking Confirmed' : 'Book Your Session'}
              </h3>
              <p className="text-xs text-neutral-400">
                Alex Coutinho • The Obsidian Edge • Union, NJ
              </p>
            </div>
          </div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {isConfirmed ? (
          /* Confirmation View */
          <div className="p-6 sm:p-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Check className="w-8 h-8 text-white" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-neutral-900 border border-neutral-700 text-neutral-300">
                Confirmation #{bookingId}
              </span>
              <h4 className="font-heading font-black text-2xl text-white mt-3">
                You're Locked In With Alex
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto mt-1">
                We sent an instant confirmation text to <strong className="text-white">{clientPhone}</strong>. See you at the Union studio!
              </p>
            </div>

            {/* Appointment Details Box */}
            <div className="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-left max-w-lg mx-auto space-y-3">
              <div className="flex justify-between text-xs sm:text-sm py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Service:</span>
                <span className="text-white font-bold">{currentService.title}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Date & Time:</span>
                <span className="text-white font-mono">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Estimated Duration:</span>
                <span className="text-white">{currentService.durationMinutes} minutes</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Studio Location:</span>
                <span className="text-white">{STUDIO_INFO.fullAddress}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm py-1">
                <span className="text-neutral-400">Total Due Upon Completion:</span>
                <span className="text-white font-bold text-base">${currentService.price.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-100 text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-white shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Add to Calendar (.ics)
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleConfirmBooking} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center justify-between">
                <span>1. Select Service</span>
                <span className="text-neutral-400 font-mono text-[11px]">{currentService.durationMinutes} mins • ${currentService.price.toFixed(2)}</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES.map((s) => {
                  const isSelected = s.id === selectedServiceId;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`cursor-pointer p-3 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-neutral-800/90 border-white text-white shadow-lg'
                          : 'bg-[#1F2937]/30 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-[#1F2937]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{s.title}</span>
                        <span className="text-xs font-mono font-semibold text-white">${s.price.toFixed(2)}</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{s.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Date & Time Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  2. Choose Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs font-mono focus:outline-none focus:border-neutral-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Selected Time Slot
                </label>
                <div className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs font-mono flex items-center justify-between">
                  <span>{selectedTime || 'Select a slot below'}</span>
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                </div>
              </div>
            </div>

            {/* Interactive Time Slots Grid */}
            <div>
              <div className="space-y-3">
                {timeSlots.map((group) => (
                  <div key={group.label}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-1.5">
                      {group.label} Slots
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {group.slots.map((slot) => {
                        const isSlotSelected = selectedTime === slot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2 px-1 rounded-lg text-[11px] font-mono font-medium transition-all ${
                              isSlotSelected
                                ? 'bg-white text-black font-bold shadow-md'
                                : 'bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Client Information */}
            <div className="space-y-3 pt-2 border-t border-neutral-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                3. Your Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs text-white focus:outline-none focus:border-white placeholder-neutral-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="Mobile Phone (For SMS reminder) *"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs text-white focus:outline-none focus:border-white placeholder-neutral-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs text-white focus:outline-none focus:border-white placeholder-neutral-500"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={hairType}
                    onChange={(e) => setHairType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 focus:outline-none focus:border-white"
                  >
                    <option value="Straight / Pin-Straight">Texture: Straight / Pin-Straight</option>
                    <option value="Wavy / Medium Density">Texture: Wavy / Medium Density</option>
                    <option value="Curly / Coily / Permed">Texture: Curly / Coily / Permed</option>
                    <option value="Thick / Coarse / Heavy Bulk">Texture: Thick / Coarse / Heavy Bulk</option>
                    <option value="Fine / Thinning / Crown Cowlick">Texture: Fine / Cowlicks</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder="Notes for Alex (e.g. want a low taper with textured crop, previous perm history, etc.)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-xs text-white focus:outline-none focus:border-white placeholder-neutral-500"
                />
              </div>
            </div>

            {/* Summary & Submit */}
            <div className="pt-3 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-neutral-300" />
                <span>No advance payment needed • Pay at studio</span>
              </div>

              <button
                type="submit"
                id="modal-confirm-booking-btn"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-widest text-black bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 hover:from-white hover:to-neutral-100 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm Reservation (${currentService.price.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
