import Document, { Html, Head, Main, NextScript } from "next/document";
import { SITE } from "../lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}#localbusiness`,
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  telephone: `+${SITE.whatsappNumber}`,
  email: SITE.email,
  image: `${SITE.url}/og-default.svg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    addressCountry: SITE.address.country,
  },
  areaServed: [
    { "@type": "City", name: "São Bernardo do Campo" },
    { "@type": "City", name: "Santo André" },
    { "@type": "City", name: "São Caetano do Sul" },
    { "@type": "City", name: "Diadema" },
    { "@type": "City", name: "Mauá" },
    { "@type": "City", name: "Ribeirão Pires" },
    { "@type": "City", name: "Rio Grande da Serra" },
    { "@type": "City", name: "São Paulo" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [SITE.social.linkedin, SITE.social.facebook].filter((u) => u && u !== "#"),
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0F141A" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate" hrefLang="pt-BR" href={SITE.url} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
