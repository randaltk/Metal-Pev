import { Search, ClipboardList, Hammer, FileCheck2 } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";
import styles from "./ProcessSteps.module.scss";

const STEPS = [
  {
    n: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Visita técnica, levantamento da planta e identificação dos pontos críticos para conformidade.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Projeto",
    desc: "Elaboração do projeto técnico, escopo de execução, prazo, materiais e proposta detalhada.",
  },
  {
    n: "03",
    icon: Hammer,
    title: "Execução",
    desc: "Fabricação, instalação, manutenção ou adequação executada por equipe qualificada em campo.",
  },
  {
    n: "04",
    icon: FileCheck2,
    title: "Laudo & entrega",
    desc: "Emissão de laudos, prontuários NR-13, registros e entrega oficial da documentação técnica.",
  },
];

export default function ProcessSteps() {
  return (
    <Section tone="alt">
      <Container>
        <div className={styles.header}>
          <Badge tone="accent">Como trabalhamos</Badge>
          <h2 className={styles.title}>Um processo claro, do diagnóstico ao laudo final.</h2>
          <p className={styles.lead}>
            Acompanhamos cada projeto em quatro etapas para garantir segurança, prazo e total transparência com o
            cliente.
          </p>
        </div>
        <ol className={styles.list}>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal as="li" key={step.n} index={i} className={styles.item}>
                <div className={styles.head}>
                  <span className={styles.num}>{step.n}</span>
                  <Icon size={22} aria-hidden className={styles.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
