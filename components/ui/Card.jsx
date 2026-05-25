import styles from "./Card.module.scss";

export default function Card({
  as: Tag = "article",
  interactive = false,
  tone = "light",
  className = "",
  children,
  ...rest
}) {
  const cls = [
    styles.card,
    styles[`tone-${tone}`],
    interactive && styles.interactive,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
