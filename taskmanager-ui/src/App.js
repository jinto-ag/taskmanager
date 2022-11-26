import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopNavigation from "./components/TopNavigation"

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const App = () => {
  return ( 
  <ThemeProvider theme={theme}>
    <TopNavigation></TopNavigation>
  </ThemeProvider>
  );
};

export default App;
