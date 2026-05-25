import styles from "./Stat.module.scss";

export default function Stat({ value, label, tone = "dark" }) {
  const cls = [styles.stat, styles[`tone-${tone}`]].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
