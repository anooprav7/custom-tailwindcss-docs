import Head from "next/head";
import { ClassTable } from "components/ClassTable";
import pluginBgPosition from "tailwindcss/lib/plugins/backgroundPosition";
import pluginFontSize from "tailwindcss/lib/plugins/fontSize";
// import * as plugins from "tailwindcss/lib/plugins/index";
import Layout from "components/layout";
import "tailwindcss/dist/tailwind.min.css";

export default function Home() {
  return (
    <div className="">
        <main className="">The hOME</main>
    </div>
  );
}
