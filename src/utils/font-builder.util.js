import IconFontBuildr from "icon-font-buildr";
import { printTable } from "console-table-printer";

const buildIconFont = (config) => {
  const builder = new IconFontBuildr(config);
  const ligatures = builder.getIconsLigatures();

  printLigaturesInformation(ligatures);

  builder.build();
};

const printLigaturesInformation = (ligatures) => {
  const newLigatures = Object.keys(ligatures).map((item, index) => {
    return {
      index: index + 1,
      icon: Object.keys(ligatures)[index] + ".svg",
      ligature: Object.values(ligatures)[index],
    };
  });

  printTable(newLigatures);
};

export { buildIconFont };
