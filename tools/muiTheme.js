const { createTheme } = require("@mui/material");

const theme = createTheme({
    typography: {
        fontFamily: [
          'vaziri',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ].join(','),
      }
    
  });

  export default theme;