import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
