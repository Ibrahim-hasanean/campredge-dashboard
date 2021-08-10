import React from "react";
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
  direction: "rtl"
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function App({ basename }) {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
        <React.Suspense fallback={<LayoutSplashScreen />}>
          {/* Override `basename` (e.g: `homepage` in `package.json`) */}
          <BrowserRouter basename={basename}>
            {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
            <MaterialThemeProvider>
              {/* Provide `react-intl` context synchronized with Redux state.  */}
              <I18nProvider>
                {/* Render routes with provided `Layout`. */}
                <Routes />
              </I18nProvider>
            </MaterialThemeProvider>
          </BrowserRouter>
        </React.Suspense>
      </ThemeProvider>
    </StylesProvider>
  );
}
