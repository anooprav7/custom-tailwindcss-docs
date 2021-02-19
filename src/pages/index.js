import { useContext } from "react";
import { TailwindConfigContext } from "contexts";
import "tailwindcss/dist/tailwind.min.css";


export default function Home() {
  const [tailwindConfig, ] = useContext(TailwindConfigContext);
  return (
    <div className="">
        <main className="">The hOME</main>
        <pre>
          {JSON.stringify(tailwindConfig, null, 2)}
        </pre>
    </div>
  );
}
