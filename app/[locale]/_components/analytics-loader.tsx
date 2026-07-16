"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_EVENT = "calma:analytics-consent";

export default function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const initialCheck = window.setTimeout(() => {
      setEnabled(localStorage.getItem("cookie-consent") === "accepted");
    }, 0);

    const handleConsent = (event: Event) => {
      const consentEvent = event as CustomEvent<{ accepted: boolean }>;
      setEnabled(consentEvent.detail.accepted);
    };

    window.addEventListener(CONSENT_EVENT, handleConsent);
    return () => {
      window.clearTimeout(initialCheck);
      window.removeEventListener(CONSENT_EVENT, handleConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DKG7861ZMZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('config', 'G-DKG7861ZMZ');
        `}
      </Script>
    </>
  );
}
