import Head from "next/head";
import Nav from "../components/Nav";
import "./styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Licorice</title>
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="og:title" content="Licorice" />
        <meta name="og:description" content="Licorice" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Licorice" />
        <meta name="twitter:description" content="Licorice" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
