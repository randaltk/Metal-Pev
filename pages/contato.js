import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Seo from "../components/seo/Seo";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import PageHero from "../components/sections/PageHero";
import ContactForm from "../components/forms/ContactForm";
import { SITE, whatsappUrl } from "../lib/site";
import styles from "../styles/pages/Contato.module.scss";

export default function ContatoPage() {
  const mapsEmbed =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      `${SITE.address.street}, ${SITE.address.neighborhood}, ${SITE.address.city}, ${SITE.address.state}`
    ) +
    "&output=embed";

  return (
    <>
      <Seo
        title="Contato — orçamento de caldeiraria e NR-13"
        description="Fale com a MetalPev: orçamentos de caldeiraria, vasos de pressão, soldas, escadas, mezaninos e adequação NR-13. Atendemos São Bernardo do Campo e ABC Paulista."
      />
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu projeto."
        description="Conte o que você precisa: tipo de equipamento, escopo, prazo e local. Em até 1 dia útil retornamos com perguntas técnicas ou agendamos uma visita."
        breadcrumbs={[{ label: "Contato" }]}
      />

      <Section tone="alt">
        <Container>
          <div className={styles.grid}>
            <Reveal className={styles.formSide}>
              <h2 className={styles.title}>Solicite um orçamento</h2>
              <p className={styles.lead}>
                Preencha o formulário abaixo e receberemos sua solicitação diretamente no WhatsApp da MetalPev.
              </p>
              <ContactForm />
            </Reveal>

            <Reveal className={styles.infoSide} index={1}>
              <div className={styles.card}>
                <h3>Canais diretos</h3>
                <ul>
                  <li>
                    <Phone size={18} aria-hidden />
                    <div>
                      <strong>Telefone & WhatsApp</strong>
                      <a href={`tel:+${SITE.whatsappNumber}`}>{SITE.whatsappDisplay}</a>
                    </div>
                  </li>
                  <li>
                    <Mail size={18} aria-hidden />
                    <div>
                      <strong>E-mail</strong>
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </div>
                  </li>
                  <li>
                    <MapPin size={18} aria-hidden />
                    <div>
                      <strong>Endereço</strong>
                      <span>
                        {SITE.address.street}
                        <br />
                        {SITE.address.neighborhood} · {SITE.address.city} / {SITE.address.state}
                      </span>
                    </div>
                  </li>
                  <li>
                    <Clock size={18} aria-hidden />
                    <div>
                      <strong>Horário de atendimento</strong>
                      <span>{SITE.hours}</span>
                    </div>
                  </li>
                </ul>
                <Button href={whatsappUrl()} external variant="whatsapp" fullWidth>
                  <MessageCircle size={18} aria-hidden /> Conversar agora no WhatsApp
                </Button>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa da MetalPev em ${SITE.address.city}`}
                  className={styles.map}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
