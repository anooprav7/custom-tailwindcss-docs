import { useContext } from "react";
import { TailwindConfigContext } from "contexts";
import ReactJson from "react-json-view";
import { generateDefaultConfig } from "utils";

export default function Config() {
  const [tailwindConfig] = useContext(TailwindConfigContext);
  const customConfig = generateDefaultConfig(tailwindConfig);
  return (
    <div className="mt-6">
      <main className="">Tailwindcss config</main>
      <div className="p-5 border-2 border-gray-100 shadow-md my-3 mb-6 rounded-md">
        <ReactJson src={tailwindConfig} />
      </div>
      <main className="">The Complete generated config</main>
      <div className="p-5 border-2 border-gray-100 shadow-md my-3 mb-6 rounded-md">
        <ReactJson src={customConfig} />
      </div>
    </div>
  );
}
