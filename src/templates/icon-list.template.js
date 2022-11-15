import path from "path";
import { snakeCase } from "snake-case";

const iconListTemplate = (iconList) => {
  const newList = iconList.map((item, idx) => {
    const fileName = path.parse(item.name).name;

    const newItem = {
      icon: fileName,
      name: fileName,
      ligatures: [snakeCase(fileName)],
    };

    return newItem;
  });

  return newList;
};

export { iconListTemplate };
