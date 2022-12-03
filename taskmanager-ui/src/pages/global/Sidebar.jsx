import {
  HelpOutlineOutlined,
  MenuOutlined,
  PersonOutlineOutlined,
  RunCircleOutlined,
  TaskOutlined,
} from "@mui/icons-material";
import AddTaskOutlined from "@mui/icons-material/AddTaskOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ChatOutlined from "@mui/icons-material/ChatOutlined";
import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import {
  Menu,
  menuClasses,
  MenuItem,
  Sidebar as ProSidebar,
  sidebarClasses,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      routerLink={<Link to={to} />}
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      rootStyles={{
        ["." + menuClasses.button]: {
          borderRadius: theme.shape.pillRadius,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        },
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, toggled } =
    useProSidebar();

  return (
    <Box mr={1} height="100%" display="flex">
      <ProSidebar
        breakPoint="xs"
        transitionDuration={700}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.neutral[95],
          },
          border: "none",
        }}
      >
        <Menu
          rootStyles={{
            [`.${menuClasses.button}`]: {
              marginInline: "8px",
              display: "flex",
              justifyContent: "center",
            },
            [`.${menuClasses.icon}`]: {},
          }}
          menuItemStyles={{
            paddingInline: "8px",
            button: ({ level, active, disabled }) => {
              return {
                color: disabled
                  ? theme.palette.text.disabled
                  : theme.palette.text.primary,
                backgroundColor: active
                  ? theme.palette.primary.main
                  : undefined,
                gap: collapsed ? 0 : undefined,
              };
            },
            icon: ({ level }) => {
              return {
                margin: collapsed ? 0 : undefined,
              };
            },
          }}
        >
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={<MenuOutlined />}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Task Manager</Typography>
          </MenuItem>
          <Item
            title="Dashboard"
            icon={<DashboardOutlined />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <Item
            title="Create Task"
            icon={<AddTaskOutlined />}
            selected={selected}
            setSelected={setSelected}
            to="/task/create/"
          />
          <Item
            title="My Tasks"
            icon={<TaskOutlined />}
            selected={selected}
            setSelected={setSelected}
            to="/task/list/"
          />
          <Item
            title="Assigned Tasks"
            icon={<AssignmentIndOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <Item
            title="Recent Activities"
            icon={<RunCircleOutlined />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <Item
            title="Collaborators"
            icon={<PersonOutlineOutlined />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <Item
            title="Reports"
            icon={<AnalyticsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <Item
            title="Chat"
            icon={<ChatOutlined />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
          <Item
            title="Help"
            icon={<HelpOutlineOutlined />}
            selected={selected}
            setSelected={setSelected}
            to="/"
          />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
