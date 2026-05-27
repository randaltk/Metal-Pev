import Image from "next/image";
import styles from "./LogoMark.module.scss";

// ---------------------------------------------------------------------------
// Assets oficiais do logo MetalPev (versão "metal escovado" prata + vermelho)
// hospedados no Cloudinary. O cliente entregou dois arquivos separados que
// usamos de forma direta — sem precisar recortar o brasão a partir de um
// lockup vertical como fazíamos antes:
//
//   • variant="full": lockup horizontal completo (brasão prata/vermelho à
//     esquerda + wordmark "METALPEV / CALDEIRARIA E SOLDA" à direita). É o
//     que aparece no header.
//   • variant="icon" (default): brasão isolado em aspect 1:1 (engrenagem
//     vermelha + "M" prata + maçarico). Usado no footer e como favicon.
//
// Versões anteriores já testadas, prontas para reverter trocando as
// constantes (mantidas como referência histórica):
//   • Lockup horizontal anterior (mesma arte metálica, wordmark com
//     "METALPEV" em prata escovado — substituído pela tipografia
//     refinada/geométrica atual a pedido do cliente):
//       PATH        = "v1779904984/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/metalpev_logo_completo_ol80tc.png"
//       TRANSFORMS  = "e_background_removal/e_trim:10/f_png"
//       SIZE        = 1458×558
//   • Lockup vertical único (brasão metálico no topo, wordmark embaixo),
//     do qual recortávamos o brasão via c_crop,g_north,h_0.65,w_1.0:
//       PATH        = "v1779822564/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/backgroundmetalpev_je2p4x.png"
//       ICON_TX     = "c_crop,g_north,h_0.65,w_1.0/e_background_removal/e_trim:10/c_pad,b_transparent,ar_1:1/f_png"
//       FULL_TX     = "e_background_removal/e_trim:10/f_png"
//   • Lockup horizontal flat (brasão azul-aço, paleta antiga):
//       PATH        = "v1779824047/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/A55e35d41adcc45a893e83a3d1ff2efcdg_thlbwx.avif"
//       TRANSFORMS  = "e_background_removal/e_trim:10/f_png"
// ---------------------------------------------------------------------------
const CLOUDINARY_BASE = "https://res.cloudinary.com/aguadeira/image/upload";

// Lockup horizontal completo refinado (1536×1024 no Cloudinary). Brasão
// metálico prata + vermelho à esquerda, wordmark "METALPEV / CALDEIRARIA E
// SOLDA" à direita em tipografia geométrica/sans-serif (METALPEV em
// grafite, subtítulo em vermelho carmim). Usado no header.
const LOCKUP_PUBLIC_PATH =
  "v1779905869/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/metalpev_logo_refinado_d3fde6.png";

// Pipeline do lockup completo (header):
//   e_background_removal   garante alpha real mesmo se o asset original
//                          vier com qualquer fundo branco residual (o
//                          cliente entrega PNG mas algumas exportações
//                          mantêm um halo branco fino em volta da arte).
//   e_trim:10              corta padding transparente em volta da arte,
//                          garantindo que o lockup encoste nos limites
//                          da imagem e não "encolha" dentro de padding.
//   f_png                  transparência preservada; next/image reencoda
//                          para WebP/AVIF na entrega.
const LOCKUP_TRANSFORMS = "e_background_removal/e_trim:10/f_png";
// Dimensões reais do PNG após o pipeline FULL (verificadas via fl_getinfo:
// 1536×1024 → 1416×507 depois do bg_removal + trim, aspect ~2.79:1).
// Declarar o tamanho pós-pipeline alinha o aspect reservado pelo
// next/image ao que de fato chega no navegador — caso contrário o logo
// "encolheria" porque o next/image reservaria um retângulo de 1536×1024
// mas receberia 1416×507.
const LOCKUP_WIDTH = 1416;
const LOCKUP_HEIGHT = 507;

// Brasão isolado em aspect 1:1 (1248×1248 no Cloudinary). Usado no footer
// e como base do favicon.
const ICON_PUBLIC_PATH =
  "v1779904988/metalpev/WhatsApp_Unknown_2026-05-26_at_15.08.27_aoij0z/metalpev_brasao_isolado_lapstb.png";

// Pipeline do brasão isolado:
//   e_background_removal         alpha real (sem fundo branco vazando sobre
//                                fundos escuros do footer ou toolbar).
//   e_trim:10                    remove o padding transparente em volta do
//                                brasão; sem isso o ícone fica pequeno
//                                dentro da sua caixa em tamanhos menores.
//   c_pad,b_transparent,ar_1:1   garante aspect 1:1 após o trim, evitando
//                                que o ícone fique levemente retangular se
//                                a arte não for perfeitamente quadrada.
//   f_png                        preserva alpha; next/image reencoda para
//                                WebP/AVIF na entrega.
const ICON_TRANSFORMS =
  "e_background_removal/e_trim:10/c_pad,b_transparent,ar_1:1/f_png";
// Dimensões reais do PNG após o pipeline ICON (verificadas via fl_getinfo:
// 1248×1248 → 1043×1043 depois do bg_removal + trim + pad ar 1:1).
const ICON_SIZE = 1043;

const VARIANTS = {
  full: {
    src: `${CLOUDINARY_BASE}/${LOCKUP_TRANSFORMS}/${LOCKUP_PUBLIC_PATH}`,
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
 * Renderiza o lockup horizontal oficial (brasão + wordmark) ou o brasão
 * isolado, hospedados no Cloudinary com fundo removido via AI.
 *
 * @param {number} size  Altura em px; a largura preserva o aspect real da variante (horizontal para "full", 1:1 para "icon").
 * @param {"icon"|"full"} variant  "full" entrega o lockup horizontal completo (brasão + wordmark); "icon" entrega só o brasão recortado em aspect 1:1 (use em fundos escuros e em favicon).
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

  // O lockup completo tem detalhes finos (texto "CALDEIRARIA E SOLDA"
  // pequeno, hachuras metálicas) que ficam borrados no re-encoding default
  // do next/image (q_75). Pedimos q_90 — único valor que dá nitidez sem
  // inflar muito o peso do logo em PNG/WebP. Já o `sizes` é informado
  // como o dobro do width "nominal" para garantir que o browser sempre
  // escolha um slot de srcset 2x maior do que o tamanho display — isso
  // alimenta retina (DPR 2-3) em mobile, onde o problema aparecia.
  const sizesAttr = `${width * 2}px`;

  return (
    <Image
      src={v.src}
      alt={title || "MetalPev — Caldeiraria & Solda"}
      width={width}
      height={height}
      priority={priority}
      quality={90}
      sizes={sizesAttr}
      className={`${styles.logo} ${styles[variant]} ${className || ""}`.trim()}
    />
  );
}
