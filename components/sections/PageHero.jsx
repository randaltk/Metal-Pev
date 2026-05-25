import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import styles from "./PageHero.module.scss";

export default function PageHero({ eyebrow, title, description, breadcrumbs = [], children }) {
  return (
    <section className={styles.hero} aria-labelledby="page-hero-title">
      <div className={styles.bg} aria-hidden />
      <Container>
        {breadcrumbs.length > 0 ? (
          <nav className={styles.crumbs} aria-label="Você está em">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              {breadcrumbs.map((c, i) => (
                <li key={c.href || c.label}>
                  <ChevronRight size={14} aria-hidden />
                  {c.href && i < breadcrumbs.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {eyebrow ? <Badge tone="dark">{eyebrow}</Badge> : null}
          <h1 id="page-hero-title" className={styles.title}>
            {title}
          </h1>
          {description ? <p className={styles.description}>{description}</p> : null}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
