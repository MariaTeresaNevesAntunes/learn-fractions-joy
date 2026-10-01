import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "mtna-ads-consent";
const ADSENSE_CLIENT = "ca-pub-8664195567929159";

const loadAdSense = () => {
  const existingScript = document.querySelector(
    `script[src*="adsbygoogle.js"][src*="${ADSENSE_CLIENT}"]`,
  );

  if (existingScript) {
    window.dispatchEvent(new Event("mtna-adsense-ready"));
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.crossOrigin = "anonymous";
  script.addEventListener("load", () => {
    window.dispatchEvent(new Event("mtna-adsense-ready"));
  });
  document.head.appendChild(script);
};

const CookieConsent = () => {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    setVisible(consent === null);

    if (consent === "accepted") loadAdSense();
  }, []);

  const chooseConsent = (value: "accepted" | "rejected") => {
    const previousConsent = window.localStorage.getItem(CONSENT_KEY);
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);

    if (value === "accepted") loadAdSense();
    else if (previousConsent === "accepted") window.location.reload();
  };

  if (visible === null) return null;

  if (!visible) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="fixed bottom-4 left-4 z-[100] shadow-lg"
        onClick={() => setVisible(true)}
      >
        <Cookie className="mr-2 h-4 w-4" />
        Preferências de privacidade
      </Button>
    );
  }

  return (
    <aside
      role="region"
      aria-label="Preferências de cookies"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-xl border bg-card p-5 shadow-2xl"
    >
      <h2 className="font-display text-lg font-bold">Privacidade e cookies</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Guardamos o seu progresso neste dispositivo. Se aceitar, carregamos o
        Google AdSense para apresentar publicidade. Pode alterar esta escolha
        através das preferências de privacidade. Consulte a{" "}
        <Link className="text-primary underline" to="/cookies">
          Política de Cookies
        </Link>{" "}
        e a{" "}
        <a
          className="text-primary underline"
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privacidade do Google
        </a>
        .
      </p>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <Button variant="outline" onClick={() => chooseConsent("rejected")}>
          Recusar publicidade
        </Button>
        <Button onClick={() => chooseConsent("accepted")}>
          Aceitar publicidade
        </Button>
      </div>
    </aside>
  );
};

export default CookieConsent;
