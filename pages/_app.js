import "../styles/globals.scss";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> MetalPev - Caldeiraria & Instalações Industriais</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
