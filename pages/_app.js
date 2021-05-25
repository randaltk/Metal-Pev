import "../styles/globals.scss";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> MetalPev - Caldeiraria & Instalações Industriais</title>
        <script>UPLOADCARE_PUBLIC_KEY = '504fd3e26ee6979a38bb';</script>

        <script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
