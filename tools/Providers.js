"use client"
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = (outerTheme) =>
  createTheme({
    direction: 'rtl',
    palette: {
      mode: outerTheme.palette?.mode || 'light', // Providing a default value if outerTheme.palette or outerTheme.palette.mode is undefined
    },
  });


const cache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default Providers;
