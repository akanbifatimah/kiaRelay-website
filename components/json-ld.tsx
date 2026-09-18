export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is data, not executable code — a native <script> tag is the
      // correct primitive here, not next/script. Escape `<` so no payload
      // value can break out of the script context.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
