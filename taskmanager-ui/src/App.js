import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navigation from "./components/Navigation/Navigation";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

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
      <Box>
        <Navigation></Navigation>
        <Stack direction={"row"} justifyContent={"space-between"} spacing={1}>
          <Sidebar
            position={"left-top"}
            sx={{ backgroundColor: theme.palette.background }}
            flex={1}
          ></Sidebar>
          <Main flex={6}></Main>
          <Sidebar position={"right-top"} flex={1}></Sidebar>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
