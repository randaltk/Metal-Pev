import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import Seo from "../components/seo/Seo";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import styles from "../styles/pages/Error.module.scss";

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada" description="A página que você procura não foi encontrada." noindex />
      <section className={styles.wrap}>
        <Container>
          <div className={styles.content}>
            <span className={styles.code}>404</span>
            <h1>Página não encontrada</h1>
            <p>
              O endereço que você acessou não existe ou foi movido. Volte para a Home ou explore nossos serviços
              industriais.
            </p>
            <div className={styles.actions}>
              <Button href="/" variant="primary">
                <Home size={16} aria-hidden /> Voltar ao início
              </Button>
              <Button href="/servicos" variant="secondary">
                Ver serviços <ArrowRight size={16} aria-hidden />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
