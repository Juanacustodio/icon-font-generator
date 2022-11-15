import fg from "fast-glob";

import { iconListTemplate } from "../templates/icon-list.template.js";
import { outputTemplate } from "../templates/output.template.js";

import { getSvgIconSourcePathBuildrFormat } from "./source-path.util.js";

const generateConfigFile = (sourcePath, fontType) => {
  const outputFormats = ["ttf"];
  const baseList = fg.sync(sourcePath, { objectMode: true });

  const fileSources = [getSvgIconSourcePathBuildrFormat(sourcePath)];

  const fileIcons = iconListTemplate(baseList);

  const fileOutput = outputTemplate(fontType, outputFormats);

  return {
    sources: fileSources,
    icons: fileIcons,
    output: fileOutput,
  };
};

export { generateConfigFile };
