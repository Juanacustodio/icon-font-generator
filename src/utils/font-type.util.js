const getFontTypeArgument = (processArgs) => {
  const args = processArgs.slice(2);

  if (args.length > 0) return args[0];
  return "";
};

export { getFontTypeArgument };
