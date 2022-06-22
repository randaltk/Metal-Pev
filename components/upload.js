import { useForm } from "@formspree/react";
import styles from "../styles/Home.module.scss";
export default function Upload() {
  const [state, handleSubmit] = useForm("mdoygdoj");
  //testee
  return (
    <>
      <form
        id="fs-frm"
        acceptCharset="utf-8"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mdoygdoj"
        method="POST"
        encType="multipart/form-data"
      >
        <label htmlFor="Nome">Nome</label>
        <input
          id="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="email"
          id="Email"
          placeholder="Digite seu e-mail"
          required
        />
        <label htmlFor="Telefone">Telefone</label>
        <input
          id="Telefone"
          placeholder="55 11 98876-5432"
          type="number"
          name="phone"
          required
        />

        <label htmlFor="Mensagem">Mensagem</label>
        <textarea id="Mensagem" type="text" name="message" required />

        {state.succeeded ? (
          <p>Obrigado! Nós entraremos em contato em breve</p>
        ) : (
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.btnDefault}
          >
            Enviar
          </button>
        )}
      </form>
    </>
  );
}
