import Head from "next/head";
import { useRouter } from "next/router";
import { SITE } from "../../lib/site";

export default function Seo({
  title,
  description,
  image,
  noindex = false,
  jsonLd,
  canonicalOverride,
}) {
  const router = useRouter();
  const path = router?.asPath?.split("?")[0] || "/";
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const desc =
    description ||
    "MetalPev: caldeiraria, vasos de pressão, soldas, escadas, mezaninos e instalações industriais com adequação à NR-13 em São Bernardo do Campo e ABC Paulista.";
  const ogImage = image || `${SITE.url}/og-default.svg`;
  const canonical = canonicalOverride || `${SITE.url}${path === "/" ? "" : path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index,follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE.legalName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Head>
  );
}
