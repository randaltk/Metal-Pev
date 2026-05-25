import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  external = false,
  ...rest
}) {
  const cls = [
    styles.btn,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (external || /^https?:/.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={cls}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const Tag = as || "button";
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
