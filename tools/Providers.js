"use client";
import React from "react";

import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = (outerTheme) =>
  createTheme({
    direction: "rtl",
    palette: {
      mode: outerTheme.palette?.mode || "light", // Providing a default value if outerTheme.palette or outerTheme.palette.mode is undefined
    },
  });

const cache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Providers = ({ children }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default Providers;
