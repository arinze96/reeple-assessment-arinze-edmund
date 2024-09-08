const colors = {
  primary: {
    main: "#060a2b",
    offset: "#298461",
    offset_light: "#246a69",
    offset_dark: "#076969",
    offset_night: "#19615f",
    offset_main: "#198a90",
    offset_one: "#47a4a9",
    offset_yellow: "#fec55b",
    10: "#fff",
    1000: "#000",
    1400: "#070f3a",
    400: "#7d7aff",
    500: "#4f4bff",
  },
  gray: {
    50: "#F3F3F3",
    100: "#e7e8e7",
    200: "#c4c5c3",
    300: "#a0a29f",
    400: "#787a76",
    500: "#646663",
    600: "#50524f",
    700: "#3c3d3b",
    800: "#282927",
    900: "#141414",
    1000: "#000",
    1100: "rgba(0, 0, 0, 0.2)",
  },
  surface: {
    bg: "#fdfdff",
    lightBg: "#fff",
    textfield: "#fdfdff",
    inactive: "#a2a0ff",
    descrip: "#fffbeb",
    dark: "#E6EEF8",
  },
  divider: {
    primary: "#E7E8E7",
    secondary: "#a0a29f",
  },
  texts: {
    main: "#141414",
    light: "#a0a29f",
    lighter: "#e7e8e7",
    white: "#fff",
    disabled: "#A0A29F",
    textgray: "#54577a",
  },
  alerts: {
    pending: "#e89913",
    success: "#32dd5d",
    success_dark: "green",
    paleSuccess: "#1ce9ab",
    palerSuccess: "#d1faee",
    error: "#ff0000",
    light_error: "#ff6666",
  },
  secondary: {
    main: "#f724bc",
    map: "#0fcfea",
  },
  border: {
    main: "#A0A29F",
    light: "#A0A29F",
    lighter: "#C4C5C3",
    dark: "#3C3D3B",
  },
  background: {
    extra3: "#FFF5CC",
  },
};

export const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];

const { divider, gray, primary, secondary, alerts, surface, texts } = colors;

export { divider, gray, primary, secondary, alerts, surface, texts };
export default colors;
