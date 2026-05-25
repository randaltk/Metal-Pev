import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";
import styles from "./AboutSnippet.module.scss";

const POINTS = [
  "Adequação a normas NR-13 e padrões técnicos vigentes",
  "Profissionais qualificados em soldagem e inspeção",
  "Atendimento em planta com prazos cumpridos",
  "Documentação técnica e laudos completos",
];

export default function AboutSnippet() {
  return (
    <Section tone="light">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.media}>
            <div className={styles.imageWrap}>
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621735210/public/sectionsobre_1_kz7ogq_1_d6wuw0.png"
                alt="Equipe MetalPev realizando inspeção em equipamento industrial"
                width={720}
                height={576}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.shape} aria-hidden />
            </div>
          </Reveal>
          <Reveal className={styles.content} index={1}>
            <Badge>Sobre a MetalPev</Badge>
            <h2 className={styles.title}>
              Fazemos reformas de equipamentos, instalações industriais, escadas, mezaninos e muito mais.
            </h2>
            <p className={styles.lead}>
              Com a MetalPev você gerencia os serviços de manutenção das suas instalações industriais de forma prática
              e ágil. Nossas soluções são integradas e ajudam a reduzir custos, diminuir falhas e cumprir prazos com
              segurança certificada.
            </p>
            <ul className={styles.list}>
              {POINTS.map((p) => (
                <li key={p}>
                  <CheckCircle2 size={18} aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Button href="/sobre" variant="primary">
                Conheça a empresa
              </Button>
              <Button href="/servicos" variant="secondary">
                Ver serviços
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
