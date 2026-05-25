export const SITE = {
  name: "MetalPev",
  legalName: "MetalPev Caldeiraria & Instalações Industriais",
  tagline: "Caldeiraria e Instalações Industriais com Segurança Certificada.",
  url: "https://metalpev.com.br",
  whatsappNumber: "5511953634019",
  whatsappDisplay: "(11) 95363-4019",
  email: "metalpev@gmail.com",
  address: {
    street: "Estrada particular Eiji Kikuti, N° 413",
    neighborhood: "Cooperativa",
    city: "São Bernardo do Campo",
    state: "SP",
    country: "BR",
    postalCode: "09852-070",
  },
  hours: "Segunda a sexta, 08h às 18h",
  social: {
    // TODO: confirmar com cliente os links reais das redes sociais
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
};

export const SERVICES = [
  {
    slug: "caldeiras",
    title: "Caldeiras",
    short: "Projeto, fabricação, instalação e manutenção de caldeiras industriais com adequação total à NR-13.",
    icon: "Flame",
  },
  {
    slug: "vasos-de-pressao",
    title: "Vasos de Pressão",
    short: "Inspeção, fabricação e adequação de vasos de pressão dentro das exigências regulatórias.",
    icon: "Cylinder",
  },
  {
    slug: "tubulacoes-industriais",
    title: "Tubulações Industriais",
    short: "Montagem, manutenção e modernização de redes de tubulação para processos industriais.",
    icon: "Pipette",
  },
  {
    slug: "valvulas",
    title: "Válvulas de Segurança",
    short: "Fabricação, instalação e calibração de válvulas de segurança e alívio de pressão.",
    icon: "Gauge",
  },
  {
    slug: "escadas-mezaninos",
    title: "Escadas e Mezaninos",
    short: "Estruturas metálicas, escadas retas e helicoidais, mezaninos, guarda-corpos e proteção de máquinas.",
    icon: "MoveUp",
  },
  {
    slug: "manifolds",
    title: "Manifolds",
    short: "Projeto e fabricação de manifolds industriais sob medida para diferentes processos.",
    icon: "GitBranch",
  },
  {
    slug: "nr-13",
    title: "Adequação à NR-13",
    short: "Adequação completa de equipamentos e processos à norma NR-13, com laudos e documentação técnica.",
    icon: "ShieldCheck",
    featured: true,
  },
  {
    slug: "reposicionamento-tanques",
    title: "Reposicionamento de Tanques",
    short: "Movimentação técnica e reposicionamento seguro de tanques metálicos industriais.",
    icon: "Move3d",
  },
  {
    slug: "soldas-inspecao",
    title: "Soldas e Inspeção",
    short: "Líquido penetrante, ultrassom, partícula magnética e inspeção visual com profissionais qualificados.",
    icon: "Wrench",
  },
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export function whatsappUrl(message) {
  const text = message || "Olá, MetalPev! Vim pelo site e gostaria de mais informações.";
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
