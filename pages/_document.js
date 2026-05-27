import Document, { Html, Head, Main, NextScript } from "next/document";
import { SITE } from "../lib/site";

// Favicon = brasão isolado do lockup oficial (engrenagem + "M" + maçarico).
// Mantém o mesmo asset Cloudinary usado pelo <LogoMark variant="icon" />
// (components/brand/LogoMark.jsx), apenas reescalado para cada tamanho que o
// navegador pode precisar (toolbar, apple-touch, PWA). Se o arquivo de origem
// mudar, alterar nos dois lugares.
//   e_background_removal         alpha real (sem fundo branco vazando na
//                                toolbar escura do navegador / dock iOS).
//   e_trim:10                    remove ~40% de padding transparente da arte
//                                original; crítico no favicon 16/32px, onde
//                                sem trim o brasão ficaria minúsculo dentro
//                                do quadrado e ilegível na toolbar.
//   c_pad,b_transparent,ar_1:1   garante aspect 1:1 após o trim — favicon
//                                precisa ser quadrado.
//   c_scale,w_{px},h_{px}        reescala para o tamanho exato pedido pelo
//                                <link rel="icon" sizes="..." />.
//   f_png                        PNG com transparência (compatibilidade
//                                ampla com favicons).
const FAVICON_BASE = "https://res.cloudinary.com/aguadeira/image/upload";
const FAVICON_PATH =
  "v1779822551/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/A4a09baf91e9e49ec9cffd999af15674c2_a8fiu5.png";
const FAVICON_TRANSFORMS =
  "e_background_removal/e_trim:10/c_pad,b_transparent,ar_1:1/f_png";

const faviconUrl = (px) =>
  `${FAVICON_BASE}/${FAVICON_TRANSFORMS}/c_scale,w_${px},h_${px}/${FAVICON_PATH}`;

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
          {/* Favicons (brasão MetalPev em PNG, gerado via Cloudinary). Várias
              resoluções para cobrir toolbar do navegador, atalho iOS/Android
              e instalação como PWA. */}
          <link rel="icon" type="image/png" sizes="32x32" href={faviconUrl(32)} />
          <link rel="icon" type="image/png" sizes="16x16" href={faviconUrl(16)} />
          <link rel="apple-touch-icon" sizes="180x180" href={faviconUrl(180)} />
          <link rel="icon" type="image/png" sizes="192x192" href={faviconUrl(192)} />
          <link rel="icon" type="image/png" sizes="512x512" href={faviconUrl(512)} />
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
