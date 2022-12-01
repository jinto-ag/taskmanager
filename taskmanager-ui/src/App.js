import { Box, CssBaseline, Divider, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import ProfileDetail from "./pages/Profile/ProfileDetail";
import TaskDetail from "./pages/Task/TaskDetail";
import TaskForm from "./pages/Task/TaskForm";
import TaskList from "./pages/Task/TaskList";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
            <Topbar position={"fixed"} />
            <Box display={"flex"} component="main">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/signup/" element={<Signup />} />
                <Route path="/profile/detail/" element={<ProfileDetail />} />
                <Route path="/task/create/" element={<TaskForm />} />
                <Route path="/task/list/" element={<TaskList />} />
                <Route path="/task/update/" element={<TaskForm />} />
                <Route path="/task/detail/" element={<TaskDetail />} />
                <Route path="/chat/" element={<Chat />} />
              </Routes>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
