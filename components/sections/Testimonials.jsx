import { Quote, Star } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";
import styles from "./Testimonials.module.scss";

// TODO: substituir por depoimentos reais aprovados pelo cliente
const ITEMS = [
  {
    quote:
      "A MetalPev entregou a adequação NR-13 da nossa caldeira dentro do prazo, com documentação completa e zero retrabalho na inspeção do MTE.",
    author: "Gestor de Manutenção",
    company: "Indústria química — ABC Paulista",
  },
  {
    quote:
      "Profissionalismo e qualidade técnica acima do esperado. Comunicação clara durante todo o projeto, do diagnóstico ao laudo.",
    author: "Engenheiro de Processos",
    company: "Indústria alimentícia — SBC",
  },
  {
    quote:
      "Equipe organizada, soldas impecáveis e atendimento de plantão para emergências. Recomendo para qualquer indústria séria.",
    author: "Coordenador de Operações",
    company: "Indústria metalúrgica — Grande SP",
  },
];

export default function Testimonials() {
  return (
    <Section tone="light">
      <Container>
        <div className={styles.header}>
          <Badge>Clientes</Badge>
          <h2 className={styles.title}>O que dizem as indústrias que atendemos.</h2>
        </div>
        <div className={styles.grid}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.author} index={i}>
              <article className={styles.card}>
                <Quote size={28} aria-hidden className={styles.icon} />
                <div className={styles.stars} role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" stroke="none" aria-hidden />
                  ))}
                </div>
                <p className={styles.quote}>“{item.quote}”</p>
                <footer className={styles.author}>
                  <strong>{item.author}</strong>
                  <span>{item.company}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
        <p className={styles.note}>
          {/* TODO: substituir por depoimentos reais aprovados pelo cliente */}
          Depoimentos representativos — serão substituídos por relatos reais após aprovação dos clientes.
        </p>
      </Container>
    </Section>
  );
}
