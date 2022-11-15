const outputTemplate = (fontType, formats) => {
  const outputPath = "icon-fonts";
  const baseFontName = "VivelaIcons";

  const fontName =
    fontType.length == 0
      ? baseFontName
      : `${baseFontName}-${capitalizeFirstLetter(fontType)}`;

  return {
    fonts: outputPath,
    fontName,
    formats,
  };
};

const capitalizeFirstLetter = (word) => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalized;
};

export { outputTemplate };
