import styles from "./Section.module.scss";

export default function Section({
  as: Tag = "section",
  tone = "light",
  spacing = "default",
  id,
  className = "",
  children,
  ...rest
}) {
  const cls = [
    styles.section,
    styles[`tone-${tone}`],
    styles[`spacing-${spacing}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag id={id} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
