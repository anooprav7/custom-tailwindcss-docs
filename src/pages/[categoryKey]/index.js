import React from "react";
import { useRouter } from "next/router";
import { ClassTable } from "components/ClassTable";
import { pageConfig } from "constants/pageConfig";
import Layout from "components/layout";

const CategoryPage = () => {
  const router = useRouter();
  const { categoryKey } = router.query;
  const data = pageConfig?.pluginCategoryPages?.byCategory?.[categoryKey];

  if (!data) return null;

  const { byPlugin, allPlugins } = data;
  const ClassTables = allPlugins.map((pluginKey) => {
    const plugin = byPlugin[pluginKey].plugin;
    const customProps = byPlugin?.[pluginKey]?.customProps || {}
    return (
      <>
        <h4 id={pluginKey} className="my-3">{pluginKey}</h4>
        <ClassTable plugin={plugin} key={pluginKey} pluginKey={pluginKey} {...customProps}/>
      </>
    );
  });

  return (
    <Layout>
      <h2>{categoryKey}</h2>
      <div>{ClassTables}</div>
    </Layout>
  );
};
CategoryPage.propTypes = {};
CategoryPage.defaultProps = {};

export default CategoryPage;
