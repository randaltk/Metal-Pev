// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.bodyContent}>
        <header className={styles.headerStyle}>
          <div className={styles.linearGradient}>
            <div className={styles.headerNavigation}>
              <div className={styles.logoMetalPev}>
                <a href="/">
                  {" "}
                  <img src="/logo-metal-pev.png" alt="Metal Pev Caldeiraria" />
                </a>
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
                      <a href="#empresa">Empresa</a>
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
                  Solução eficiente na adequação a norma NR-13, tornando
                  ambiente de trabalho mais seguro.
                </p>
                <a href="#empresa">
                  {" "}
                  <button className={styles.btnDefault}>
                    Solicitar orçamento
                    <img src="/Arrow 4.png" alt="arrow" />
                  </button>
                </a>
              </div>
            </section>
          </div>
        </header>

        <section className={styles.sessaoSobre}>
          <a id="sobre" name="sobre"></a>
          <div className={styles.contentPresentation}>
            <div className={styles.contentBanner}>
              <img src="/section-sobre.jpg" alt="operador" alt="inspeção" />
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
                são intuitivas e abrangentes e irão te ajudar a alcançar
                reduções nos custos, diminuição dos índices de falhas,
                cumprimento dos prazos para atendimento e vários outros
                benefícios que você verá em seguida.
              </p>

              <ul className={styles.detail}>
                <li className={styles.topic}>Adequação as normas da NR-13</li>
                <li className={styles.topic}>Adequação as normas da NP.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.sessaoEmpresa}>
          <a id="empresa" name="empresa"></a>
          <div className={styles.contentPresentationEmpresa}>
            <div className={styles.contentBannerEmpresa}>
              <img src="/nr13.jpg" alt="NR-13" />
            </div>

            <div className={styles.sessaoContentEmpresa}>
              <h2 className={styles.title}>
                A Metal Pev é uma empresa especialista na norma NR-13,{" "}
              </h2>
              <p className={styles.description}>
                Com foco na segurança de equipamentos como Caldeiras, Vasos de
                pressão, Tanques metálicos e Tubulações como também aplicando
                treinamento para operadores de Caldeiras e Vasos de pressão
              </p>

              <div className={styles.beneficios}>
                <h3>Benefícios</h3>
                <div className={styles.detailDois}>
                  <li className={styles.topicDois}>
                    Adequação as normas da NR-13
                  </li>
                  <li className={styles.topicDois}>
                    Adequação as normas da NP.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sessaoServicos}>
          <a id="servicos" name="servicos"></a>
          <div>
            <h2 className={styles.title}>Serviços</h2>
            <p className={styles.descriptionServicos}>
              As soluções possibilitam o controle, monitoramento e operação
              remota de sistemas de iluminação Pública, permitindo monitorar e
              controlar diversos pontos em tempo real.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
