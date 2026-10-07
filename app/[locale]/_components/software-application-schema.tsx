import { useLocale } from "next-intl";
import { getSoftwareApplicationSchema } from "@/app/utils/product";

export default function SoftwareApplicationSchema({
  applicationCategory = "HealthApplication",
}: { applicationCategory?: string }) {
  const locale = useLocale();
  const schema = getSoftwareApplicationSchema(locale, applicationCategory);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
