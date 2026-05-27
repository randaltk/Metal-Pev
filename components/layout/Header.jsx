import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Menu, X, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import LogoMark from "../brand/LogoMark";
import { NAV, SITE, whatsappUrl } from "../../lib/site";
import styles from "./Header.module.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.logo} aria-label={`${SITE.legalName} — página inicial`}>
          <LogoMark size={80} variant="full" priority className={styles.logoMark} />
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={`tel:+${SITE.whatsappNumber}`} className={styles.phone} aria-label={`Ligar para ${SITE.whatsappDisplay}`}>
            <Phone size={16} aria-hidden />
            <span>{SITE.whatsappDisplay}</span>
          </a>
          <span className={styles.ctaWrap}>
            <Button
              href={whatsappUrl("Olá, MetalPev! Vim pelo site e gostaria de solicitar um orçamento.")}
              external
              variant="primary"
              size="sm"
            >
              Solicitar orçamento
            </Button>
          </span>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <div
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        inert={!open || undefined}
      >
        <nav aria-label="Navegação mobile">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.drawerLink} ${isActive(item.href) ? styles.drawerLinkActive : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.drawerActions}>
          <Button
            href={whatsappUrl()}
            external
            variant="whatsapp"
            fullWidth
            onClick={() => setOpen(false)}
          >
            Falar no WhatsApp
          </Button>
          <a href={`tel:+${SITE.whatsappNumber}`} className={styles.drawerPhone}>
            <Phone size={16} aria-hidden /> {SITE.whatsappDisplay}
          </a>
        </div>
      </div>
      {open ? <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden /> : null}
    </header>
  );
}
