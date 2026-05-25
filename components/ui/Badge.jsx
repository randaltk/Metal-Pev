import styles from "./Badge.module.scss";

export default function Badge({ tone = "primary", icon: Icon, children, className = "" }) {
  const cls = [styles.badge, styles[`tone-${tone}`], className].filter(Boolean).join(" ");
  return (
    <span className={cls}>
      {Icon ? <Icon size={14} aria-hidden /> : null}
      {children}
    </span>
  );
}
