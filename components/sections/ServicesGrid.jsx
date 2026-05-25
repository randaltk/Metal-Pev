import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";
import { SERVICES } from "../../lib/site";
import styles from "./ServicesGrid.module.scss";

export default function ServicesGrid({ heading = "Nossos serviços", description, tone = "alt", limit }) {
  const list = typeof limit === "number" ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <Section tone={tone} id="servicos">
      <Container>
        <div className={styles.header}>
          <Badge>Soluções industriais</Badge>
          <h2 className={styles.title}>{heading}</h2>
          {description ? <p className={styles.description}>{description}</p> : null}
        </div>
        <div className={styles.grid}>
          {list.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Wrench;
            return (
              <Reveal key={service.slug} index={i % 3}>
                <Card interactive className={styles.card}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className={styles.cardLink}
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    <span className={styles.iconWrap} aria-hidden>
                      <Icon size={24} />
                    </span>
                    <h3 className={styles.cardTitle}>
                      {service.title}
                      {service.featured ? <span className={styles.featured}>Destaque</span> : null}
                    </h3>
                    <p className={styles.cardDesc}>{service.short}</p>
                    <span className={styles.cta}>
                      Saiba mais <ArrowRight size={16} aria-hidden />
                    </span>
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
