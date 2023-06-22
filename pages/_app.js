import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "../styles/slide.module.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
