import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { whatsappUrl } from "../../lib/site";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden>
        <Image
          src="/images/hero-bg.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <Container className={styles.wrap}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <Badge tone="dark" icon={ShieldCheck}>
            Especialistas em NR-13
          </Badge>
          <h1 id="hero-title" className={styles.title}>
            Caldeiraria e instalações industriais com{" "}
            <span className={styles.titleAccent}>segurança certificada.</span>
          </h1>
          <p className={styles.subtitle}>
            Especialistas em NR-13, caldeiras, vasos de pressão, soldas e instalações industriais. Atendemos
            indústrias em todo o ABC Paulista e Grande SP com foco total em conformidade, segurança e prazo.
          </p>
          <div className={styles.ctas}>
            <Button href="/contato" variant="primary" size="lg">
              Solicitar orçamento <ArrowRight size={18} aria-hidden />
            </Button>
            <Button
              href={whatsappUrl()}
              external
              variant="secondary-dark"
              size="lg"
            >
              <MessageCircle size={18} aria-hidden /> Falar no WhatsApp
            </Button>
          </div>
          <ul className={styles.bullets} aria-label="Diferenciais">
            <li>Laudos e documentação NR-13</li>
            <li>Equipe técnica qualificada</li>
            <li>Atendimento ABC Paulista e Grande SP</li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
