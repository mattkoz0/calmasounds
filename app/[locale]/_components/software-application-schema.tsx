import React from "react";

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  applicationCategory?: string;
}

export default function SoftwareApplicationSchema({
  name,
  description,
  applicationCategory = "HealthApplication",
}: SoftwareApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
