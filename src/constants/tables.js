import pluginborderCollapse from "tailwindcss/lib/plugins/borderCollapse";
import plugintableLayout from "tailwindcss/lib/plugins/tableLayout";

export const KEY_TABLES = "tables";
export const tables = {
  title: "Effects",
  description: "Effects Desc",
  byPlugin: {
    borderCollapse: {
      title: "borderCollapse",
      description: "boxShadow desc",
      plugin: pluginborderCollapse
    },
    tableLayout: {
      title: "tableLayout",
      description: "boxShadow desc",
      plugin: plugintableLayout
    },
  },
  allPlugins: ["borderCollapse", "tableLayout"]
};
