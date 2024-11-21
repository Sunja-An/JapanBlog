export const getTechTag = (key: string) => {
  if (key === "NextJS") {
    return 1;
  } else if (key === "MAC") {
    return 2;
  } else if (key === "Desktop") {
    return 3;
  } else if (key === "Github") {
    return 4;
  } else if (key === "Javascript") {
    return 5;
  } else if (key === "NestJS") {
    return 6;
  } else if (key === "OS") {
    return 7;
  } else if (key === "reactLogo") {
    return 8;
  } else if (key === "Structure") {
    return 9;
  } else if (key === "typescriptLogo") {
    return 10;
  } else if (key === "nodeJsLogo") {
    return 11;
  } else if (key === "Diary") {
    return 12;
  } else {
    return false;
  }
};
