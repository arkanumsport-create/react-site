import { useId } from 'react';

export function VitaNexLogo({ size = 62, className = '' }) {
  const uid = useId().replace(/:/g, '');

  return (
    <div
      className={`vitanex-vector-logo ${className}`}
      style={{ width: size, height: size }}
      aria-label="VitaNeX Digital Studio"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`cyanGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="55%" stopColor="#00c8ff" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id={`purpleGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <linearGradient id={`ringGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>

          <radialGradient id={`bgCore-${uid}`} cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#131936" />
            <stop offset="75%" stopColor="#070916" />
            <stop offset="100%" stopColor="#04050c" />
          </radialGradient>

          <filter id={`neonGlow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Deep Dark Circle Core */}
        <circle cx="100" cy="100" r="94" fill={`url(#bgCore-${uid})`} />

        {/* Rotating Outer Metallic + Neon Ring */}
        <g className="logo-spin-ring">
          <circle
            cx="100"
            cy="100"
            r="93"
            stroke={`url(#ringGrad-${uid})`}
            strokeWidth="5"
          />
          <circle
            cx="100"
            cy="100"
            r="86"
            stroke={`url(#ringGrad-${uid})`}
            strokeWidth="2.2"
            strokeDasharray="42 18"
            opacity="0.9"
          />
          {/* Glowing Orbit Dots on the spinning ring */}
          <circle cx="100" cy="7" r="4.5" fill="#00f0ff" />
          <circle cx="100" cy="193" r="4.5" fill="#ec4899" />
        </g>

        {/* Inner Static Subtle Ring */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="rgba(0, 240, 255, 0.25)"
          strokeWidth="1.2"
        />

        {/* Orbital Swoosh around VX */}
        <ellipse
          cx="100"
          cy="74"
          rx="62"
          ry="18"
          transform="rotate(-14 100 74)"
          stroke={`url(#ringGrad-${uid})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.88"
        />

        {/* 3D Faceted 'V' & 'X' Monogram */}
        <g filter={`url(#neonGlow-${uid})`}>
          {/* Left V Wing (Neon Cyan) */}
          <polygon
            points="44,38 64,38 88,96 72,96"
            fill={`url(#cyanGrad-${uid})`}
          />
          {/* Center V-N Connector */}
          <polygon
            points="72,96 88,96 104,50 90,50"
            fill="#38bdf8"
          />
          {/* Right X Diagonal (Cyan to Purple) */}
          <polygon
            points="90,50 107,50 144,98 126,98"
            fill={`url(#purpleGrad-${uid})`}
          />
          {/* Crossing X Bar (Neon Magenta/Purple) */}
          <polygon
            points="138,38 156,38 112,98 96,98"
            fill={`url(#purpleGrad-${uid})`}
          />
        </g>

        {/* Crisp Brand Name 'VitaNeX' inside the circle */}
        <text
          x="100"
          y="133"
          textAnchor="middle"
          fontFamily="'Unbounded', 'Inter', sans-serif"
          fontWeight="900"
          fontSize="28"
          letterSpacing="0.5"
          fill="#ffffff"
        >
          Vita
          <tspan fill="#00f0ff">Ne</tspan>
          <tspan fill="#d946ef">X</tspan>
        </text>

        {/* Crisp Subtitle 'DIGITAL STUDIO' inside the circle */}
        <text
          x="100"
          y="153"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="11.5"
          letterSpacing="3.2"
          fill="#00f0ff"
        >
          DIGITAL STUDIO
        </text>

        {/* Bottom Neon Accent Line inside circle */}
        <line
          x1="56"
          y1="165"
          x2="144"
          y2="165"
          stroke={`url(#ringGrad-${uid})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function WhatsAppIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`wa-svg-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        d="M17.47 14.38C17.17 14.23 15.7 13.5 15.42 13.4C15.15 13.3 14.95 13.25 14.75 13.55C14.55 13.85 13.97 14.53 13.8 14.73C13.62 14.93 13.45 14.95 13.15 14.8C12.85 14.65 11.88 14.33 10.74 13.31C9.85 12.52 9.25 11.54 9.07 11.24C8.9 10.94 9.05 10.78 9.2 10.63C9.34 10.5 9.5 10.28 9.65 10.1C9.8 9.93 9.85 9.8 9.95 9.6C10.05 9.4 10 9.23 9.92 9.08C9.85 8.93 9.25 7.45 9 6.85C8.76 6.27 8.51 6.35 8.32 6.34H7.75C7.55 6.34 7.22 6.41 6.95 6.71C6.67 7.01 5.9 7.74 5.9 9.21C5.9 10.68 6.97 12.11 7.12 12.31C7.27 12.51 9.22 15.52 12.21 16.81C12.92 17.12 13.48 17.3 13.91 17.44C14.63 17.67 15.28 17.64 15.8 17.56C16.38 17.47 17.57 16.84 17.82 16.14C18.07 15.44 18.07 14.84 17.99 14.71C17.92 14.58 17.72 14.51 17.47 14.38Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className = '' }) {
  const uid = useId().replace(/:/g, '');
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`insta-svg-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`igGrad-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill={`url(#igGrad-${uid})`} />
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4"
        stroke="#ffffff"
        strokeWidth="1.6"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="3.6"
        stroke="#ffffff"
        strokeWidth="1.6"
        fill="none"
      />
      <circle cx="16.4" cy="7.6" r="1.1" fill="#ffffff" />
    </svg>
  );
}
