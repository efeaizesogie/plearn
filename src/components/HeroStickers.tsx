import React from 'react';
import { motion } from 'motion/react';

interface StickerItem {
  id: string;
  name: string;
  x: string; // desktop positioning
  y: string;
  mobileX: string;
  mobileY: string;
  rotate: number;
  renderSvg: () => React.ReactNode;
}

export const HeroStickers: React.FC = () => {
  const stickers: StickerItem[] = [
    {
      id: 'controller',
      name: 'Game Controller',
      x: '5%',
      y: '10%',
      mobileX: '2%',
      mobileY: '4%',
      rotate: -12,
      renderSvg: () => (
        <svg viewBox="0 0 100 80" className="w-20 h-16 sm:w-24 sm:h-20 drop-shadow-md">
          {/* White sticker border */}
          <rect
            x="8"
            y="12"
            width="84"
            height="56"
            rx="24"
            fill="#FFE9D2"
            stroke="#1D1A2F"
            strokeWidth="3.5"
          />
          {/* D-Pad */}
          <path
            d="M 28 28 h 8 v 6 h 6 v 8 h -6 v 6 h -8 v -6 h -6 v -8 h 6 Z"
            fill="#1D1A2F"
          />
          {/* Action buttons */}
          <circle cx="68" cy="34" r="5" fill="#FF5A36" stroke="#1D1A2F" strokeWidth="2" />
          <circle cx="80" cy="44" r="5" fill="#7B61FF" stroke="#1D1A2F" strokeWidth="2" />
          <circle cx="58" cy="46" r="4" fill="#FF5A36" opacity="0.8" />
          {/* Middle pill */}
          <rect x="44" y="38" width="12" height="4" rx="2" fill="#1D1A2F" />
        </svg>
      ),
    },
    {
      id: 'brackets',
      name: 'Code Brackets',
      x: '86%',
      y: '6%',
      mobileX: '78%',
      mobileY: '2%',
      rotate: 14,
      renderSvg: () => (
        <div className="bg-[#7B61FF] text-[#FFF8EE] font-mono text-2xl sm:text-3xl font-black px-4 py-2 rounded-2xl border-[3.5px] border-[#1D1A2F] shadow-[3px_3px_0px_#1D1A2F] flex items-center gap-1 select-none">
          <span>&#123;</span>
          <span className="text-[#FFE9D2] text-xl font-bold">code</span>
          <span>&#125;</span>
        </div>
      ),
    },
    {
      id: 'rocket',
      name: 'Pixel Rocket',
      x: '3%',
      y: '62%',
      mobileX: '4%',
      mobileY: '76%',
      rotate: 18,
      renderSvg: () => (
        <svg viewBox="0 0 90 90" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-md">
          {/* Flame */}
          <path
            d="M 32 64 Q 24 78 30 84 Q 38 78 36 68 Z"
            fill="#FF5A36"
            stroke="#1D1A2F"
            strokeWidth="3"
          />
          <path
            d="M 30 68 Q 27 75 31 79 Q 34 75 33 70 Z"
            fill="#FFE9D2"
          />
          {/* Rocket Body */}
          <path
            d="M 28 62 C 24 40 40 18 56 16 C 68 32 58 56 42 66 Z"
            fill="#FFF8EE"
            stroke="#1D1A2F"
            strokeWidth="3.5"
          />
          {/* Fins */}
          <path
            d="M 24 50 L 14 58 L 26 62 Z"
            fill="#7B61FF"
            stroke="#1D1A2F"
            strokeWidth="3"
          />
          <path
            d="M 44 32 L 56 22 L 50 38 Z"
            fill="#7B61FF"
            stroke="#1D1A2F"
            strokeWidth="3"
          />
          {/* Porthole */}
          <circle cx="44" cy="38" r="8" fill="#FFE9D2" stroke="#1D1A2F" strokeWidth="3" />
          <circle cx="42" cy="36" r="3" fill="#7B61FF" />
        </svg>
      ),
    },
    {
      id: 'star-badge',
      name: 'Level Up Star',
      x: '88%',
      y: '60%',
      mobileX: '80%',
      mobileY: '72%',
      rotate: -15,
      renderSvg: () => (
        <div className="bg-[#FF5A36] text-[#FFF8EE] font-display font-bold px-3 py-2 rounded-2xl border-[3.5px] border-[#1D1A2F] shadow-[3px_3px_0px_#1D1A2F] flex items-center gap-1.5 select-none text-sm sm:text-base">
          <svg viewBox="0 0 24 24" fill="#FFE9D2" className="w-5 h-5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>LVL +1</span>
        </div>
      ),
    },
    {
      id: 'mascot-mini',
      name: 'Pip Mascot',
      x: '14%',
      y: '88%',
      mobileX: '18%',
      mobileY: '88%',
      rotate: 8,
      renderSvg: () => (
        <div className="bg-[#FFE9D2] border-[3.5px] border-[#1D1A2F] p-2 rounded-2xl shadow-[3px_3px_0px_#1D1A2F] flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#FF5A36] border-2 border-[#1D1A2F] flex items-center justify-center text-xs text-white font-bold">
            Hi!
          </div>
          <span className="font-display font-semibold text-xs text-[#1D1A2F] hidden sm:inline">
            Drag me!
          </span>
        </div>
      ),
    },
    {
      id: 'bug-hunter',
      name: 'Bug Debugger',
      x: '76%',
      y: '88%',
      mobileX: '68%',
      mobileY: '88%',
      rotate: -10,
      renderSvg: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md">
          {/* Bug Legs */}
          <path d="M 22 34 L 10 28" stroke="#1D1A2F" strokeWidth="3" strokeLinecap="round" />
          <path d="M 20 44 L 8 44" stroke="#1D1A2F" strokeWidth="3" strokeLinecap="round" />
          <path d="M 22 54 L 10 60" stroke="#1D1A2F" strokeWidth="3" strokeLinecap="round" />
          <path d="M 58 34 L 70 28" stroke="#1D1A2F" strokeWidth="3" strokeLinecap="round" />
          <path d="M 60 44 L 72 44" stroke="#1D1A2F" strokeWidth="3" strokeLinecap="round" />
          <path d="M 58 54 L 70 60" stroke="#1D1A2F" strokeWidth="3" strokeLinecap="round" />
          {/* Bug Body */}
          <ellipse
            cx="40"
            cy="46"
            rx="20"
            ry="22"
            fill="#7B61FF"
            stroke="#1D1A2F"
            strokeWidth="3.5"
          />
          {/* Head */}
          <circle
            cx="40"
            cy="24"
            r="12"
            fill="#FF5A36"
            stroke="#1D1A2F"
            strokeWidth="3.5"
          />
          {/* Antennae */}
          <path d="M 34 16 Q 28 8 22 10" stroke="#1D1A2F" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 46 16 Q 52 8 58 10" stroke="#1D1A2F" strokeWidth="2.5" strokeLinecap="round" />
          {/* Friendly Eyes */}
          <circle cx="36" cy="22" r="3" fill="#FFF8EE" />
          <circle cx="36" cy="22" r="1.5" fill="#1D1A2F" />
          <circle cx="44" cy="22" r="3" fill="#FFF8EE" />
          <circle cx="44" cy="22" r="1.5" fill="#1D1A2F" />
          {/* Back spots */}
          <circle cx="35" cy="42" r="4" fill="#FFE9D2" />
          <circle cx="45" cy="50" r="5" fill="#FFE9D2" />
        </svg>
      ),
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-visible -z-0 md:z-10"
    >
      {stickers.map((stk) => (
        <motion.div
          key={stk.id}
          drag
          dragSnapToOrigin
          dragElastic={0.25}
          whileDrag={{ scale: 1.15, cursor: 'grabbing', zIndex: 50 }}
          whileHover={{ scale: 1.08 }}
          initial={{ rotate: stk.rotate, opacity: 0, scale: 0.8 }}
          animate={{ rotate: stk.rotate, opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18,
            mass: 0.8,
          }}
          className="absolute cursor-grab pointer-events-auto touch-none select-none transition-shadow active:shadow-lg"
          style={{
            left: stk.x,
            top: stk.y,
          }}
          title={`${stk.name} - drag me!`}
        >
          {stk.renderSvg()}
        </motion.div>
      ))}
    </div>
  );
};
