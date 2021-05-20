import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Metal Pev - Caldeiraria</title>
        <meta name="description" content="Caldeirarias" />
        <link rel="icon" href="/favlogo.png" />
      </Head>

      <header className={styles.headerStyle}>
        <div className={styles.linearGradient}>
          <div className={styles.headerNavigation}>
            <div className={styles.logoMetalPev}>
              <img src="/logo.png" />
            </div>

            <div className={styles.headerMenu}>
              <div className={styles.menuIconToggleMenu}>≡</div>

              <nav className={styles.mobileHidden}>
                <ul>
                  <li className={styles.navItem}>
                    <a href="#home">Home</a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#sobre">Sobre</a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#beneficios">Empresa</a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#beneficios">Serviços</a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#contato">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <section className={styles.headerContent}>
            <div className={styles.textCard}>
              <h2 className={styles.title}>Adequação a norma NR-13</h2>
              <p className={styles.description}>
                Solução eficiente na adequação a norma NR-13, tornando ambiente
                de trabalho mais seguro.
              </p>
              <button className={styles.btnDefault}>
                Solicitar orçamento
                <img src="/Arrow 4.png" />
              </button>
            </div>
          </section>
        </div>
      </header>

      <section className={styles.sessaoSobre}>
        <a id="sobre" name="sobre"></a>
        <div className={styles.contentPresentation}>
          <div className={styles.contentBanner}>
            <img src="/section-sobre.jpg" alt="operador" />
          </div>

          <div className={styles.sessaoContent}>
            <div className={styles.borderStyle}></div>
            <h2 className={styles.title}>
              Fazemos reformas de equipamentos,{" "}
              <span>instalacões industriais, escadas,</span>
              <span>mezaninos e muito mais !</span>
            </h2>
            <p className={styles.description}>
              Com a Metal Pev você gerencia os serviços de manutenção de
              instalacoes industrias de forma prática e ágil, nossas reformas
              são intuitivas e abrangentes e irão te ajudar a alcançar reduções
              nos custos, diminuição dos índices de falhas, cumprimento dos
              prazos para atendimento e vários outros Benefícios que você verá
              em seguida.
            </p>

            <ul className={styles.detail}>
              <li className={styles.topic}>Adequação as normas da NR-13</li>
              <li className={styles.topic}>Adequação as normas da NP.</li>
              <li className={styles.topic}>
                Análise e coleta de dados sobre os pontos de risco
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
