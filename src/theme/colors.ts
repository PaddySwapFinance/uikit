import { Colors } from "./types";

export const baseColors = {
  failure: "#cd3e5f",
  primary: "#41aa29",
  primaryBright: "#50aa29",
  primaryDark: "#348c22",
  secondary: "#45d9bb",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F6F6F7",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  title: "#41aa29", //
  text: "#1B1464",
  textDisabled: "#BDC2C4",
  textSubtle: "#1B1464",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  nav: "#f9fdf9",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#52D784", //  
  background: "#1F2B46", //
  backgroundDisabled: "#424037", //
  contrast: "#FFFFFF",
  invertedContrast: "#262513",
  input: "#483F5A",
  primaryDark: "#8f8104",
  tertiary: "#28444A", //
  title: "#41aa29", //
  text: "#fcfae2", //
  textDisabled: "#717161", //
  textSubtle: "#52D784", //
  borderColor: "#61634b",
  card: "#0D0F22", //
  nav: "#0D0F22", //
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)", //
  },
};
