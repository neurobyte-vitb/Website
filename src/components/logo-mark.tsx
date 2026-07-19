export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 10 C 8 10, 8 18, 14 20 C 20 22, 22 14, 28 14" />
      <path d="M28 30 C 32 30, 32 22, 26 20 C 20 18, 18 26, 12 26" />
      <circle cx="14" cy="20" r="1.6" fill="currentColor" />
      <circle cx="26" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}
