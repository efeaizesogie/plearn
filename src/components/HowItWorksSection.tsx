import React from 'react';
import { Compass, Sparkles, Terminal, Trophy } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Pick a Quest',
      subtitle: 'Ages 7–14',
      badge: 'Step 1',
      sentence:
        'Choose a course track your child is excited about — from retro platformers and animated stories to robotics and multiplayer mods.',
      color: '#FF5A36',
      icon: Compass,
      image: '/assets/how-it-works-01.jpg',
      imageAlt: 'Young student picking a quest and coding on a laptop',
    },
    {
      step: '02',
      title: 'Tinker with a Coach',
      subtitle: 'Live Small Squads',
      badge: 'Step 2',
      sentence:
        'Meet once a week in an intimate squad of 4 with a friendly live mentor who helps unstick bugs and cheer every step.',
      color: '#7B61FF',
      icon: Terminal,
      image: '/assets/how-it-works-2.jpg',
      imageAlt: 'Squad of kids tinkering collaboratively with live coach',
    },
    {
      step: '03',
      title: 'Show and Celebrate',
      subtitle: 'Every 4 Weeks',
      badge: 'Step 3',
      sentence:
        'Publish a real playable web game every 4 weeks to share with family, friends, and the entire plearn community.',
      color: '#FF5A36',
      icon: Trophy,
      image: '/assets/how-it-works-03.jpg',
      imageAlt: 'Student proudly celebrating finished playable project with family',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FFF8EE] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1D1A2F] tracking-tight mb-4">
            How plearn works
          </h2>
          <p className="text-[#1D1A2F] text-base sm:text-xl leading-relaxed font-semibold">
            Designed around curiosity rather than tests. Kids learn by making,
            fail safely with a guide, and build pride with every finished game.
          </p>
        </div>

        {/* Steps Grid with Dotted Connector Line */}
        <div className="relative">
          {/* Dotted Connection Line across cards (Desktop) */}
          <div
            className="hidden md:block absolute top-[110px] left-[15%] right-[15%] h-1 border-t-4 border-dashed border-[#1D1A2F]/30 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const rotation = index === 0 ? '-rotate-1' : index === 2 ? 'rotate-1' : 'rotate-0';
              return (
                <div
                  key={item.step}
                  className={`chunky-card chunky-card-interactive bg-[#FFF8EE] p-6 sm:p-7 flex flex-col justify-between ${rotation}`}
                >
                  <div>
                    {/* Step Number Badge & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="w-12 h-12 rounded-2xl border-2 border-[#1D1A2F] flex items-center justify-center font-display font-bold text-xl text-[#FFF8EE] shadow-[2px_2px_0px_#1D1A2F]"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.step}
                      </span>
                      <span className="bg-[#FFE9D2] border-2 border-[#1D1A2F] px-3 py-1 rounded-full text-xs font-display font-bold text-[#1D1A2F] shadow-[1px_1px_0px_#1D1A2F]">
                        {item.subtitle}
                      </span>
                    </div>

                    {/* Image Container with Chunky Frame */}
                    <div className="mb-6 rounded-2xl bg-[#FFE9D2] border-2 border-[#1D1A2F] overflow-hidden aspect-[16/11] shadow-[2px_2px_0px_#1D1A2F] group">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                        draggable={false}
                      />
                    </div>

                    {/* Step Title & Icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-[#FF5A36]" strokeWidth={2.5} />
                      <h3 className="font-display font-bold text-2xl text-[#1D1A2F]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Step Sentence */}
                    <p className="text-[#1D1A2F] text-base sm:text-lg leading-relaxed font-medium">
                      {item.sentence}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1D1A2F]/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1D1A2F] uppercase tracking-wider font-display">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-[#FF5A36] font-display">
                      Small squad of 4
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
