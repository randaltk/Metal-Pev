import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            name="description"
            content="Caldeiraria & Instalações Industriais"
          />
          <link
            rel="icon"
            href="https://res.cloudinary.com/aguadeira/image/upload/v1621722709/public/favlogo_cizabe.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
