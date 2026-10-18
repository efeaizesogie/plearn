import React from 'react';

export type MascotPose = 'hello' | 'thinking' | 'celebrating' | 'head';

interface MascotProps {
  pose?: MascotPose;
  size?: number | string;
  className?: string;
  interactive?: boolean;
}

export const Mascot: React.FC<MascotProps> = ({
  pose = 'hello',
  size = 120,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center select-none ${className}`}
      aria-label={`plearn mascot in ${pose} pose`}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-sm"
      >
        {/* Antenna */}
        <path
          d="M 80 48 Q 80 28 88 18"
          stroke="#1D1A2F"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle
          cx="90"
          cy="16"
          r="8"
          fill="#FF5A36"
          stroke="#1D1A2F"
          strokeWidth="3"
        />
        <circle cx="88" cy="14" r="2.5" fill="#FFF8EE" />

        {/* Head / Body Base */}
        <rect
          x="34"
          y="42"
          width="92"
          height="82"
          rx="32"
          fill="#FFE9D2"
          stroke="#1D1A2F"
          strokeWidth="4"
        />

        {/* Cute Ears / Side Nodes */}
        <circle
          cx="30"
          cy="82"
          r="7"
          fill="#7B61FF"
          stroke="#1D1A2F"
          strokeWidth="3.5"
        />
        <circle
          cx="130"
          cy="82"
          r="7"
          fill="#7B61FF"
          stroke="#1D1A2F"
          strokeWidth="3.5"
        />

        {/* Cheeks */}
        <circle cx="52" cy="94" r="7" fill="#FF5A36" opacity="0.6" />
        <circle cx="108" cy="94" r="7" fill="#FF5A36" opacity="0.6" />

        {/* Face Elements depending on pose */}
        {pose === 'hello' && (
          <g>
            {/* Eyes - Wide happy arcs */}
            <circle cx="58" cy="78" r="6.5" fill="#1D1A2F" />
            <circle cx="60" cy="76" r="2" fill="#FFF8EE" />
            <circle cx="102" cy="78" r="6.5" fill="#1D1A2F" />
            <circle cx="104" cy="76" r="2" fill="#FFF8EE" />

            {/* Big friendly open smile */}
            <path
              d="M 68 88 Q 80 102 92 88"
              stroke="#1D1A2F"
              strokeWidth="4"
              strokeLinecap="round"
              fill="#FF5A36"
            />

            {/* Waving Right Hand */}
            <path
              d="M 126 82 C 142 75 148 55 142 46 C 137 40 128 48 126 56"
              fill="#FFE9D2"
              stroke="#1D1A2F"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sparkle near hand */}
            <path
              d="M 148 38 L 150 32 L 152 38 L 158 40 L 152 42 L 150 48 L 148 42 L 142 40 Z"
              fill="#FF5A36"
            />
          </g>
        )}

        {pose === 'thinking' && (
          <g>
            {/* Thinking Eyes - glancing up right */}
            <circle cx="60" cy="74" r="6.5" fill="#1D1A2F" />
            <circle cx="62" cy="72" r="2" fill="#FFF8EE" />
            <circle cx="104" cy="74" r="6.5" fill="#1D1A2F" />
            <circle cx="106" cy="72" r="2" fill="#FFF8EE" />

            {/* Eyebrows questioning */}
            <path
              d="M 52 64 Q 60 62 68 66"
              stroke="#1D1A2F"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 96 66 Q 104 60 112 63"
              stroke="#1D1A2F"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Puzzled cute mouth */}
            <path
              d="M 74 92 Q 82 88 88 94"
              stroke="#1D1A2F"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Hand on chin */}
            <path
              d="M 66 114 C 70 106 74 100 80 102"
              stroke="#1D1A2F"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Floating thought bubble with curly code braces */}
            <g transform="translate(112, 10)">
              <rect
                x="0"
                y="0"
                width="34"
                height="26"
                rx="8"
                fill="#7B61FF"
                stroke="#1D1A2F"
                strokeWidth="2.5"
              />
              <text
                x="17"
                y="18"
                fill="#FFF8EE"
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="monospace"
              >
                &lt;/&gt;
              </text>
            </g>
          </g>
        )}

        {pose === 'celebrating' && (
          <g>
            {/* Celebrating Star Eyes */}
            <path
              d="M 58 70 L 61 76 L 67 78 L 61 80 L 58 86 L 55 80 L 49 78 L 55 76 Z"
              fill="#7B61FF"
            />
            <path
              d="M 102 70 L 105 76 L 111 78 L 105 80 L 102 86 L 99 80 L 93 78 L 99 76 Z"
              fill="#7B61FF"
            />

            {/* Big Cheerful Grin */}
            <path
              d="M 64 88 Q 80 110 96 88 Z"
              fill="#FF5A36"
              stroke="#1D1A2F"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Little tongue */}
            <path
              d="M 72 96 Q 80 106 88 96"
              fill="#FFE9D2"
              stroke="#1D1A2F"
              strokeWidth="2.5"
            />

            {/* Both arms raised in triumph */}
            <path
              d="M 38 78 Q 20 60 22 42"
              stroke="#1D1A2F"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 122 78 Q 140 60 138 42"
              stroke="#1D1A2F"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Confetti pieces */}
            <rect x="24" y="24" width="7" height="7" rx="2" fill="#FF5A36" transform="rotate(25 24 24)" />
            <rect x="132" y="22" width="7" height="7" rx="2" fill="#7B61FF" transform="rotate(-30 132 22)" />
            <circle cx="80" cy="8" r="4" fill="#FF5A36" />
            <circle cx="48" cy="22" r="3.5" fill="#7B61FF" />
          </g>
        )}

        {pose === 'head' && (
          <g>
            {/* Simple avatar face */}
            <circle cx="60" cy="78" r="6" fill="#1D1A2F" />
            <circle cx="62" cy="76" r="2" fill="#FFF8EE" />
            <circle cx="100" cy="78" r="6" fill="#1D1A2F" />
            <circle cx="102" cy="76" r="2" fill="#FFF8EE" />
            <path
              d="M 70 89 Q 80 98 90 89"
              stroke="#1D1A2F"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Belly code badge on bottom */}
        {pose !== 'head' && (
          <rect
            x="64"
            y="108"
            width="32"
            height="10"
            rx="5"
            fill="#FFF8EE"
            stroke="#1D1A2F"
            strokeWidth="2.5"
          />
        )}
      </svg>
    </div>
  );
};
