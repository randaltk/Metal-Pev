import { ShieldCheck, Hammer, Calendar, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import styles from "./TrustBar.module.scss";

// TODO: confirmar com cliente os números reais (anos no mercado, projetos entregues)
const ITEMS = [
  { icon: Calendar, value: "15+", label: "anos no setor industrial" },
  { icon: ShieldCheck, value: "NR-13", label: "especialistas certificados" },
  { icon: Hammer, value: "+200", label: "projetos entregues" },
  { icon: CheckCircle2, value: "100%", label: "foco em segurança e laudos" },
];

export default function TrustBar() {
  return (
    <section className={styles.trustBar} aria-label="Diferenciais MetalPev">
      <Container>
        <ul className={styles.grid}>
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.label} index={i} className={styles.item}>
                <Icon className={styles.icon} size={28} aria-hidden />
                <div>
                  <strong className={styles.value}>{item.value}</strong>
                  <span className={styles.label}>{item.label}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
