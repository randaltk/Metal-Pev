import Image from "next/image";
import styles from "./LogoMark.module.scss";

// ---------------------------------------------------------------------------
// Asset oficial do logo MetalPev hospedado no Cloudinary.
// Lockup horizontal definitivo (brasão + wordmark "METALPEV CALDEIRARIA E
// SOLDA" integrados na mesma arte), 1264×848. Já vem nas cores novas
// (cinza grafite + vermelho carmim + azul aço) e ocupa todo o frame —
// dispensa o padding/trim que precisávamos nas versões só-ícone.
//
// Outras versões já testadas, prontas para reverter trocando a constante:
//   • Lockup horizontal anterior (brasão metálico, paleta antiga):
//       PATH = "v1779822590/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/A068c027963204a309b8481b60d07b88ce_kifwut.avif"
//       TRANSFORMS = "e_background_removal/e_trim:10/c_pad,b_transparent,ar_1:1/f_png"
//   • Ícone flat colorido (vermelho + cyan, com dropshadow nativo):
//       PATH = "v1779822551/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/A4a09baf91e9e49ec9cffd999af15674c2_a8fiu5.avif"
//       TRANSFORMS = "e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/f_png"
//   • Brasão metálico original + wordmark embutido (JPG):
//       PATH = "v1779819223/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/Design_sem_nome_1.jpg_ejvx8t.jpg"
//       TRANSFORMS = "e_background_removal/f_png"
// ---------------------------------------------------------------------------
const CLOUDINARY_BASE = "https://res.cloudinary.com/aguadeira/image/upload";

// Lockup horizontal (brasão + wordmark "METALPEV CALDEIRARIA E SOLDA"),
// usado no header e fundos claros.
const LOCKUP_PUBLIC_PATH =
  "v1779824047/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/A55e35d41adcc45a893e83a3d1ff2efcdg_thlbwx.avif";

// Pipeline do lockup completo (header / fundos claros):
//   e_background_removal   remove o fundo branco da arte original via AI,
//                          deixando o lockup com transparência real.
//   e_trim:10              corta qualquer borda transparente residual,
//                          garantindo que o lockup encoste nos limites
//                          da imagem e não "encolha" dentro de padding.
//   f_png                  transparência preservada; next/image reencoda
//                          para WebP/AVIF na entrega.
const FULL_TRANSFORMS = "e_background_removal/e_trim:10/f_png";

// Dimensões reais do PNG entregue pelo Cloudinary APÓS o pipeline FULL
// (consultadas via fl_getinfo: input 1264×848 → output 1115×360 depois do
// background_removal + trim). O arquivo original tem ~488px de padding
// transparente vertical; declarar as dimensões pós-trim alinha o aspect
// reservado pelo next/image ao que de fato chega no navegador e mantém o
// lockup ocupando toda a sua caixa — caso contrário o logo "encolhe"
// porque o next/image reserva um retângulo de 1264×848 mas recebe 1115×360.
const LOCKUP_WIDTH = 1115;
const LOCKUP_HEIGHT = 360;

// Brasão isolado (só ícone, sem wordmark) — versão flat colorida entregue
// pelo cliente em 1024×1024 (engrenagem vermelha + "M" azul aço + maçarico).
// Usado no footer, favicon e em qualquer lugar que precise do ícone em
// aspect 1:1.
//   e_background_removal         alpha real (sem fundo branco vazando sobre
//                                fundos escuros do footer ou toolbar).
//   e_trim:10                    remove o padding transparente em volta do
//                                brasão (a arte original ocupa só ~60% do
//                                frame de 1024×1024; sem trim o ícone ficava
//                                visualmente pequeno dentro da sua caixa).
//   c_pad,b_transparent,ar_1:1   garante aspect 1:1 após o trim, evitando
//                                que o ícone fique levemente retangular se
//                                a arte não for perfeitamente quadrada.
//   f_png                        preserva alpha; next/image reencoda para
//                                WebP/AVIF na entrega.
const ICON_PUBLIC_PATH =
  "v1779822551/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/A4a09baf91e9e49ec9cffd999af15674c2_a8fiu5.png";
const ICON_TRANSFORMS =
  "e_background_removal/e_trim:10/c_pad,b_transparent,ar_1:1/f_png";
// Dimensões reais do PNG após o pipeline ICON (consultadas via fl_getinfo:
// 1024×1024 → 604×604 depois do trim). Declarar o tamanho pós-trim alinha o
// aspect reservado pelo next/image ao que de fato chega no navegador.
const ICON_SIZE = 604;

const VARIANTS = {
  full: {
    src: `${CLOUDINARY_BASE}/${FULL_TRANSFORMS}/${LOCKUP_PUBLIC_PATH}`,
    width: LOCKUP_WIDTH,
    height: LOCKUP_HEIGHT,
  },
  icon: {
    src: `${CLOUDINARY_BASE}/${ICON_TRANSFORMS}/${ICON_PUBLIC_PATH}`,
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
};

/**
 * Logo institucional MetalPev — Caldeiraria & Solda.
 * Renderiza o lockup horizontal oficial (brasão + wordmark) hospedado no
 * Cloudinary, com fundo removido via AI.
 *
 * @param {number} size  Altura em px; a largura preserva o aspect real da variante (horizontal para "full", 1:1 para "icon").
 * @param {"icon"|"full"} variant  "full" entrega o lockup horizontal completo (brasão + wordmark); "icon" entrega só o brasão recortado em aspect 1:1 (use em fundos escuros).
 * @param {string} className
 * @param {string} title  Quando informado, define alt acessível para a imagem.
 * @param {boolean} priority  Encaminha para next/image (use no logo do header).
 */
export default function LogoMark({
  size = 48,
  variant = "icon",
  className,
  title,
  priority = false,
}) {
  const v = VARIANTS[variant] ?? VARIANTS.icon;
  const aspect = v.width / v.height;
  const height = size;
  const width = Math.round(size * aspect);

  return (
    <Image
      src={v.src}
      alt={title || "MetalPev — Caldeiraria & Solda"}
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={`${styles.logo} ${styles[variant]} ${className || ""}`.trim()}
    />
  );
}
