import React from "react";

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  applicationCategory?: string;
  ratingValue?: number;
  ratingCount?: number;
}

export default function SoftwareApplicationSchema({
  name,
  description,
  applicationCategory = "HealthApplication",
  ratingValue = 4.9,
  ratingCount = 12450,
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toString(),
      "ratingCount": ratingCount.toString()
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
