import styles from "../styles/Home.module.scss";
import Image from "next/image";
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
                  <Image
                    src="https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/logo-metal-pev_gndxm1.png"
                    alt="Metal Pev Caldeiraria"
                    width={160}
                    height={70}
                  />
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
                      <a href="#servicos">Serviços</a>
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
                    <img src="/Arrow 4.png" alt="Arrow" />
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
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621735210/public/sectionsobre_1_kz7ogq_1_d6wuw0.png"
                alt="Inspeção"
                width={438.08}
                height={350.38}
              />
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
              <Image
                width={532.8}
                height={532.8}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1617378253/Nolan/icon-nr13_uwxlnj.png"
                alt="NR-13"
              />
            </div>

            <div className={styles.sessaoContent}>
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
                  <p className={styles.topicDois}>
                    <span>• </span> Adequação as normas da NR-13
                  </p>
                  <p className={styles.topicDois}>
                    <span>• </span>Adequação as normas da NP.
                  </p>
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
              As soluções possibilitam o controle, monitoramento e operação de
              instalações, permitindo monitorar e controlar diversos pontos em
              tempo real.
            </p>
          </div>

          <div className={styles.cards}>
            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621735825/public/caldeiras-services_ca2fbf_hdvlef_2_kreldc.png"
                alt="Caldeiras"
                width={500}
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Caldeiras</h3>
                <p>
                  Projeto, fabricação e instalação de misturadores,tanque de
                  armazenamento e tubuçaões industriais.
                </p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/servico-2_brvjtv.jpg"
                alt="Válvulas"
                width={500}
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Válvulas</h3>
                <p>Fabricação e instalação de válvulas de segurança</p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621722709/public/servico-3_ezdwul.jpg"
                alt="Escadas"
                width={500}
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Escadas</h3>
                <p>
                  Escadas retas, escadas helicoidais, mesaninos,guarda-corpo
                  ,proteção de máquinas
                </p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621736342/public/servico-4_xlkuvt_1_ey7qgy.jpg"
                alt="Manifolds"
                width={500}
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Manifolds</h3>
                <p>Manifolds</p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621736705/public/servico-5_wt8yxm_2_uvinfu.jpg"
                width={500}
                alt="Adequação a norma nr-13"
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Adequação a norma NR 13</h3>
                <p>Adequação a norma NR 13</p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <img
                className={styles.cardsContentImg}
                src="/servico-6.jpeg"
                alt="serviço"
              />
              <div className={styles.cardsDescription}>
                <h3>Configuração</h3>
                <p>
                  Cada ação é configurável – isto é: para cada ação ligar,
                  entrar em modo de controle por Lux, etc, cliente pode
                  configurar os parâmetros de cada ação sensibilidade,
                  intensidade base da luz, etc.
                </p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <img
                className={styles.cardsContentImg}
                src="/servico-7.jpeg"
                alt="serviço"
              />
              <div className={styles.cardsDescription}>
                <h3>Configuração</h3>
                <p>
                  Cada ação é configurável – isto é: para cada ação ligar,
                  entrar em modo de controle por Lux, etc, cliente pode
                  configurar os parâmetros de cada ação sensibilidade,
                  intensidade base da luz, etc.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
