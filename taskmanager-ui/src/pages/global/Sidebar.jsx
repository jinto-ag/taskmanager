import { Box, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

import AddTaskOutlined from "@mui/icons-material/AddTaskOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ChatOutlined from "@mui/icons-material/ChatOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledListItem = (label, link, icon, open) => (
  <ListItem key={label}  disablePadding sx={{ display: "block" }}>
    <ListItemButton
      key={link}
      component={Link}
      to={link}
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
        sx={{ opacity: open ? 1 : 0, textDecoration: "none" }}
      />
    </ListItemButton>
  </ListItem>
);

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navs = [
    { label: "Dashboard", link: "/", icon: <DashboardOutlined /> },
    { label: "Add task", link: "/task/create/", icon: <AddTaskOutlined /> },
    {
      label: "Task list",
      link: "/task/list/",
      icon: <FormatListBulletedOutlinedIcon />,
    },
    { label: "Assign task", link: "/", icon: <AssignmentIndOutlinedIcon /> },
    { label: "Recent activities", link: "/", icon: <AnalyticsOutlinedIcon /> },
    { label: "Chat", link: "/chat", icon: <ChatOutlined /> },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open ? (
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      <List>
        {navs.map((nav, index) =>
          StyledListItem(nav.label, nav.link, nav.icon, open)
        )}
      </List>
      {/* <Divider />*/}
    </Drawer>
  );
};

export default Sidebar;
