export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt="NeuroByte Society"
      className={`${className ?? ""} rounded-full object-cover ring-1 ring-white/15`}
    />
  );
}
