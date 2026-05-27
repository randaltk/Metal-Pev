import Image from "next/image";
import { Target, Eye, HandHeart, MapPin, Users, ShieldCheck } from "lucide-react";
import Seo from "../components/seo/Seo";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/CTASection";
import { PHOTOS, cldUrl } from "../lib/media";
import styles from "../styles/pages/Sobre.module.scss";

const SOBRE_GALLERY = [
  PHOTOS.stairsInoxTeam,
  PHOTOS.platformYellowGuardrail,
  PHOTOS.pipingFlanges,
  PHOTOS.tanksVertical,
];

const PILLARS = [
  {
    icon: Target,
    title: "Missão",
    desc: "Oferecer soluções de caldeiraria e instalações industriais com excelência técnica, segurança certificada e total conformidade à NR-13, gerando confiança e eficiência aos nossos clientes.",
  },
  {
    icon: Eye,
    title: "Visão",
    desc: "Ser referência em caldeiraria industrial no ABC Paulista, reconhecida pela qualidade técnica, agilidade e relacionamento próximo com indústrias parceiras.",
  },
  {
    icon: HandHeart,
    title: "Valores",
    desc: "Segurança em primeiro lugar. Honestidade técnica. Compromisso com o prazo. Cuidado com os equipamentos e com as pessoas que operam neles.",
  },
];

const DIFFERENTIALS = [
  { icon: ShieldCheck, title: "Especialistas em NR-13", desc: "Foco absoluto em equipamentos sob pressão e na norma que rege sua operação segura." },
  { icon: Users, title: "Equipe qualificada", desc: "Soldadores, caldeireiros e técnicos com experiência prática em planta industrial." },
  { icon: MapPin, title: "Presença regional", desc: "Atendimento rápido em SBC, ABC Paulista e Grande SP — visitas em planta e plantão para urgências." },
];

export default function SobrePage() {
  return (
    <>
      <Seo
        title="Sobre a MetalPev — caldeiraria industrial em SBC"
        description="Conheça a MetalPev: caldeiraria, vasos de pressão e instalações industriais com foco em NR-13. Sediados em São Bernardo do Campo, atendemos todo o ABC Paulista."
      />
      <PageHero
        eyebrow="Quem somos"
        title="Caldeiraria, segurança e instalações industriais em São Bernardo do Campo."
        description="Somos uma empresa especializada em caldeiraria e instalações industriais, com foco em equipamentos sob pressão e conformidade à NR-13. Trabalhamos lado a lado com indústrias do ABC Paulista para garantir operações seguras, dentro da norma e sem retrabalho."
        breadcrumbs={[{ label: "Sobre" }]}
      />

      <Section tone="light">
        <Container>
          <div className={styles.intro}>
            <Reveal className={styles.introMedia}>
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1617378253/Nolan/icon-nr13_uwxlnj.png"
                alt="Equipamentos industriais inspecionados pela MetalPev em conformidade com a NR-13"
                width={720}
                height={720}
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.introImage}
              />
            </Reveal>
            <Reveal className={styles.introContent} index={1}>
              <Badge>Nossa especialidade</Badge>
              <h2>A MetalPev é uma empresa especialista na norma NR-13.</h2>
              <p>
                Com foco na segurança de equipamentos como caldeiras, vasos de pressão, tanques metálicos e tubulações,
                aplicamos também treinamento para operadores. Nossa atuação cobre desde diagnóstico técnico e
                elaboração de projetos até a execução em planta e a emissão dos laudos exigidos pela norma.
              </p>
              <p>
                Nascemos para resolver, de ponta a ponta, o que muitas indústrias precisam fragmentar entre vários
                fornecedores: projeto, fabricação, montagem, manutenção, inspeção e documentação. Isso garante mais
                agilidade, menos retrabalho e total clareza sobre o que foi entregue.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <div className={styles.header}>
            <Badge tone="accent">O que nos move</Badge>
            <h2>Missão, visão e valores</h2>
          </div>
          <div className={styles.pillarGrid}>
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} index={i}>
                  <Card className={styles.pillarCard}>
                    <span className={styles.pillarIcon} aria-hidden>
                      <Icon size={22} />
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <div className={styles.header}>
            <Badge>Diferenciais</Badge>
            <h2>O que separa a MetalPev de uma caldeiraria comum.</h2>
          </div>
          <div className={styles.diffGrid}>
            {DIFFERENTIALS.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} index={i}>
                  <article className={styles.diffItem}>
                    <Icon size={22} aria-hidden className={styles.diffIcon} />
                    <div>
                      <h3>{d.title}</h3>
                      <p>{d.desc}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className={styles.header}>
            <Badge tone="accent">Equipe em ação</Badge>
            <h2>Caldeiraria de verdade, registrada em planta.</h2>
            <p className={styles.headerLead}>
              Algumas das obras e equipamentos que entregamos. Da fabricação em oficina à montagem em planta, com
              técnicos qualificados e foco em conformidade.
            </p>
          </div>
          <div className={styles.galleryGrid}>
            {SOBRE_GALLERY.map((photo, i) => (
              <Reveal key={photo.publicId} index={i % 4} className={styles.galleryCell}>
                <figure className={styles.galleryFig}>
                  <Image
                    src={cldUrl(photo, { width: 800, height: 800, crop: "fill", gravity: "auto" })}
                    alt={photo.alt}
                    width={800}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.galleryImg}
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
