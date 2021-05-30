import { useForm } from "@formspree/react";
import styles from "../styles/Home.module.scss";
export default function Upload() {
  const [state, handleSubmit] = useForm("mdoygdoj");

  return (
    <>
      <form
        id="fs-frm"
        accept-charset="utf-8"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mdoygdoj"
        method="POST"
        enctype="multipart/form-data"
      >
        <label for="Nome" class="mark">
          Nome
        </label>
        <input type="text" name="name" placeholder="Digite seu nome" required />

        <label for="Email" class="mark">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Digite seu e-mail"
          required
        />
        <label for="Telefone ">Telefone</label>
        <input
          placeholder="55 11 98876-5432"
          type="number"
          name="phone"
          required
        />

        <label for="Mensagem" class="mark">
          Mensagem
        </label>
        <textarea type="text" name="message" required />

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
