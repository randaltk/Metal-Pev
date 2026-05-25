import "../styles/globals.scss";
import { Inter } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsAppFloat from "../components/layout/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.variable} style={{ fontFamily: "var(--font-inter)" }}>
      <Header />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
