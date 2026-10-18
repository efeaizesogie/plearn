import React from 'react';

interface SectionDividerProps {
  fillColor: string; // the color of the wave matching the incoming section
  type?: 'wave' | 'rounded' | 'slant';
  flip?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  fillColor,
  type = 'wave',
  flip = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        flip ? 'rotate-180 -mt-1' : '-mb-1'
      }`}
      aria-hidden="true"
    >
      {type === 'wave' && (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 md:h-20"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {type === 'rounded' && (
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 md:h-16"
        >
          <path
            d="M0,0 C300,70 900,70 1200,0 L1200,80 L0,80 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {type === 'slant' && (
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 md:h-14"
        >
          <polygon points="0,0 1200,60 1200,80 0,80" fill={fillColor} />
        </svg>
      )}
    </div>
  );
};
