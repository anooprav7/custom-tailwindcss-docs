import React from "react";
import { useRouter } from "next/router";
import { ClassTable } from "components/ClassTable";
import { pageConfig } from "constants/pageConfig";

const PluginPage = () => {
  const router = useRouter();
  const { categoryKey, pluginKey } = router.query;
  const data = pageConfig?.pluginCategoryPages?.byCategory?.[categoryKey];

  if (!data) return null;

  const { byPlugin } = data;
  const plugin = byPlugin[pluginKey].plugin;
  const customProps = byPlugin?.[pluginKey]?.customProps || {}

  const ClassTables = (
    <>
      <h4 id={pluginKey} className="my-3 px-8">
        Plugin key : {pluginKey}
      </h4>
      <ClassTable
        plugin={plugin}
        key={pluginKey}
        pluginKey={pluginKey}
        {...customProps}
      />
    </>
  );

  return (
    <>
      <h2 className="mt-4 px-8">{categoryKey}</h2>
      <div>{ClassTables}</div>
    </>
  );
};
PluginPage.propTypes = {};
PluginPage.defaultProps = {};

export default PluginPage;
