import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSensePlaceholderProps = {
  compact?: boolean;
  slot?: string;
};

const AdSensePlaceholder = ({ compact = false, slot }: AdSensePlaceholderProps) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!slot) return;

    const renderAd = () => {
      if (!adRef.current || !window.adsbygoogle) return;

      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.error("Google AdSense failed to render an ad unit.", error);
      }
    };

    window.addEventListener("mtna-adsense-ready", renderAd);
    renderAd();

    return () => window.removeEventListener("mtna-adsense-ready", renderAd);
  }, [slot]);

  if (!slot) return null;

  return (
    <div
      className={compact ? "min-h-24" : "min-h-32"}
      aria-label="Publicidade"
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8664195567929159"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSensePlaceholder;
