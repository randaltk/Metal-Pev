import { useState } from "react";
import { Send } from "lucide-react";
import Button from "../ui/Button";
import { SITE, SERVICES } from "../../lib/site";
import styles from "./ContactForm.module.scss";

function buildWhatsAppMessage({ nome, empresa, email, telefone, servico, mensagem }) {
  const lines = [
    "Olá, MetalPev! Vim pelo site e gostaria de um orçamento.",
    "",
    `*Nome:* ${nome}`,
    empresa && `*Empresa:* ${empresa}`,
    `*E-mail:* ${email}`,
    `*Telefone:* ${telefone}`,
    servico && `*Serviço de interesse:* ${servico}`,
    "",
    `*Mensagem:*`,
    mensagem,
  ].filter(Boolean);
  return lines.join("\n");
}

const INITIAL = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  servico: "",
  mensagem: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    const text = buildWhatsAppMessage(values);
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Field label="Nome completo" name="nome" value={values.nome} onChange={handleChange} required />
        <Field label="Empresa" name="empresa" value={values.empresa} onChange={handleChange} />
      </div>
      <div className={styles.row}>
        <Field
          label="E-mail"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
          pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
        />
        <Field
          label="Telefone / WhatsApp"
          name="telefone"
          type="tel"
          placeholder="(11) 98765-4321"
          value={values.telefone}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="servico">Serviço de interesse</label>
        <select id="servico" name="servico" value={values.servico} onChange={handleChange}>
          <option value="">Selecione (opcional)</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="mensagem">Como podemos ajudar?</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={values.mensagem}
          onChange={handleChange}
          required
          minLength={10}
          placeholder="Descreva resumidamente seu equipamento, demanda e prazo."
        />
      </div>

      <div className={styles.actions}>
        <Button type="submit" variant="primary" size="lg" disabled={status === "sending"}>
          <Send size={18} aria-hidden />
          {status === "sending" ? "Abrindo WhatsApp…" : "Enviar para o WhatsApp"}
        </Button>
        <p className={styles.note}>
          Ao enviar você será redirecionado para o WhatsApp da MetalPev com a mensagem pronta.
        </p>
      </div>

      {status === "sent" ? (
        <p role="status" className={styles.success}>
          Pronto! Caso o WhatsApp não tenha aberto, clique novamente no botão.
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required, pattern, placeholder }) {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        autoComplete={
          name === "email"
            ? "email"
            : name === "telefone"
            ? "tel"
            : name === "nome"
            ? "name"
            : name === "empresa"
            ? "organization"
            : "off"
        }
      />
    </div>
  );
}
