import React from "react";
import "./App.css";

import { create } from "jss";
import rtl from "jss-rtl";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../app/Routes";
import { I18nProvider } from "../_metronic/i18n";
import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronic/layout";
import {
  createMuiTheme,
  ThemeProvider,
  StylesProvider,
  jssPreset
} from "@material-ui/core/styles";
const theme = createMuiTheme({
  direction: "rtl",
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

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function App({ basename }) {
  return (
    <StylesProvider jss={jss}>
      {/* <CssBaseline /> */}
      {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
      <React.Suspense fallback={<LayoutSplashScreen />}>
        {/* Override `basename` (e.g: `homepage` in `package.json`) */}
        <BrowserRouter basename={basename}>
          {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
          <MaterialThemeProvider theme={theme}>
            {/* Provide `react-intl` context synchronized with Redux state.  */}
            <I18nProvider>
              <ThemeProvider theme={theme}>
                {/* Render routes with provided `Layout`. */}
                <Routes />
              </ThemeProvider>
            </I18nProvider>
          </MaterialThemeProvider>
        </BrowserRouter>
      </React.Suspense>
    </StylesProvider>
  );
}
