import ServiceTemplate from "../../components/sections/ServiceTemplate";
import FAQ from "../../components/sections/FAQ";

const NR13_FAQ = [
  {
    q: "A NR-13 vale para empresas pequenas?",
    a: "Sim. Não há isenção por porte. Toda empresa que opere caldeiras, vasos de pressão, tubulações de processo ou tanques metálicos é obrigada a cumprir a NR-13.",
  },
  {
    q: "Com que frequência preciso inspecionar?",
    a: "A periodicidade depende da categoria do equipamento e do tipo de inspeção (inicial, externa, interna). Caldeiras categoria A, por exemplo, exigem inspeção externa anual e interna em intervalos definidos pela norma.",
  },
  {
    q: "Posso usar minha equipe interna para a adequação?",
    a: "A NR-13 exige que projetos, laudos e inspeções sejam assinados por Profissional Habilitado (PH). Sua equipe pode apoiar a operação, mas a documentação técnica precisa vir de PH.",
  },
  {
    q: "Vocês emitem prontuário e livro de registro?",
    a: "Sim. Entregamos prontuário completo do equipamento, projeto de instalação, livro/registro de segurança e laudo de inspeção, prontos para apresentação em auditoria.",
  },
  {
    q: "Quanto custa adequar um equipamento à NR-13?",
    a: "Varia muito conforme o estado do equipamento, categoria e escopo. Após o diagnóstico em planta apresentamos proposta detalhada — sem custo e sem compromisso.",
  },
  {
    q: "Vocês também treinam operadores?",
    a: "Sim. Realizamos capacitação NR-13 para operadores de caldeiras e vasos de pressão, com material didático e certificado de conclusão.",
  },
];

export default function Page() {
  return (
    <>
      <ServiceTemplate slug="nr-13" />
      <FAQ items={NR13_FAQ} title="Perguntas frequentes sobre NR-13" />
    </>
  );
}
