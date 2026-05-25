import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../lib/site";
import styles from "./WhatsAppFloat.module.scss";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappUrl("Olá, MetalPev! Vim pelo site e gostaria de um orçamento.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a MetalPev no WhatsApp"
      className={`${styles.float} ${visible ? styles.visible : ""}`}
    >
      <MessageCircle size={28} strokeWidth={2.2} aria-hidden />
      <span className={styles.label}>Fale no WhatsApp</span>
    </a>
  );
}
