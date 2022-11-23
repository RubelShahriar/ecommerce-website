import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import Head from "next/head";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
