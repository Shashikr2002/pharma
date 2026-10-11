interface PharmaDecorProps {
  variant?: 'capsules' | 'molecules' | 'pills' | 'dna';
  opacity?: number;
  className?: string;
}

export function PharmaPattern({ variant = 'capsules', opacity = 0.06, className = '' }: PharmaDecorProps) {
  const patterns: Record<string, React.ReactElement> = {
    capsules: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="capsule-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="30" y="20" width="60" height="28" rx="14" />
              <line x1="60" y1="20" x2="60" y2="48" />
              <rect x="10" y="75" width="45" height="22" rx="11" transform="rotate(-25 32 86)" />
              <line x1="32" y1="74" x2="32" y2="98" transform="rotate(-25 32 86)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#capsule-pattern)" />
      </svg>
    ),
    molecules: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="molecule-pattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="30" cy="30" r="8" />
              <circle cx="80" cy="50" r="6" />
              <circle cx="50" cy="90" r="7" />
              <circle cx="110" cy="100" r="5" />
              <circle cx="100" cy="20" r="5" />
              <line x1="30" y1="30" x2="80" y2="50" />
              <line x1="80" y1="50" x2="50" y2="90" />
              <line x1="50" y1="90" x2="110" y2="100" />
              <line x1="80" y1="50" x2="100" y2="20" />
              <line x1="30" y1="30" x2="50" y2="90" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#molecule-pattern)" />
      </svg>
    ),
    pills: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pills-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(-10)">
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="25" cy="25" r="12" />
              <line x1="13" y1="25" x2="37" y2="25" />
              <circle cx="70" cy="60" r="10" />
              <line x1="60" y1="60" x2="80" y2="60" />
              <circle cx="45" cy="85" r="8" />
              <line x1="37" y1="85" x2="53" y2="85" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pills-pattern)" />
      </svg>
    ),
    dna: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dna-pattern" x="0" y="0" width="80" height="160" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 20 0 Q 60 20 20 40 Q 60 60 20 80 Q 60 100 20 120 Q 60 140 20 160" />
              <path d="M 60 0 Q 20 20 60 40 Q 20 60 60 80 Q 20 100 60 120 Q 20 140 60 160" />
              <line x1="20" y1="0" x2="60" y2="0" />
              <line x1="20" y1="40" x2="60" y2="40" />
              <line x1="20" y1="80" x2="60" y2="80" />
              <line x1="20" y1="120" x2="60" y2="120" />
              <line x1="20" y1="160" x2="60" y2="160" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dna-pattern)" />
      </svg>
    ),
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity, color: 'inherit' }}
      aria-hidden="true"
    >
      {patterns[variant]}
    </div>
  );
}

export function FloatingCapsules({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg className="absolute top-10 right-[5%] w-20 h-20 opacity-[0.07]" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="10" y="25" width="60" height="30" rx="15" />
        <line x1="40" y1="25" x2="40" y2="55" />
      </svg>
      <svg className="absolute top-1/3 left-[8%] w-16 h-16 opacity-[0.05] rotate-[20deg]" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="8" y="18" width="44" height="24" rx="12" />
        <line x1="30" y1="18" x2="30" y2="42" />
      </svg>
      <svg className="absolute bottom-20 right-[12%] w-14 h-14 opacity-[0.06] -rotate-[15deg]" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="6" y="16" width="44" height="24" rx="12" />
        <line x1="28" y1="16" x2="28" y2="40" />
      </svg>
      <svg className="absolute bottom-1/3 left-[15%] w-12 h-12 opacity-[0.04] rotate-[35deg]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="5" y="14" width="38" height="20" rx="10" />
        <line x1="24" y1="14" x2="24" y2="34" />
      </svg>
    </div>
  );
}

export function FloatingMolecules({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg className="absolute top-12 right-[10%] w-28 h-28 opacity-[0.08]" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="30" cy="30" r="8" />
        <circle cx="75" cy="45" r="6" />
        <circle cx="50" cy="85" r="7" />
        <circle cx="95" cy="80" r="5" />
        <line x1="30" y1="30" x2="75" y2="45" />
        <line x1="75" y1="45" x2="50" y2="85" />
        <line x1="50" y1="85" x2="95" y2="80" />
        <line x1="75" y1="45" x2="95" y2="80" />
      </svg>
      <svg className="absolute bottom-16 left-[8%] w-24 h-24 opacity-[0.06]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="25" cy="25" r="7" />
        <circle cx="65" cy="35" r="5" />
        <circle cx="40" cy="70" r="6" />
        <circle cx="80" cy="75" r="5" />
        <line x1="25" y1="25" x2="65" y2="35" />
        <line x1="65" y1="35" x2="40" y2="70" />
        <line x1="40" y1="70" x2="80" y2="75" />
        <line x1="25" y1="25" x2="40" y2="70" />
      </svg>
    </div>
  );
}
