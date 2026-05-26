import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function LinkedinIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.706h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.62h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
  );
}
import Container from "../ui/Container";
import LogoMark from "../brand/LogoMark";
import { SITE, SERVICES, NAV } from "../../lib/site";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label={`${SITE.legalName} — página inicial`}>
              <LogoMark size={44} className={styles.logoMark} />
              <strong>MetalPev</strong>
            </Link>
            <p className={styles.tagline}>
              Caldeiraria e instalações industriais com foco em segurança, conformidade NR-13 e prazo. Atendemos São
              Bernardo do Campo e todo o ABC Paulista.
            </p>
            <div className={styles.socials}>
              {/* TODO: confirmar com cliente os links reais das redes sociais */}
              <a href={SITE.social.linkedin} aria-label="LinkedIn da MetalPev" className={styles.socialLink}>
                <LinkedinIcon />
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook da MetalPev" className={styles.socialLink}>
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.colTitle}>Navegação</h3>
            <ul className={styles.list}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Serviços</h3>
            <ul className={styles.list}>
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicos/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/servicos">Ver todos os serviços →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Contato</h3>
            <ul className={styles.contactList}>
              <li>
                <Phone size={16} aria-hidden />
                <a href={`tel:+${SITE.whatsappNumber}`}>{SITE.whatsappDisplay}</a>
              </li>
              <li>
                <Mail size={16} aria-hidden />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <MapPin size={16} aria-hidden />
                <span>
                  {SITE.address.street}, {SITE.address.neighborhood}
                  <br />
                  {SITE.address.city} / {SITE.address.state}
                </span>
              </li>
              <li>
                <Clock size={16} aria-hidden />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {SITE.legalName}. Todos os direitos reservados.
          </p>
          <p className={styles.cnpj}>CNPJ: a confirmar com cliente</p>
        </div>
      </Container>
    </footer>
  );
}
