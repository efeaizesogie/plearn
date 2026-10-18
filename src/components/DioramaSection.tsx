import React, { useState } from 'react';
import { Gamepad2, HeartHandshake, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

interface Hotspot {
  id: number;
  title: string;
  tagline: string;
  description: string;
  bullet: string;
  xPercent: number; // percentage in the diorama viewport
  yPercent: number;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  color: string;
}

export const DioramaSection: React.FC = () => {
  const [activeHotspotId, setActiveHotspotId] = useState<number>(1);

  const hotspots: Hotspot[] = [
    {
      id: 1,
      title: 'The Sandbox Arcade',
      tagline: 'Kids learn logic by building real games',
      description:
        'Instead of memorizing dry definitions, kids build working games from day one. They adjust gravity, write collision mechanics, and tweak health bars while naturally picking up loops and conditionals.',
      bullet: 'Transitions smoothly from visual blocks to real JavaScript & Python',
      xPercent: 28,
      yPercent: 38,
      icon: Gamepad2,
      color: '#FF5A36',
    },
    {
      id: 2,
      title: 'The Mentor Treehouse',
      tagline: 'Small squads of 4 with patient human coaches',
      description:
        'Learning to code should never be lonely. In small live squads capped at 4 students, our encouraging mentors guide troubleshooting and turn every bugs into a fun collaborative detective story.',
      bullet: '1:4 mentor-to-student ratio guarantees personal attention every week',
      xPercent: 68,
      yPercent: 32,
      icon: HeartHandshake,
      color: '#7B61FF',
    },
    {
      id: 3,
      title: 'Showcase Launchpad',
      tagline: 'Published playable links for friends & family',
      description:
        'Every month ends with a live celebration. Learners publish their own custom games to a shareable web link that parents, grandparents, and classmates can test on any phone, tablet, or laptop.',
      bullet: 'Kids build a genuine digital portfolio they are excited to show off',
      xPercent: 50,
      yPercent: 70,
      icon: Rocket,
      color: '#FF5A36',
    },
  ];

  const currentHotspot = hotspots.find((h) => h.id === activeHotspotId) || hotspots[0];

  return (
    <section id="diorama" className="py-20 sm:py-28 bg-[#FFE9D2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1D1A2F] tracking-tight mb-4">
            An isometric peek into how we learn
          </h2>
          <p className="text-[#1D1A2F] text-base sm:text-xl leading-relaxed font-semibold">
            Tap the pulsing hotspots on our miniature diorama to explore our
            creative learning environments.
          </p>
        </div>

        {/* Diorama Container & Hotspot Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center: Interactive Isometric Diorama 3D Viewport */}
          <div className="lg:col-span-7">
            <div className="chunky-card bg-[#FFF8EE] p-4 sm:p-6 relative overflow-hidden">
              {/* Interactive badge */}
              <div className="absolute top-4 left-4 z-20 bg-[#FFE9D2] border-2 border-[#1D1A2F] rounded-full px-3 py-1 text-xs font-display font-bold text-[#1D1A2F] shadow-[2px_2px_0px_#1D1A2F] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] animate-ping" />
                <span>Tap any 3D hotspot</span>
              </div>

              {/* Isometric 3D Render Viewport */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#FFE9D2] border-2 border-[#1D1A2F] overflow-hidden flex items-center justify-center shadow-inner group">
                <img
                  src="/assets/3d-diorama.jpg"
                  alt="3D isometric diorama of plearn coding campus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                  draggable={false}
                />

                {/* Overlaid Interactive Hotspot Buttons */}
                {hotspots.map((h) => {
                  const isActive = h.id === activeHotspotId;
                  const Icon = h.icon;
                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setActiveHotspotId(h.id)}
                      style={{
                        left: `${h.xPercent}%`,
                        top: `${h.yPercent}%`,
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-200 group/btn cursor-pointer focus:outline-none ${
                        isActive ? 'scale-125 z-40' : 'hover:scale-110'
                      }`}
                      aria-label={`Hotspot ${h.id}: ${h.title}`}
                    >
                      <span className="relative flex items-center justify-center">
                        {/* Pulsing ring */}
                        <span
                          className={`absolute w-12 h-12 rounded-full opacity-70 animate-ping ${
                            isActive ? 'bg-[#FF5A36]' : 'bg-[#7B61FF]'
                          }`}
                        />
                        {/* Main Button Badge */}
                        <span
                          className={`relative w-10 h-10 rounded-2xl border-2 border-[#1D1A2F] flex items-center justify-center font-display font-bold text-base shadow-[3px_3px_0px_#1D1A2F] text-white transition-colors ${
                            isActive ? 'bg-[#FF5A36]' : 'bg-[#7B61FF]'
                          }`}
                        >
                          <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </span>
                      </span>
                      {/* Label tooltip */}
                      <span
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-xl text-xs font-display font-bold whitespace-nowrap border-2 border-[#1D1A2F] shadow-[2px_2px_0px_#1D1A2F] transition-opacity ${
                          isActive
                            ? 'bg-[#1D1A2F] text-[#FFF8EE] opacity-100'
                            : 'bg-[#FFF8EE] text-[#1D1A2F] opacity-0 group-hover/btn:opacity-100'
                        }`}
                      >
                        {h.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Selectors */}
              <div className="flex items-center justify-center gap-2 mt-4 pt-2 border-t border-[#1D1A2F]/10">
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActiveHotspotId(h.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-display font-bold border-2 transition-all cursor-pointer ${
                      activeHotspotId === h.id
                        ? 'bg-[#1D1A2F] text-[#FFF8EE] border-[#1D1A2F]'
                        : 'bg-[#FFE9D2] text-[#1D1A2F] border-[#1D1A2F]/40 hover:border-[#1D1A2F]'
                    }`}
                  >
                    #{h.id} {h.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Active Hotspot Explanation Card */}
          <div className="lg:col-span-5">
            <div className="chunky-card bg-[#FFF8EE] p-6 sm:p-8 relative rotate-1 hover:rotate-0 transition-transform">
              {/* Header with Icon Badge */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl border-2 border-[#1D1A2F] flex items-center justify-center shadow-[3px_3px_0px_#1D1A2F]"
                  style={{ backgroundColor: currentHotspot.color }}
                >
                  <currentHotspot.icon className="w-7 h-7 text-[#FFF8EE]" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-[#1D1A2F] bg-[#FFE9D2] px-2 py-0.5 rounded-md border border-[#1D1A2F]">
                    Hotspot #{currentHotspot.id} of 3
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#1D1A2F] mt-1">
                    {currentHotspot.title}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="font-display font-bold text-lg text-[#FF5A36] mb-3">
                {currentHotspot.tagline}
              </p>

              {/* Main description */}
              <p className="text-[#1D1A2F] text-base sm:text-lg leading-relaxed mb-6 font-medium">
                {currentHotspot.description}
              </p>

              {/* Key Benefit Bullet */}
              <div className="bg-[#FFE9D2] border-2 border-[#1D1A2F] rounded-2xl p-4 flex items-start gap-3 shadow-[2px_2px_0px_#1D1A2F]">
                <CheckCircle2 className="w-5 h-5 text-[#7B61FF] shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-sm sm:text-base font-bold text-[#1D1A2F]">
                  {currentHotspot.bullet}
                </span>
              </div>

              {/* Navigation Arrows for Hotspots */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#1D1A2F]/10">
                <button
                  type="button"
                  onClick={() =>
                    setActiveHotspotId((prev) => (prev === 1 ? 3 : prev - 1))
                  }
                  className="text-xs font-display font-bold text-[#1D1A2F] hover:text-[#FF5A36] flex items-center gap-1 cursor-pointer py-1 px-2"
                >
                  ← Previous hotspot
                </button>
                <div className="flex gap-1.5">
                  {hotspots.map((h) => (
                    <span
                      key={h.id}
                      className={`w-2.5 h-2.5 rounded-full border border-[#1D1A2F] ${
                        activeHotspotId === h.id ? 'bg-[#FF5A36]' : 'bg-[#FFE9D2]'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveHotspotId((prev) => (prev === 3 ? 1 : prev + 1))
                  }
                  className="text-xs font-display font-bold text-[#FF5A36] hover:text-[#1D1A2F] flex items-center gap-1 cursor-pointer py-1 px-2"
                >
                  Next hotspot →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
