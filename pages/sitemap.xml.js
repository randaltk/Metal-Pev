import { SITE, SERVICES } from "../lib/site";

function generateSiteMap() {
  const staticRoutes = ["", "/sobre", "/servicos", "/contato"];
  const serviceRoutes = SERVICES.map((s) => `/servicos/${s.slug}`);
  const all = [...staticRoutes, ...serviceRoutes];
  const now = new Date().toISOString();

  const urls = all
    .map((route) => {
      const loc = `${SITE.url}${route}`;
      const priority = route === "" ? "1.0" : route.startsWith("/servicos/") ? "0.7" : "0.8";
      const changefreq = route === "" ? "weekly" : "monthly";
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  return null;
}
