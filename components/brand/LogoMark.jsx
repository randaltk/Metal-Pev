import { useId } from "react";
import styles from "./LogoMark.module.scss";

/**
 * Monograma MetalPev — badge industrial com referências de caldeiraria:
 *  - Canto superior direito chanfrado (chapa cortada a plasma)
 *  - "M" formado por duas chapas soldadas com costura central + rebites
 *  - Fagulha de solda emergindo da aresta de corte
 *  - Highlight metálico no topo e na aresta chanfrada
 *  - Viga inferior com rebites laterais
 */
export default function LogoMark({ size = 40, className, title }) {
  const uid = useId().replace(/:/g, "");
  const bgId = `lm-bg-${uid}`;
  const shineId = `lm-shine-${uid}`;
  const sparkId = `lm-spark-${uid}`;
  const edgeId = `lm-edge-${uid}`;
  const clipId = `lm-clip-${uid}`;

  // Badge com chanfro de 7px no canto superior direito
  const badgePath =
    "M 9,0 H 33 L 40,7 V 31 Q 40,40 31,40 H 9 Q 0,40 0,31 V 9 Q 0,0 9,0 Z";

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
    >
      <defs>
        <linearGradient id={bgId} x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#b32828" />
          <stop offset="55%" stopColor="#8b1a1a" />
          <stop offset="100%" stopColor="#560e0e" />
        </linearGradient>
        <linearGradient id={shineId} x1="0" y1="0" x2="0" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={edgeId} x1="33" y1="0" x2="40" y2="7" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={sparkId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f3fbff" stopOpacity="1" />
          <stop offset="30%" stopColor="#5fd3f0" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#0097c3" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0097c3" stopOpacity="0" />
        </radialGradient>
        <clipPath id={clipId}>
          <path d={badgePath} />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <path d={badgePath} fill={`url(#${bgId})`} />

        {/* Reflexo metálico no topo */}
        <rect x="0" y="0" width="40" height="22" fill={`url(#${shineId})`} />

        {/* Aresta chanfrada destacada (luz no corte) */}
        <line
          x1="33"
          y1="0.4"
          x2="39.6"
          y2="7"
          stroke={`url(#${edgeId})`}
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        {/* "M" — chapa esquerda */}
        <path
          d="M 7.2,9 L 13.2,9 L 19.55,20.5 L 19.55,27.5 L 13.2,17.8 L 13.2,32.5 L 7.2,32.5 Z"
          fill="#ffffff"
        />
        {/* "M" — chapa direita */}
        <path
          d="M 32.8,9 L 26.8,9 L 20.45,20.5 L 20.45,27.5 L 26.8,17.8 L 26.8,32.5 L 32.8,32.5 Z"
          fill="#ffffff"
        />
        {/* Costura central (sombra de junção) */}
        <line x1="20" y1="20.6" x2="20" y2="27.4" stroke="rgba(86,14,14,0.55)" strokeWidth="0.7" />
        {/* Pontos de solda / rebites na costura */}
        <circle cx="20" cy="22.6" r="0.85" fill="#ffffff" />
        <circle cx="20" cy="25.4" r="0.85" fill="#ffffff" />
        <circle cx="20" cy="22.6" r="0.32" fill="rgba(91,15,15,0.55)" />
        <circle cx="20" cy="25.4" r="0.32" fill="rgba(91,15,15,0.55)" />

        {/* Viga inferior (perfil rebitado) */}
        <rect x="9" y="35.2" width="22" height="1.4" rx="0.6" fill="rgba(255,255,255,0.5)" />
        <circle cx="10.4" cy="35.9" r="0.95" fill="rgba(255,255,255,0.9)" />
        <circle cx="29.6" cy="35.9" r="0.95" fill="rgba(255,255,255,0.9)" />

        {/* Borda interna sutil para definir o badge */}
        <path
          d="M 9,0.6 H 33 L 39.4,7 V 31 Q 39.4,39.4 31,39.4 H 9 Q 0.6,39.4 0.6,31 V 9 Q 0.6,0.6 9,0.6 Z"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.7"
          fill="none"
        />
      </g>

      {/* Fagulha de solda — emerge da aresta cortada, transborda o badge */}
      <g className={styles.spark}>
        <circle cx="36.4" cy="3.6" r="5.4" fill={`url(#${sparkId})`} />
        <circle cx="36.4" cy="3.6" r="1.5" fill="#f6fcff" />
        <circle cx="36.4" cy="3.6" r="0.6" fill="#ffffff" />
      </g>
    </svg>
  );
}
