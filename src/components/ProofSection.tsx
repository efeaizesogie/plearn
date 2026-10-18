import React, { useState } from 'react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';

export const ProofSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | '7-9' | '10-12' | '13-14'>('all');

  const stats = [
    {
      value: '14,200+',
      label: 'Kids building active projects',
      description: 'From first animations to multiplayer games',
    },
    {
      value: '4.9 / 5',
      label: 'Average parent satisfaction',
      description: 'From 1,840+ verified family reviews',
    },
    {
      value: '89%',
      label: 'Continue for 3+ terms',
      description: 'Kids look forward to their weekly club',
    },
  ];

  const testimonials = [
    {
      name: 'Elena M.',
      role: 'Parent of Lucas (age 9)',
      ageGroup: '7-9',
      avatarColor: '#FF5A36',
      quote:
        'Lucas used to spend hours just passively consuming tablet games. Now he excitedly explains coordinate axes to his sister and built a full platformer for her birthday. His screen time finally feels constructive.',
      highlight: 'Built a custom birthday platformer',
    },
    {
      name: 'Marcus K.',
      role: 'Parent of Maya (age 11)',
      ageGroup: '10-12',
      avatarColor: '#7B61FF',
      quote:
        'The coach doesn’t just hand over answers. When Maya’s game loop crashed, her mentor turned it into a team detective hunt. Maya’s problem-solving confidence at school visibly increased.',
      highlight: 'Turned bugs into confidence',
    },
    {
      name: 'Priya R.',
      role: 'Parent of Aarav (age 8)',
      ageGroup: '7-9',
      avatarColor: '#FF5A36',
      quote:
        'Zero dry slides or boring lectures. Aarav counts down the days until Tuesday after-school club. He loves texting his playable game link to his grandparents so they can play along on FaceTime.',
      highlight: 'Shares games with grandparents',
    },
    {
      name: 'David T.',
      role: 'Parent of Sam (age 13)',
      ageGroup: '13-14',
      avatarColor: '#7B61FF',
      quote:
        'Sam started in the beginner visual block track and naturally graduated to Python and Web apps. Having an encouraging mentor who takes his questions seriously makes all the difference.',
      highlight: 'Graduated to Python & Web apps',
    },
  ];

  const filtered =
    activeTab === 'all'
      ? testimonials.slice(0, 3)
      : testimonials.filter((t) => t.ageGroup === activeTab);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#7B61FF] text-[#FFF8EE] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFF8EE] border-2 border-[#1D1A2F] px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#1D1A2F] mb-4">
            <Heart className="w-4 h-4 text-[#FF5A36] fill-[#FF5A36]" />
            <span className="font-display font-bold text-xs sm:text-sm text-[#1D1A2F] uppercase tracking-wider">
              Real families, real growth
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Loved by kids, trusted by parents
          </h2>
          <p className="text-white text-base sm:text-xl leading-relaxed font-semibold max-w-2xl mx-auto">
            Here is what happens when coding feels like creative play instead of
            another chore.
          </p>
        </div>

        {/* 3 Key Numbers Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((st, i) => (
            <div
              key={st.label}
              className={`chunky-card bg-[#FFF8EE] text-[#1D1A2F] p-6 sm:p-8 text-center ${
                i === 0 ? '-rotate-1' : i === 2 ? 'rotate-1' : ''
              }`}
            >
              <div className="font-display font-black text-4xl sm:text-5xl text-[#FF5A36] mb-2 tracking-tight">
                {st.value}
              </div>
              <div className="font-display font-bold text-lg sm:text-xl text-[#1D1A2F] mb-1">
                {st.label}
              </div>
              <p className="text-sm text-[#1D1A2F] font-bold">{st.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <span className="text-xs sm:text-sm font-display font-bold text-white mr-2">
            Filter by age:
          </span>
          {[
            { id: 'all', label: 'All Ages' },
            { id: '7-9', label: 'Ages 7–9' },
            { id: '10-12', label: 'Ages 10–12' },
            { id: '13-14', label: 'Ages 13–14' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-display font-bold border-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#FF5A36] text-white border-[#1D1A2F] shadow-[3px_3px_0px_#1D1A2F]'
                  : 'bg-white/25 text-white border-white/60 hover:bg-white/35 shadow-[1px_1px_0px_rgba(0,0,0,0.2)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Cards (Chunky Card Stack on Cream) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((t, idx) => (
            <div
              key={t.name}
              className={`chunky-card chunky-card-interactive bg-[#FFF8EE] text-[#1D1A2F] p-6 sm:p-7 flex flex-col justify-between ${
                idx === 1 ? '-rotate-1' : ''
              }`}
            >
              <div>
                {/* Star rating & quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#FF5A36]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#7B61FF]/40" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-[#1D1A2F] text-base leading-relaxed mb-6 font-medium">
                  “{t.quote}”
                </p>
              </div>

              <div>
                {/* Highlight chip */}
                <div className="bg-[#FFE9D2] border-2 border-[#1D1A2F] rounded-xl px-3 py-1.5 text-xs font-bold text-[#1D1A2F] flex items-center gap-1.5 mb-4 shadow-[1px_1px_0px_#1D1A2F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A36] shrink-0" />
                  <span>{t.highlight}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#1D1A2F]/10">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-[#1D1A2F] flex items-center justify-center font-display font-bold text-sm text-[#FFF8EE] shadow-[1px_1px_0px_#1D1A2F]"
                    style={{ backgroundColor: t.avatarColor }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#1D1A2F]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#1D1A2F] font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
