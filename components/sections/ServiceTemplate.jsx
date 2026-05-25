import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2, MessageCircle, ChevronRight } from "lucide-react";
import Seo from "../seo/Seo";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";
import CTASection from "./CTASection";
import PageHero from "./PageHero";
import { SERVICES, SITE, whatsappUrl } from "../../lib/site";
import { getServiceData } from "../../lib/services-content";
import styles from "./ServiceTemplate.module.scss";

export default function ServiceTemplate({ slug }) {
  const service = getServiceData(slug);
  if (!service) return null;

  const Icon = Icons[service.icon] || Icons.Wrench;
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}#localbusiness`,
      name: SITE.legalName,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "ABC Paulista e Grande São Paulo",
    },
    url: `${SITE.url}/servicos/${service.slug}`,
  };

  return (
    <>
      <Seo
        title={`${service.title} — Caldeiraria Industrial`}
        description={service.summary}
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="Serviço"
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { label: "Serviços", href: "/servicos" },
          { label: service.title },
        ]}
      >
        <div className={styles.heroActions}>
          <Button href="/contato" variant="primary">
            Solicitar orçamento <ArrowRight size={16} aria-hidden />
          </Button>
          <Button
            href={whatsappUrl(`Olá, MetalPev! Tenho interesse no serviço de ${service.title}.`)}
            external
            variant="secondary-dark"
          >
            <MessageCircle size={16} aria-hidden /> Falar no WhatsApp
          </Button>
        </div>
      </PageHero>

      <Section tone="light">
        <Container>
          <div className={styles.layout}>
            <div className={styles.content}>
              <div className={styles.iconWrap} aria-hidden>
                <Icon size={28} />
              </div>
              {service.sections.map((sec, i) => (
                <Reveal key={sec.title} index={i} className={styles.block}>
                  <h2>{sec.title}</h2>
                  {sec.kind === "text" ? <p className={styles.lead}>{sec.body}</p> : null}
                  {sec.kind === "list" ? (
                    <ul className={styles.list}>
                      {sec.items.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={18} aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {sec.kind === "steps" ? (
                    <ol className={styles.steps}>
                      {sec.items.map((step, idx) => (
                        <li key={step.title}>
                          <span className={styles.stepN}>{String(idx + 1).padStart(2, "0")}</span>
                          <div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </Reveal>
              ))}
            </div>

            <aside className={styles.aside}>
              {service.image ? (
                <div className={styles.media}>
                  <Image
                    src={service.image}
                    alt={`Imagem ilustrativa do serviço: ${service.title}`}
                    width={720}
                    height={720}
                    sizes="(max-width: 900px) 100vw, 360px"
                    className={styles.mediaImg}
                  />
                </div>
              ) : null}
              <Card className={styles.asideCard}>
                <Badge>Atendimento técnico</Badge>
                <h3>Fale com um especialista</h3>
                <p>
                  Pergunte sobre prazos, requisitos técnicos ou apresente seu projeto. Em até 1 dia útil retornamos.
                </p>
                <Button href="/contato" variant="primary" fullWidth>
                  Pedir orçamento
                </Button>
                <Button
                  href={whatsappUrl(`Olá, MetalPev! Tenho interesse no serviço de ${service.title}.`)}
                  external
                  variant="whatsapp"
                  fullWidth
                >
                  <MessageCircle size={16} aria-hidden /> WhatsApp
                </Button>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <div className={styles.relatedHead}>
            <Badge tone="accent">Outros serviços</Badge>
            <h2>Soluções complementares</h2>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link key={r.slug} href={`/servicos/${r.slug}`} className={styles.relatedCard}>
                <h3>{r.title}</h3>
                <p>{r.short}</p>
                <span>
                  Ver detalhes <ChevronRight size={14} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
