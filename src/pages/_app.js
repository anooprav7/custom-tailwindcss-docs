import {useState} from 'react'
import Head from "next/head";
import Router from 'next/router'
import "styles/globals.css";
import "tailwindcss/tailwind.css";
import ProgressBar from '@badrap/bar-of-progress'

import Layout from "components/layout";
import { TailwindConfigContext } from "contexts";
import customTailwindcssConfig from 'constants/customTailwindConfig'

const progress = new ProgressBar({
  size: 2,
  color: '#22D3EE',
  className: 'bar-of-progress',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', () => {
  progress.finish()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', progress.finish)

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
