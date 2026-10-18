import React, { useState } from 'react';
import { Mascot } from './Mascot';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Calendar, Clock, User } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [ageGroup, setAgeGroup] = useState<string>('7-9');
  const [interest, setInterest] = useState<string>('games');
  const [sessionTime, setSessionTime] = useState<string>('tue-430');
  const [parentName, setParentName] = useState<string>('');
  const [parentEmail, setParentEmail] = useState<string>('');
  const [childName, setChildName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  const ageOptions = [
    { id: '7-9', label: 'Ages 7–9', desc: 'Visual block logic, animations & friendly robots' },
    { id: '10-12', label: 'Ages 10–12', desc: 'Arcade platformers, physics & code puzzles' },
    { id: '13-14', label: 'Ages 13–14', desc: 'Typed Python, web apps & game engine logic' },
  ];

  const interestOptions = [
    { id: 'games', label: '🕹️ Video Game Design', desc: 'Build retro platformers & maze runners' },
    { id: 'stories', label: '🎨 Animated Stories', desc: 'Create interactive characters & digital art' },
    { id: 'mods', label: '🧱 Minecraft & Mods', desc: 'Custom rules, items, and world scripts' },
    { id: 'apps', label: '💻 Web & Python', desc: 'Real typed code, web mini-tools, and bots' },
  ];

  const timeOptions = [
    { id: 'tue-430', day: 'Tuesday', time: '4:30 PM – 5:15 PM ET', spots: '2 spots left' },
    { id: 'wed-515', day: 'Wednesday', time: '5:15 PM – 6:00 PM ET', spots: '1 spot left' },
    { id: 'thu-430', day: 'Thursday', time: '4:30 PM – 5:15 PM ET', spots: '3 spots left' },
    { id: 'sat-1030', day: 'Saturday', time: '10:30 AM – 11:15 AM ET', spots: 'Full squad opening' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="get-started-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D1A2F]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-[#FFF8EE] border-4 border-[#1D1A2F] rounded-[32px] shadow-[8px_8px_0px_#1D1A2F] p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#FFE9D2] border-2 border-[#1D1A2F] flex items-center justify-center text-[#1D1A2F] hover:bg-[#FF5A36] hover:text-[#FFF8EE] transition-colors shadow-[2px_2px_0px_#1D1A2F] cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header with Mascot */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FFE9D2] border-2 border-[#1D1A2F] flex items-center justify-center shadow-[2px_2px_0px_#1D1A2F] shrink-0">
                <Mascot pose={step === 1 ? 'hello' : 'thinking'} size={46} />
              </div>
              <div>
                <span className="text-xs font-display font-bold text-[#FF5A36] uppercase tracking-wider">
                  Step {step} of 3 • Free Trial
                </span>
                <h2 id="get-started-title" className="font-display font-bold text-2xl sm:text-3xl text-[#1D1A2F]">
                  {step === 1 && 'Who is our future creator?'}
                  {step === 2 && 'What excites them most?'}
                  {step === 3 && 'Pick a time & parent details'}
                </h2>
              </div>
            </div>

            {/* Step 1: Age Selection */}
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-[#1D1A2F] text-sm sm:text-base font-semibold">
                  We group students into small squads of 4 by age and experience level.
                </p>

                <div className="space-y-3">
                  {ageOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAgeGroup(opt.id)}
                      className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                        ageGroup === opt.id
                          ? 'bg-[#FFE9D2] border-[#1D1A2F] shadow-[3px_3px_0px_#1D1A2F] scale-[1.01]'
                          : 'bg-[#FFF8EE] border-[#1D1A2F]/30 hover:border-[#1D1A2F]'
                      }`}
                    >
                      <div>
                        <div className="font-display font-bold text-lg text-[#1D1A2F]">
                          {opt.label}
                        </div>
                        <div className="text-xs sm:text-sm text-[#1D1A2F] font-semibold">
                          {opt.desc}
                        </div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 border-[#1D1A2F] flex items-center justify-center ${
                          ageGroup === opt.id ? 'bg-[#FF5A36] text-[#FFF8EE]' : 'bg-[#FFF8EE]'
                        }`}
                      >
                        {ageGroup === opt.id && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="chunky-btn bg-[#FF5A36] text-[#FFF8EE] px-6 py-3 font-display font-bold text-base flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#1D1A2F]"
                  >
                    <span>Next: Interests</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Track & Interests */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-[#1D1A2F] text-sm sm:text-base font-semibold">
                  Pick the topic that sparks their imagination the most.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setInterest(opt.id)}
                      className={`p-4 rounded-2xl border-2 text-left flex flex-col justify-between transition-all cursor-pointer ${
                        interest === opt.id
                          ? 'bg-[#FFE9D2] border-[#1D1A2F] shadow-[3px_3px_0px_#1D1A2F]'
                          : 'bg-[#FFF8EE] border-[#1D1A2F]/30 hover:border-[#1D1A2F]'
                      }`}
                    >
                      <div className="font-display font-bold text-base text-[#1D1A2F] mb-1">
                        {opt.label}
                      </div>
                      <div className="text-xs text-[#1D1A2F] font-semibold mb-3">
                        {opt.desc}
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 border-[#1D1A2F] self-end flex items-center justify-center ${
                          interest === opt.id ? 'bg-[#7B61FF] text-[#FFF8EE]' : 'bg-[#FFF8EE]'
                        }`}
                      >
                        {interest === opt.id && <Check className="w-3 h-3" strokeWidth={3} />}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm font-display font-bold text-[#1D1A2F] hover:text-[#FF5A36] flex items-center gap-1 cursor-pointer py-2 px-3"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="chunky-btn bg-[#FF5A36] text-[#FFF8EE] px-6 py-3 font-display font-bold text-base flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#1D1A2F]"
                  >
                    <span>Next: Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Schedule & Parent Info */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#1D1A2F] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#FF5A36]" />
                    <span>Select Free Trial Time Slot</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {timeOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSessionTime(opt.id)}
                        className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                          sessionTime === opt.id
                            ? 'bg-[#FFE9D2] border-[#1D1A2F] shadow-[2px_2px_0px_#1D1A2F]'
                            : 'bg-[#FFF8EE] border-[#1D1A2F]/20 hover:border-[#1D1A2F]'
                        }`}
                      >
                        <div className="font-display font-bold text-sm text-[#1D1A2F]">
                          {opt.day}
                        </div>
                        <div className="text-xs text-[#1D1A2F] font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#7B61FF]" />
                          <span>{opt.time}</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#FF5A36] mt-1 inline-block">
                          {opt.spots}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#1D1A2F] mb-1">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Rachel Miller"
                      className="w-full bg-[#FFE9D2]/40 border-2 border-[#1D1A2F] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1A2F] focus:outline-none focus:ring-2 focus:ring-[#FF5A36]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1D1A2F] mb-1">
                      Child's First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Leo"
                      className="w-full bg-[#FFE9D2]/40 border-2 border-[#1D1A2F] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1A2F] focus:outline-none focus:ring-2 focus:ring-[#FF5A36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1D1A2F] mb-1">
                    Parent Email (for squad link & calendar invite)
                  </label>
                  <input
                    type="email"
                    required
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    placeholder="parent@example.com"
                    className="w-full bg-[#FFE9D2]/40 border-2 border-[#1D1A2F] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1A2F] focus:outline-none focus:ring-2 focus:ring-[#FF5A36]"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#1D1A2F]/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-sm font-display font-bold text-[#1D1A2F] hover:text-[#FF5A36] flex items-center gap-1 cursor-pointer py-2 px-3"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="chunky-btn bg-[#FF5A36] text-[#FFF8EE] px-8 py-3.5 font-display font-bold text-base sm:text-lg flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#1D1A2F]"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm Free Trial Class</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#FFE9D2] rounded-3xl border-3 border-[#1D1A2F] flex items-center justify-center shadow-[4px_4px_0px_#1D1A2F]">
              <Mascot pose="celebrating" size={80} />
            </div>

            <div className="inline-block bg-[#FFE9D2] text-[#FF5A36] border-2 border-[#1D1A2F] px-4 py-1 rounded-full text-xs font-display font-bold mb-3 shadow-[2px_2px_0px_#1D1A2F]">
              🎉 You’re in! Free Trial Reserved
            </div>

            <h3 className="font-display font-bold text-3xl text-[#1D1A2F] mb-2">
              High five, {childName || 'Maker'}!
            </h3>

            <p className="text-[#1D1A2F] font-semibold text-base leading-relaxed max-w-md mx-auto mb-6">
              We’ve reserved your spot in our small squad. We just sent your
              welcome packet and private video room link to{' '}
              <strong className="text-[#1D1A2F] underline">{parentEmail || 'your email'}</strong>.
            </p>

            {/* Summary card */}
            <div className="chunky-card bg-[#FFE9D2] p-4 text-left max-w-sm mx-auto mb-6 text-sm">
              <div className="font-display font-bold text-[#1D1A2F] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A36]" />
                <span>Squad Details:</span>
              </div>
              <p className="text-xs text-[#1D1A2F] font-bold">
                • Max 4 learners with Coach Julian
                <br />
                • Interactive browser sandbox ready
                <br />
                • Duration: 50 fun-packed minutes
              </p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="chunky-btn bg-[#7B61FF] text-[#FFF8EE] px-8 py-3.5 font-display font-bold text-base cursor-pointer shadow-[3px_3px_0px_#1D1A2F]"
            >
              Back to plearn Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
