import {useState} from 'react'
import Head from "next/head";

import "styles/globals.css";
import "tailwindcss/tailwind.css";

import Layout from "components/layout";
import { TailwindConfigContext } from "contexts";
import customTailwindcssConfig from 'constants/customTailwindConfig'

function MyApp({ Component, pageProps }) {
  const tailwindConfigHook = useState(customTailwindcssConfig);
  
  return (
    <>
      <Head>
        <title>Custom Tailwindcss Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TailwindConfigContext.Provider value={tailwindConfigHook}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TailwindConfigContext.Provider>
    </>
  );
}

export default MyApp;
