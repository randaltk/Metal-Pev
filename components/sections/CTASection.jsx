import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { whatsappUrl } from "../../lib/site";
import styles from "./CTASection.module.scss";

export default function CTASection({
  title = "Pronto para tornar sua planta industrial mais segura?",
  description = "Conte para a gente o que precisa: caldeira, vaso de pressão, escadas, mezaninos ou adequação NR-13. Em até 1 dia útil retornamos com um plano técnico claro.",
}) {
  return (
    <Section tone="graphite" spacing="loose">
      <Container>
        <Reveal className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
          </div>
          <div className={styles.actions}>
            <Button href="/contato" variant="primary" size="lg">
              Solicitar orçamento <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href={whatsappUrl()} external variant="secondary-dark" size="lg">
              <MessageCircle size={18} aria-hidden /> Falar no WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
