import process from "process";

import { getSvgIconSourcePath } from "./src/utils/source-path.util.js";
import { generateConfigFile } from "./src/utils/config-file.util.js";
import { getFontTypeArgument } from "./src/utils/font-type.util.js";
import { buildIconFont } from "./src/utils/font-builder.util.js";

const args = process.argv;

const sourcePath = getSvgIconSourcePath(args);
const fontType = getFontTypeArgument(args);
const configFile = generateConfigFile(sourcePath, fontType);

buildIconFont(configFile);
