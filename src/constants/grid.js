import plugingap from "tailwindcss/lib/plugins/gap";
import plugingridAutoColumns from "tailwindcss/lib/plugins/gridAutoColumns";
import plugingridAutoFlow from "tailwindcss/lib/plugins/gridAutoFlow";
import plugingridAutoRows from "tailwindcss/lib/plugins/gridAutoRows";
import gridColumnPlugin from "tailwindcss/lib/plugins/gridColumn";
import gridColumnStartPlugin from "tailwindcss/lib/plugins/gridColumnStart";
import gridColumnEndPlugin from "tailwindcss/lib/plugins/gridColumnEnd";
import gridRowPlugin from "tailwindcss/lib/plugins/gridRow";
import gridRowStartPlugin from "tailwindcss/lib/plugins/gridRowStart";
import gridRowEndPlugin from "tailwindcss/lib/plugins/gridRowEnd";
import plugingridTemplateColumns from "tailwindcss/lib/plugins/gridTemplateColumns";
import plugingridTemplateRows from "tailwindcss/lib/plugins/gridTemplateRows";

export const KEY_GRID = "grid";
export const grid = {
  title: "Grid",
  description: "Flexbox Desc",
  byPlugin: {
    gap: {
      title: "Gap",
      description: "Gap desc",
      plugin: plugingap
    },
    gridAutoColumns: {
      title: "Grid Auto Columns",
      description: "gridAutoColumns desc",
      plugin: plugingridAutoColumns
    },
    gridAutoFlow: {
      title: "Grid Auto Flow",
      description: "gridAutoColumns desc",
      plugin: plugingridAutoFlow
    },
    gridAutoRows: {
      title: "Grid Auto Rows",
      description: "gridAutoColumns desc",
      plugin: plugingridAutoRows
    },
    gridRow: {
      title: "Grid Rows",
      description: "gridRow desc",
      plugin: gridRowPlugin
    },
    gridRowStart: {
      title: "Grid Row Start",
      description: "gridRowStart desc",
      plugin: gridRowStartPlugin
    },
    gridRowEnd: {
      title: "Grid Row End",
      description: "gridRowEnd desc",
      plugin: gridRowEndPlugin
    },
    gridColumn: {
      title: "Grid Column",
      description: "gridColumnStartEnd desc",
      plugin: gridColumnPlugin
    },
    gridColumnStart: {
      title: "Grid Column Start",
      description: "gridColumnStartEnd desc",
      plugin: gridColumnStartPlugin
    },
    gridColumnEnd: {
      title: "Grid Column End",
      description: "gridColumnStartEnd desc",
      plugin: gridColumnEndPlugin
    },
    gridTemplateColumns: {
      title: "Grid Template Columns",
      description: "gridTemplateColumns desc",
      plugin: plugingridTemplateColumns
    },
    gridTemplateRows: {
      title: "Grid Template Rows",
      description: "gridTemplateRows desc",
      plugin: plugingridTemplateRows
    }
  },
  allPlugins: [
    "gap",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "gridTemplateColumns",
    "gridTemplateRows"
  ]
};
