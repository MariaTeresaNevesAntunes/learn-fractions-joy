import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSensePlaceholderProps = {
  title?: string;
  description?: string;
  compact?: boolean;
  slot?: string;
};

const AdSensePlaceholder = ({
  title = "Espaço publicitário",
  description = "Área reservada para um anúncio responsivo, sem interromper o conteúdo educativo.",
  compact = false,
  slot,
}: AdSensePlaceholderProps) => {
  const adRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!slot) return;

    const renderAd = () => {
      if (!adRef.current || !window.adsbygoogle) return;

      try {
        window.adsbygoogle.push({});
      } catch {
        return;
      }
    };

    window.addEventListener("mtna-adsense-ready", renderAd);
    renderAd();

    return () => window.removeEventListener("mtna-adsense-ready", renderAd);
  }, [slot]);

  if (slot) {
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
  }

  return (
    <div
      className={
        compact
          ? "rounded-2xl border border-dashed border-primary/30 bg-gradient-to-r from-primary/5 via-background to-secondary/5 p-4 text-center"
          : "rounded-3xl border border-dashed border-primary/30 bg-gradient-to-r from-primary/5 via-background to-secondary/5 p-6 md:p-8 text-center shadow-sm"
      }
      aria-label={title}
    >
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        Publicidade
      </div>
      <h3 className="mt-3 text-lg font-display font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default AdSensePlaceholder;
