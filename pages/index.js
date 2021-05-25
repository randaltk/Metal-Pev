import styles from "../styles/Home.module.scss";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";
import { useForm } from "@formspree/react";
import { useEffect } from "react";
export default function Home() {
  const [state, handleSubmit] = useForm("xpzkdany");
  useEffect(() => {
    const el1 = document.getElementsByClassName(
      ".uploadcare--widget__button uploadcare--widget__button_type_open"
    );
    el1.innerText = "tetse";
  }, []);

  return (
    <>
      <div className={styles.bodyContent}>
        <a id="home" name="home"></a>
        <header className={styles.headerStyle}>
          <div className={styles.linearGradient}>
            <div className={styles.headerNavigation}>
              <div className={styles.logoMetalPev}>
                <a href="/">
                  {" "}
                  <Image
                    src="https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/logo-metal-pev_gndxm1.png"
                    alt="MetalPev Caldeiraria & Instalações Industriais"
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
                <h2 className={styles.title}>
                  MetalPev Caldeiraria & Instalações Industriais
                </h2>
                <p className={styles.description}></p>
                <a href="#contato">
                  {" "}
                  <button className={styles.btnDefault}>
                    Solicitar orçamento
                    <img
                      src="https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/Arrow_4_heq4na.png"
                      alt="Arrow"
                    />
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
                Com a MetalPev você gerencia os serviços de manutenção de
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
                A MetalPev é uma empresa especialista na norma NR-13,{" "}
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
                  Projeto, fabricação e instalação de misturadores,tanques de
                  armazenamento e tubulações industriais.
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
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621744931/public/servico-7_csz0r8_1_ghoptk.jpg"
                width={500}
                alt="Reposicionamento de tanques"
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Reposicionamento de tanques</h3>

                <p>Reposicionamento de tanques</p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1617378255/Nolan/solda-services_fpmnri.jpg"
                width={500}
                alt="Soldas"
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Soldas</h3>
                <p>
                  Executamos inspeções de solda como liquido penetrante,
                  Ultrassom, partícula magnética e inspeção visual.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sessaoContato}>
          <a id="contato" name="contato"></a>

          <div className={styles.contentPresentation}>
            <div className={styles.contentBanner}>
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621748263/public/pexels-linkedin-sales-navigator-2182973_2_zc2bpt.jpg"
                alt="Entre em contato"
                width={438.08}
                height={350.38}
                alt="Contato"
              />
            </div>

            <div className={styles.sessaoContent}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Entre em contato !</h2>
              <p className={styles.description}>
                Nossa equipe esta preparada para atender a sua empresa de forma
                ágil, confiável e transparente.
              </p>

              <ReactWhatsapp
                className={styles.btnDefault}
                number="55 11 95363-4019"
                message="Olá! Gostaria de obter mais informações"
                href="#"
              >
                Iniciar Conversa
                <img
                  className={styles.whatsAppIcon}
                  alt="WhatsApp"
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1621877447/public/580b57fcd9996e24bc43c543_rq3rpg_1_hzqvlk.png"
                />
              </ReactWhatsapp>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.horizontalLayout}>
            <div className={styles.siteMap}>
              <a href="/">
                {" "}
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/logo-metal-pev_gndxm1.png"
                  alt="MetalPev Caldeiraria & Instalações Industriais"
                  width={160}
                  height={70}
                />
              </a>

              <ul className={styles.siteMap}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#empresa">Empresa</a>
                </li>
                <li>
                  <a href="#servicos">Serviços</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.footerTitle}>
                <div className={styles.borderStyle}></div>
                Contato
              </h3>
              <p className={styles.footerDescription}>
                Entre em contato e teremos o prazer em esclarecer qualquer
                dúvida.
              </p>
              <form
                id="fs-frm"
                accept-charset="utf-8"
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xpzkdany"
                method="POST"
                enctype="multipart/form-data"
              >
                <label for="Nome" class="mark">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  required
                />

                <label for="Email" class="mark">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                />
                <label for="Telefone ">Telefone</label>
                <input
                  placeholder="55 11 98876-5432"
                  type="number"
                  name="phone"
                />
                <label class="uploader-demo-circle">
                  Anexo:
                  <input type="hidden" role="uploadcare-uploader" />
                </label>
                <label for="Mensagem" class="mark">
                  Mensagem
                </label>
                <textarea type="text" name="message" required />

                {state.succeeded ? (
                  <p>Obrigado! Nós entraremos em contato em breve</p>
                ) : (
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={styles.btnDefault}
                  >
                    Enviar
                  </button>
                )}
              </form>
            </div>
            <div>
              <h3 className={styles.footerTitle}>
                <div className={styles.borderStyle}></div>
                MetalPev nas redes sociais
              </h3>
              <ul className={styles.footerSocial}>
                <li>
                  <img
                    src="https://res.cloudinary.com/aguadeira/image/upload/v1621878348/public/58e91afdeb97430e81906504_1_lsl4hy.png"
                    alt="Linkedin"
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/aguadeira/image/upload/v1621878007/public/584ac2d03ac3a570f94a666d_1_hfppbn.png"
                    alt="Facebook"
                  />
                </li>
              </ul>
              <ul className={styles.footerContact}>
                <li>
                  <p>
                    <img
                      alt="WhatsApp"
                      src="https://res.cloudinary.com/aguadeira/image/upload/v1621877447/public/580b57fcd9996e24bc43c543_rq3rpg_1_hzqvlk.png"
                    />
                    55 11 95363-4019
                  </p>
                </li>
                <li>
                  <p>
                    <img
                      alt="Email"
                      src="https://res.cloudinary.com/aguadeira/image/upload/v1621877390/public/584856b4e0bb315b0f7675ac_1_1_kd0wv4.png"
                    />
                    metalpev@gmail.com
                  </p>
                </li>
              </ul>
              <h3 className={styles.footerTitle}>
                <div className={styles.borderStyle}></div>
                Endereço
              </h3>
              <p className={styles.footerDescription}>
                Rua José Dias Barroso, 191 Centro CEP 37130-053 Alfenas - MG
                Tell: 55 11 95363-4019
              </p>
            </div>
          </div>
          <p className={styles.footerEnd}>MetalPev 2021 Direitos Reservados</p>
        </footer>
      </div>
    </>
  );
}
