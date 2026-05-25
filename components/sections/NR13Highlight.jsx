import { ShieldCheck, FileCheck, GraduationCap, Activity } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";
import styles from "./NR13Highlight.module.scss";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Adequação completa",
    desc: "Diagnóstico, projeto e execução para deixar seu parque industrial 100% em conformidade com a NR-13.",
  },
  {
    icon: FileCheck,
    title: "Laudos e documentação",
    desc: "Prontuários, livros de registro, projetos e laudos técnicos elaborados por profissionais habilitados.",
  },
  {
    icon: Activity,
    title: "Inspeção e ensaios",
    desc: "Inspeções periódicas, ensaios não destrutivos (END), testes hidrostáticos e calibração de válvulas.",
  },
  {
    icon: GraduationCap,
    title: "Treinamento de operadores",
    desc: "Capacitação NR-13 para operadores de caldeiras e vasos de pressão, alinhada à norma vigente.",
  },
];

export default function NR13Highlight() {
  return (
    <Section tone="dark">
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.intro}>
            <Badge tone="dark">Especialidade</Badge>
            <h2 className={styles.title}>
              Especialistas em <span className={styles.accent}>NR-13</span> — a norma de quem leva segurança a sério.
            </h2>
            <p className={styles.lead}>
              Atuamos com foco total na segurança de equipamentos como caldeiras, vasos de pressão, tanques metálicos e
              tubulações. Garantimos a conformidade do seu processo e a proteção das pessoas envolvidas.
            </p>
            <Button href="/servicos/nr-13" variant="primary">
              Ver serviço NR-13 completo
            </Button>
          </Reveal>

          <div className={styles.cards}>
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} index={i}>
                  <article className={styles.card}>
                    <span className={styles.iconWrap} aria-hidden>
                      <Icon size={22} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
