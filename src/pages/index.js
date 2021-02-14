import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { ClassTable } from 'components/ClassTable'
import pluginBgPosition from "tailwindcss/lib/plugins/backgroundPosition";
import pluginFontSize from "tailwindcss/lib/plugins/fontSize";
import "tailwindcss/dist/tailwind.min.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Tailwindcss Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ClassTable plugin={pluginBgPosition}/>
        <ClassTable plugin={pluginFontSize}/>
        </main>
    </div>
  )
}
