import logoAsset from "@/assets/neurobyte-logo.jpg.asset.json";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="NeuroByte Society"
      className={`${className ?? ""} rounded-full object-cover ring-1 ring-white/15`}
    />
  );
}
