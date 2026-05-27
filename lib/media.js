/**
 * Catálogo central de imagens da MetalPev hospedadas no Cloudinary.
 *
 * Cada foto possui:
 *  - publicId: caminho dentro do bucket (sem o domínio base nem transformações)
 *  - version : timestamp Cloudinary (opcional, melhora cache do CDN)
 *  - alt     : texto alternativo descritivo (acessibilidade + SEO)
 *
 * Use `cldUrl(photo, options)` para gerar a URL final com transformações.
 */

const CLOUD_BASE = "https://res.cloudinary.com/aguadeira/image/upload";

/**
 * Monta uma URL Cloudinary com transformações.
 * @param {{ publicId: string, version?: string }} photo
 * @param {{ width?: number, height?: number, crop?: string, gravity?: string, ratio?: string }} [opts]
 */
export function cldUrl(photo, opts = {}) {
  if (!photo) return "";
  const { width, height, crop = "fill", gravity = "auto", ratio } = opts;
  const transforms = ["f_auto", "q_auto"];
  if (ratio) transforms.push(`ar_${ratio}`);
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (width || height || ratio) {
    transforms.push(`c_${crop}`);
    transforms.push(`g_${gravity}`);
  }
  const version = photo.version ? `${photo.version}/` : "";
  return `${CLOUD_BASE}/${transforms.join(",")}/${version}${photo.publicId}`;
}

const FOLDER = "metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z";

const photo = (file, version, alt) => ({
  publicId: `${FOLDER}/${file}`,
  version,
  alt,
});

/**
 * Inventário identificado das fotos reais da MetalPev (lote WhatsApp 26/05).
 * Apelidos descritivos para uso por todo o projeto.
 */
export const PHOTOS = {
  tanksVertical: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.04_rgvlrs.jpg",
    "v1779819102",
    "Tanques verticais industriais com escada de gato e guarda-corpo cilíndrico instalados pela MetalPev"
  ),
  stairZIndoor: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.03_lqo1uw.jpg",
    "v1779819101",
    "Escada metálica em formato Z com piso xadrez antiderrapante para uso interno"
  ),
  cageYellow: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.03_1_j1hipl.jpg",
    "v1779819100",
    "Cesta aérea industrial amarela com tela de proteção para acesso seguro"
  ),
  pressureVesselBeige: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.02_l1t73p.jpg",
    "v1779819099",
    "Vaso de pressão horizontal em fabricação na oficina da MetalPev"
  ),
  rackBlueParts: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.02_1_alllyt.jpg",
    "v1779819098",
    "Rack metálico azul para movimentação e organização de peças industriais"
  ),
  pipingFlanges: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.02_2_pu47tv.jpg",
    "v1779819097",
    "Tubulações industriais com flanges fabricadas pela MetalPev"
  ),
  pressureVesselGray: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.01_id7rk7.jpg",
    "v1779819097",
    "Vaso de pressão recém-fabricado sendo inspecionado por técnico da MetalPev"
  ),
  platformYellowGuardrail: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.01_3_qvajvo.jpg",
    "v1779819096",
    "Plataforma operacional com guarda-corpo amarelo e acessos por escada entre tanques de armazenamento"
  ),
  tanksCart: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.01_2_r7xyku.jpg",
    "v1779819095",
    "Conjunto de tanques cilíndricos sobre carrinho metálico para movimentação industrial"
  ),
  industrialCart: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.01_1_xzzjzx.jpg",
    "v1779819094",
    "Carrinho industrial de movimentação interna em planta produtiva"
  ),
  catLadderYellow: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.00_vhwuxx.jpg",
    "v1779819093",
    "Escada de gato amarela com gaiola de proteção em sala de máquinas"
  ),
  cabinetOrange: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.00_2_jn61jf.jpg",
    "v1779819092",
    "Painel/gabinete metálico industrial recém-pintado com porta laranja sinalizadora"
  ),
  cabinetWhiteCart: photo(
    "WhatsApp_Image_2026-05-21_at_12.03.00_1_nqeje1.jpg",
    "v1779819091",
    "Gabinete metálico branco sobre rodas para uso industrial"
  ),
  yellowTubularStructure: photo(
    "WhatsApp_Image_2026-05-21_at_12.02.59_aaapol.jpg",
    "v1779819091",
    "Estrutura tubular metálica amarela sob medida fabricada pela MetalPev"
  ),
  stairsInoxTeam: photo(
    "WhatsApp_Image_2026-05-21_at_12.02.59_1_rnutgu.jpg",
    "v1779819090",
    "Equipe MetalPev em ação: técnicos com EPI instalando escada e plataforma em aço inox"
  ),
  blueContainer: photo(
    "WhatsApp_Image_2026-05-21_at_12.02.58_fbhpt8.jpg",
    "v1779819089",
    "Caçamba/container metálico azul sob medida em estrutura tubular"
  ),
};

/**
 * Galerias por slug de serviço. Use `getServiceGallery(slug)`.
 * A primeira foto é tratada como hero do serviço (substitui a `image` antiga).
 */
export const SERVICE_GALLERIES = {
  caldeiras: [PHOTOS.pressureVesselBeige, PHOTOS.pressureVesselGray, PHOTOS.pipingFlanges],
  "vasos-de-pressao": [PHOTOS.pressureVesselGray, PHOTOS.pressureVesselBeige],
  "tubulacoes-industriais": [PHOTOS.pipingFlanges, PHOTOS.platformYellowGuardrail],
  valvulas: [PHOTOS.pipingFlanges, PHOTOS.cabinetOrange],
  "escadas-mezaninos": [
    PHOTOS.stairsInoxTeam,
    PHOTOS.stairZIndoor,
    PHOTOS.catLadderYellow,
    PHOTOS.platformYellowGuardrail,
    PHOTOS.tanksVertical,
  ],
  manifolds: [PHOTOS.pipingFlanges],
  "nr-13": [PHOTOS.stairsInoxTeam, PHOTOS.pressureVesselGray, PHOTOS.platformYellowGuardrail],
  "reposicionamento-tanques": [
    PHOTOS.tanksVertical,
    PHOTOS.platformYellowGuardrail,
    PHOTOS.tanksCart,
  ],
  "soldas-inspecao": [PHOTOS.pressureVesselGray, PHOTOS.pipingFlanges, PHOTOS.pressureVesselBeige],
};

export function getServiceGallery(slug) {
  return SERVICE_GALLERIES[slug] || [];
}

/**
 * Vitrine de "Projetos sob medida": fotos que não pertencem diretamente a um serviço listado,
 * mas mostram capacidade técnica em estruturas metálicas customizadas.
 * Usada na nova seção da Home.
 */
export const CUSTOM_PROJECTS = [
  {
    photo: PHOTOS.cageYellow,
    title: "Cesta aérea industrial",
    desc: "Acesso seguro para manutenção em altura, com tela de proteção e fixação para empilhadeira.",
    tag: "Acesso e segurança",
  },
  {
    photo: PHOTOS.yellowTubularStructure,
    title: "Estrutura tubular sob medida",
    desc: "Projetos especiais em tubo redondo dobrado, com pintura epóxi de alta visibilidade.",
    tag: "Estrutura customizada",
  },
  {
    photo: PHOTOS.blueContainer,
    title: "Caçamba/container metálico",
    desc: "Containers e caçambas em chapa, com pintura industrial e proteção interna.",
    tag: "Movimentação",
  },
  {
    photo: PHOTOS.cabinetOrange,
    title: "Quadros e gabinetes metálicos",
    desc: "Fabricação e pintura de gabinetes técnicos, com sinalização e acabamento industrial.",
    tag: "Proteção de equipamentos",
  },
  {
    photo: PHOTOS.cabinetWhiteCart,
    title: "Gabinete móvel",
    desc: "Soluções com rodas para deslocamento interno, integrando estrutura, chapa e rodízios.",
    tag: "Movimentação",
  },
  {
    photo: PHOTOS.rackBlueParts,
    title: "Racks de movimentação",
    desc: "Racks metálicos para acondicionamento e movimentação de peças em planta produtiva.",
    tag: "Logística industrial",
  },
  {
    photo: PHOTOS.industrialCart,
    title: "Carrinhos industriais",
    desc: "Carrinhos planos para deslocamento de materiais e estruturas em ambientes fabris.",
    tag: "Logística industrial",
  },
  {
    photo: PHOTOS.tanksCart,
    title: "Tanques sobre carrinho",
    desc: "Conjunto pronto para movimentação, com estrutura, rodízios e fixação dos tanques.",
    tag: "Tanques",
  },
];

/**
 * Foto humanizada usada na home (AboutSnippet) e página Sobre.
 */
export const TEAM_IN_ACTION = PHOTOS.stairsInoxTeam;
