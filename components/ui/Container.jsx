import styles from "./Container.module.scss";

export default function Container({ as: Tag = "div", size = "default", className = "", children, ...rest }) {
  const cls = [styles.container, size === "narrow" && styles.narrow, size === "wide" && styles.wide, className]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
