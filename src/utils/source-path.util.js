import path from "path";
import fs from "fs";
import process from "process";

import { getFontTypeArgument } from "./font-type.util.js";

const getSvgIconSourcePath = (processArgs) => {
  const defaultPath = "resources/svg-icons";

  const fontType = getFontTypeArgument(processArgs);

  const sourcePath =
    fontType.length == 0
      ? path.join(defaultPath)
      : path.join(defaultPath, fontType);

  return `${sourcePath}/*.svg`;
};

const getSvgIconSourcePathBuildrFormat = (path) => {
  return path.replace("*", "[icon]");
};

export { getSvgIconSourcePath, getSvgIconSourcePathBuildrFormat };
