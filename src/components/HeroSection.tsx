import React, { useState } from 'react';
import { HeroStickers } from './HeroStickers';
import { Mascot, MascotPose } from './Mascot';
import { Sparkles, ArrowDown, Users, Gamepad2, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGetStarted }) => {
  const [mascotPose, setMascotPose] = useState<MascotPose>('hello');

  const cyclePose = () => {
    if (mascotPose === 'hello') setMascotPose('thinking');
    else if (mascotPose === 'thinking') setMascotPose('celebrating');
    else setMascotPose('hello');
  };

  return (
    <section className="relative pt-6 pb-20 sm:pt-12 sm:pb-28 overflow-hidden bg-[#FFF8EE]">
      {/* Draggable Hero Stickers */}
      <HeroStickers />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Top Playful Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFE9D2] border-2 border-[#1D1A2F] px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#1D1A2F] mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] animate-pulse" />
          <span className="font-display font-semibold text-xs sm:text-sm text-[#1D1A2F]">
            Spring 2026 Cohort Now Enrolling • Small squads of 4
          </span>
        </div>

        {/* Big Rounded Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl leading-[1.08] text-[#1D1A2F] tracking-tight max-w-4xl mx-auto mb-6">
          Where curious kids{' '}
          <span className="relative inline-block text-[#FF5A36]">
            build real games
            {/* Playful squiggle line */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#7B61FF]"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 2 8 C 50 2, 100 14, 150 4 C 180 -1, 195 9, 198 7"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          and fall in love with code.
        </h1>

        {/* Subtitle with generous line height and high contrast */}
        <p className="text-[#1D1A2F] text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-8 sm:mb-10">
          Fun after-school coding clubs for kids ages 7 to 14. Small live squads,
          patient human mentors, and zero boring worksheets.
        </p>

        {/* CTA Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="chunky-btn bg-[#FF5A36] hover:bg-[#ff431a] text-[#FFF8EE] text-lg sm:text-xl font-display font-bold px-8 sm:px-10 py-4 flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer"
          >
            <Sparkles className="w-5 h-5" strokeWidth={2.5} />
            <span>Get started</span>
          </button>

          <a
            href="#diorama"
            className="chunky-btn bg-[#FFF8EE] hover:bg-[#FFE9D2] text-[#1D1A2F] text-base sm:text-lg font-display font-semibold px-6 py-4 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Explore our 3D world</span>
            <ArrowDown className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-[#1D1A2F] font-bold mb-12">
          ✨ Free 30-min trial session • No credit card needed • Cancel anytime
        </p>

        {/* Interactive Mascot Spotlight Card */}
        <div className="max-w-xl mx-auto chunky-card bg-[#FFE9D2] p-4 sm:p-5 flex items-center justify-between gap-4 -rotate-1 hover:rotate-0 transition-transform">
          <button
            type="button"
            onClick={cyclePose}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            aria-label="Click to change Pip the mascot pose"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFF8EE] rounded-2xl border-2 border-[#1D1A2F] flex items-center justify-center shadow-[2px_2px_0px_#1D1A2F] group-hover:scale-105 transition-transform overflow-hidden">
              <Mascot pose={mascotPose} size={64} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold font-display uppercase tracking-wider text-[#FF5A36] bg-[#FFF8EE] px-2 py-0.5 rounded-md border border-[#1D1A2F]">
                Meet Pip · Tap to wave!
              </div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#1D1A2F] mt-0.5">
                {mascotPose === 'hello' && '“Ready to build your first game?”'}
                {mascotPose === 'thinking' && '“Hmm... let’s debug this loop!”'}
                {mascotPose === 'celebrating' && '“High five! Your project works!”'}
              </h4>
            </div>
          </button>

          <span className="hidden sm:inline-block text-xs font-bold text-[#1D1A2F] bg-[#FFF8EE] px-2.5 py-1 rounded-full border border-[#1D1A2F]">
            Pose: {mascotPose}
          </span>
        </div>

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 bg-[#FFF8EE] border-2 border-[#1D1A2F] rounded-2xl p-3 shadow-[3px_3px_0px_#1D1A2F]">
            <Users className="w-5 h-5 text-[#7B61FF]" strokeWidth={2.5} />
            <span className="font-display font-semibold text-sm sm:text-base text-[#1D1A2F]">
              Max 4 kids per mentor
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 bg-[#FFF8EE] border-2 border-[#1D1A2F] rounded-2xl p-3 shadow-[3px_3px_0px_#1D1A2F]">
            <Gamepad2 className="w-5 h-5 text-[#FF5A36]" strokeWidth={2.5} />
            <span className="font-display font-semibold text-sm sm:text-base text-[#1D1A2F]">
              Real playable games
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 bg-[#FFF8EE] border-2 border-[#1D1A2F] rounded-2xl p-3 shadow-[3px_3px_0px_#1D1A2F]">
            <Award className="w-5 h-5 text-[#7B61FF]" strokeWidth={2.5} />
            <span className="font-display font-semibold text-sm sm:text-base text-[#1D1A2F]">
              Ages 7 to 14
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
