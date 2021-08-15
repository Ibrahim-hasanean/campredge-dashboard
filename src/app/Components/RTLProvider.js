import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  direction: "rtl", // Both here and <body dir="rtl">,
  typography: {
    fontFamily: ["Cairo", "sans-serif"].join(",")
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Cairo", "sans-serif"]
      }
    }
  }
});

const RTLProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default RTLProvider;
