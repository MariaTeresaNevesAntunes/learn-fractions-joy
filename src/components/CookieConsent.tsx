import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "mtna-ads-consent";
const ADSENSE_CLIENT = "ca-pub-8664195567929159";

const loadAdSense = () => {
  const existingScript = document.querySelector(
    'script[data-mtna-adsense="true"]',
  );

  if (existingScript) {
    window.dispatchEvent(new Event("mtna-adsense-ready"));
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.crossOrigin = "anonymous";
  script.dataset.mtnaAdsense = "true";
  script.addEventListener("load", () => {
    window.dispatchEvent(new Event("mtna-adsense-ready"));
  });
  document.head.appendChild(script);
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    setVisible(consent === null);

    if (consent === "accepted") loadAdSense();
  }, []);

  const chooseConsent = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);

    if (value === "accepted") loadAdSense();
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Preferências de cookies"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-xl border bg-card p-5 shadow-2xl"
    >
      <h2 className="font-display text-lg font-bold">Privacidade e cookies</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Usamos armazenamento local para guardar o seu progresso. Com a sua
        autorização, também podemos carregar o Google AdSense para apresentar
        publicidade. Saiba mais na{" "}
        <Link className="text-primary underline" to="/cookies">
          Política de Cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <Button variant="outline" onClick={() => chooseConsent("rejected")}>
          Recusar cookies de publicidade
        </Button>
        <Button onClick={() => chooseConsent("accepted")}>
          Aceitar cookies de publicidade
        </Button>
      </div>
    </aside>
  );
};

export default CookieConsent;
