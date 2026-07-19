export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="oklch(0.82 0.18 200)" />
          <stop offset="100%" stopColor="oklch(0.7 0.25 310)" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" stroke="url(#lg)" strokeWidth="1" opacity="0.4" />
      <path
        d="M8 14 Q 20 6, 32 14 M8 26 Q 20 34, 32 26"
        stroke="url(#lg)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="12" y1="14" x2="12" y2="26" stroke="url(#lg)" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="10" x2="20" y2="30" stroke="url(#lg)" strokeWidth="1" opacity="0.5" />
      <line x1="28" y1="14" x2="28" y2="26" stroke="url(#lg)" strokeWidth="1" opacity="0.5" />
      <circle cx="20" cy="20" r="2.2" fill="url(#lg)" />
    </svg>
  );
}
