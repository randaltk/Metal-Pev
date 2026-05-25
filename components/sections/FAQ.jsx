import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";
import styles from "./FAQ.module.scss";

const DEFAULT_ITEMS = [
  {
    q: "O que é a NR-13 e por que ela é obrigatória?",
    a: "A NR-13 é a Norma Regulamentadora que estabelece requisitos mínimos para gestão da segurança e integridade de caldeiras, vasos de pressão, tubulações e tanques metálicos. Ela é obrigatória para qualquer empresa que opere esses equipamentos no Brasil.",
  },
  {
    q: "Quais equipamentos a MetalPev adequa à NR-13?",
    a: "Caldeiras, vasos de pressão, tanques metálicos de armazenamento e tubulações industriais (categorias A, B, C, D e E, conforme aplicável).",
  },
  {
    q: "Vocês fornecem laudos e prontuários técnicos?",
    a: "Sim. Emitimos prontuários, livros de registro de segurança, projetos de instalação e laudos de inspeção elaborados por profissional habilitado, prontos para apresentação a auditorias.",
  },
  {
    q: "Atendem fora de São Bernardo do Campo?",
    a: "Sim. Atendemos todo o ABC Paulista (Santo André, São Caetano, Diadema, Mauá, Ribeirão Pires, Rio Grande da Serra) e Grande São Paulo. Outras regiões mediante consulta.",
  },
  {
    q: "Quanto tempo leva uma adequação NR-13?",
    a: "Depende do estado do equipamento e do escopo. Após o diagnóstico em planta, apresentamos uma proposta com cronograma realista. Pequenas adequações podem levar de 1 a 2 semanas; projetos completos, alguns meses.",
  },
  {
    q: "A MetalPev faz treinamento de operadores?",
    a: "Sim. Realizamos capacitação NR-13 para operadores de caldeiras e vasos de pressão, com material didático e certificado de conclusão.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você nos envia uma mensagem pelo formulário ou WhatsApp com o tipo de serviço e detalhes do equipamento. Em até 1 dia útil retornamos com perguntas técnicas ou agendamos visita para diagnóstico.",
  },
  {
    q: "Vocês trabalham com soldas certificadas?",
    a: "Sim. Nossa equipe de soldadores é qualificada e aplicamos ensaios não destrutivos (líquido penetrante, ultrassom, partícula magnética, inspeção visual) conforme exigência do projeto.",
  },
];

export default function FAQ({ items = DEFAULT_ITEMS, title = "Perguntas frequentes" }) {
  const [open, setOpen] = useState(0);

  return (
    <Section tone="alt">
      <Container size="narrow">
        <div className={styles.header}>
          <Badge>FAQ</Badge>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.lead}>
            Dúvidas comuns sobre NR-13, caldeiras, vasos de pressão e nossos serviços técnicos.
          </p>
        </div>
        <ul className={styles.list}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={item.q} index={i} className={styles.item}>
                <button
                  type="button"
                  className={styles.q}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  {isOpen ? <Minus size={20} aria-hidden /> : <Plus size={20} aria-hidden />}
                </button>
                <div
                  id={`faq-${i}`}
                  className={`${styles.a} ${isOpen ? styles.aOpen : ""}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
