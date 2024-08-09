import { createTheme } from "@mui/material";
import "@fontsource/karla";
import "@fontsource/markazi-text";

const theme = createTheme({
  palette: {
    primary: {
      main: "#495E57",
    },
    secondary: {
      main: "#F4CE14",
    },
    warning: {
      main: "#edefee",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Karla, Arial, sans-serif",
    h1: {
      fontFamily: "Markazi Text, Arial, sans-serif",
    },
    h2: {
      fontFamily: "Markazi Text, Arial, sans-serif",
    },
    h3: {
      fontFamily: "Markazi Text, Arial, sans-serif",
    },
  },
});

export default theme;
