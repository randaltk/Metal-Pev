import { SERVICES } from "./site";

const COMMON_BENEFITS = [
  "Projeto e execução por equipe técnica qualificada",
  "Documentação completa e laudos emitidos",
  "Atendimento em planta industrial",
  "Foco em segurança operacional e prazo",
];

export const SERVICE_CONTENT = {
  caldeiras: {
    summary:
      "Projetamos, fabricamos, instalamos e mantemos caldeiras industriais com adequação total à NR-13. Cuidamos do equipamento do diagnóstico ao laudo final.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1621735825/public/caldeiras-services_ca2fbf_hdvlef_2_kreldc.png",
    sections: [
      {
        title: "O que entregamos",
        kind: "list",
        items: [
          "Projeto e fabricação de caldeiras industriais sob medida",
          "Instalação completa em planta com tubulações periféricas",
          "Manutenção preventiva e corretiva (parada programada e emergencial)",
          "Adequação à NR-13: prontuário, projeto de instalação, livro de registro",
          "Inspeções periódicas e ensaios não destrutivos",
        ],
      },
      {
        title: "Para quem é",
        kind: "text",
        body:
          "Indústrias químicas, alimentícias, têxteis, metalúrgicas e demais setores que operam caldeiras a vapor, óleo térmico ou água quente — categorias A, B ou C conforme NR-13.",
      },
      {
        title: "Por que com a MetalPev",
        kind: "list",
        items: COMMON_BENEFITS,
      },
    ],
  },

  "vasos-de-pressao": {
    summary:
      "Inspeção, fabricação e adequação de vasos de pressão dentro das exigências regulatórias da NR-13.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1621744931/public/servico-7_csz0r8_1_ghoptk.jpg",
    sections: [
      {
        title: "Escopo de atuação",
        kind: "list",
        items: [
          "Fabricação de vasos sob pressão sob projeto (ASME/Petrobras N-253 quando aplicável)",
          "Adequação de vasos existentes para conformidade NR-13",
          "Inspeções periódicas (inicial, externa, interna)",
          "Ensaios não destrutivos: ultrassom, líquido penetrante, partícula magnética",
          "Reparos em soldas, tampos, costados, bocais e estruturas de apoio",
        ],
      },
      {
        title: "Documentação técnica",
        kind: "text",
        body:
          "Entregamos prontuário do equipamento, projeto de instalação, registro de segurança, certificado de calibração de válvulas e laudo de inspeção, assinados por profissional habilitado.",
      },
    ],
  },

  "tubulacoes-industriais": {
    summary:
      "Montagem, manutenção e modernização de redes de tubulação para processos industriais e equipamentos sob pressão.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1621735210/public/sectionsobre_1_kz7ogq_1_d6wuw0.png",
    sections: [
      {
        title: "Serviços de tubulação",
        kind: "list",
        items: [
          "Montagem de novas redes de vapor, ar comprimido, água, óleo térmico e processo",
          "Manutenção e troca de trechos críticos",
          "Suportações, isolamento térmico, válvulas e acessórios",
          "Ensaios e testes hidrostáticos quando aplicável",
        ],
      },
      {
        title: "Por que faz diferença",
        kind: "text",
        body:
          "Uma rede de tubulação bem dimensionada reduz perdas de carga, consumo energético e risco de vazamentos. Trabalhamos com foco em desempenho e segurança da planta.",
      },
    ],
  },

  valvulas: {
    summary:
      "Fabricação, instalação e calibração de válvulas de segurança e alívio de pressão. Calibração com bancada e certificado.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/servico-2_brvjtv.jpg",
    sections: [
      {
        title: "O que oferecemos",
        kind: "list",
        items: [
          "Especificação e fornecimento de válvulas de segurança e alívio",
          "Instalação em caldeiras, vasos e linhas de processo",
          "Calibração de válvulas com emissão de certificado",
          "Manutenção e revisão de PSV/PRV",
        ],
      },
      {
        title: "Por que importa",
        kind: "text",
        body:
          "Válvulas de segurança são a última barreira de proteção contra sobrepressão. Operá-las descalibradas é colocar pessoas e ativos em risco — e está fora de conformidade com a NR-13.",
      },
    ],
  },

  "escadas-mezaninos": {
    summary:
      "Estruturas metálicas, escadas retas e helicoidais, mezaninos, guarda-corpos e proteção de máquinas — fabricação e montagem em planta.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1621722709/public/servico-3_ezdwul.jpg",
    sections: [
      {
        title: "Soluções em estruturas metálicas",
        kind: "list",
        items: [
          "Escadas retas e helicoidais industriais",
          "Mezaninos para ampliação de área útil",
          "Guarda-corpos e plataformas operacionais",
          "Proteção de máquinas conforme NR-12",
          "Estruturas auxiliares para tubulações e equipamentos",
        ],
      },
      {
        title: "Projeto e segurança",
        kind: "text",
        body:
          "Todas as estruturas são dimensionadas conforme as normas aplicáveis (ABNT NBR 8800, NR-12, NR-18) e entregues com a documentação técnica necessária para auditorias.",
      },
    ],
  },

  manifolds: {
    summary:
      "Projeto e fabricação de manifolds industriais sob medida para diferentes processos e fluidos.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1621736342/public/servico-4_xlkuvt_1_ey7qgy.jpg",
    sections: [
      {
        title: "O que fazemos",
        kind: "list",
        items: [
          "Manifolds para vapor, ar comprimido, gases, óleo e produtos químicos",
          "Configurações sob medida (entradas, saídas, instrumentação)",
          "Fabricação em aço carbono, inox e ligas especiais",
          "Soldas qualificadas e ensaios não destrutivos",
        ],
      },
    ],
  },

  "nr-13": {
    summary:
      "Adequação completa de equipamentos e processos à norma regulamentadora NR-13, com laudos, prontuários e documentação técnica assinada por profissional habilitado.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1621736705/public/servico-5_wt8yxm_2_uvinfu.jpg",
    sections: [
      {
        title: "O que é a NR-13",
        kind: "text",
        body:
          "A NR-13 é a Norma Regulamentadora do Ministério do Trabalho que estabelece os requisitos mínimos para gestão da integridade estrutural de caldeiras, vasos de pressão, tubulações de processo e tanques metálicos de armazenamento. Ela é obrigatória para qualquer empresa que opere esses equipamentos no Brasil — independentemente do porte ou setor.",
      },
      {
        title: "A quem se aplica",
        kind: "list",
        items: [
          "Caldeiras a vapor de qualquer porte e finalidade",
          "Vasos de pressão (categorias I a V conforme PV × V)",
          "Tubulações de processo e linhas de vapor",
          "Tanques metálicos de armazenamento",
          "Empresas que operam ou prestam serviço a esses equipamentos",
        ],
      },
      {
        title: "Riscos da não conformidade",
        kind: "list",
        items: [
          "Interdição do equipamento por auditoria do MTE",
          "Multas administrativas e responsabilização civil",
          "Risco real de explosão, vazamento e acidentes graves",
          "Perda de cobertura securitária em caso de sinistro",
          "Paralisação não programada da operação",
        ],
      },
      {
        title: "Como a MetalPev faz a adequação",
        kind: "steps",
        items: [
          {
            title: "Diagnóstico em planta",
            desc: "Visita técnica para inventariar equipamentos, levantar documentação existente e identificar lacunas em relação à norma.",
          },
          {
            title: "Plano de adequação",
            desc: "Apresentamos escopo, prazo, custos e prioridades — separando o que é urgente do que pode ser planejado.",
          },
          {
            title: "Execução técnica",
            desc: "Fabricação, instalação, reparos, ensaios e calibrações executados por equipe qualificada, sem parar a planta quando possível.",
          },
          {
            title: "Documentação e laudo",
            desc: "Emitimos prontuário, projeto de instalação, registro de segurança, calibração de PSV e laudo final assinado por profissional habilitado.",
          },
        ],
      },
      {
        title: "Treinamento de operadores",
        kind: "text",
        body:
          "A NR-13 exige que operadores de caldeiras e vasos de pressão sejam capacitados. Realizamos treinamentos teóricos e práticos, com material didático e certificado de conclusão alinhados à norma vigente.",
      },
    ],
  },

  "reposicionamento-tanques": {
    summary:
      "Movimentação técnica e reposicionamento seguro de tanques metálicos industriais — quando trocar de lugar é mais econômico que substituir.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1621744931/public/servico-7_csz0r8_1_ghoptk.jpg",
    sections: [
      {
        title: "Quando faz sentido reposicionar",
        kind: "list",
        items: [
          "Reorganização do layout da planta",
          "Liberação de área para nova linha de produção",
          "Adequação a normas de afastamento e segurança",
          "Manutenção que exige movimentação temporária",
        ],
      },
      {
        title: "Como executamos",
        kind: "text",
        body:
          "Avaliação estrutural, plano de movimentação (içamento, deslocamento, base nova), inspeção pós-reposicionamento e laudo de integridade.",
      },
    ],
  },

  "soldas-inspecao": {
    summary:
      "Líquido penetrante, ultrassom, partícula magnética e inspeção visual — soldas e ensaios não destrutivos executados por profissionais qualificados.",
    image:
      "https://res.cloudinary.com/aguadeira/image/upload/v1617378255/Nolan/solda-services_fpmnri.jpg",
    sections: [
      {
        title: "Ensaios não destrutivos (END)",
        kind: "list",
        items: [
          "Líquido penetrante (LP)",
          "Partícula magnética (PM)",
          "Ultrassom (US)",
          "Inspeção visual (VT) por profissional qualificado",
        ],
      },
      {
        title: "Soldagem industrial",
        kind: "text",
        body:
          "Trabalhamos com soldadores qualificados em processos MIG/MAG, TIG, eletrodo revestido e arco submerso, conforme o material e a aplicação (aço carbono, inox, ligas).",
      },
      {
        title: "Quando exigir END",
        kind: "list",
        items: [
          "Fabricação ou reparo de equipamentos sob pressão (NR-13)",
          "Estruturas críticas de carga",
          "Inspeções periódicas de integridade",
          "Pós-acidente para diagnóstico de falha",
        ],
      },
    ],
  },
};

export function getServiceData(slug) {
  const base = SERVICES.find((s) => s.slug === slug);
  const content = SERVICE_CONTENT[slug];
  if (!base || !content) return null;
  return { ...base, ...content };
}
