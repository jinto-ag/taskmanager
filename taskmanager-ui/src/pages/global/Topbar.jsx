import { SettingsOutlined } from "@mui/icons-material";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      component={"nav"}
      display={"flex"}
      justifyContent="space-between"
      borderBottom={`1px solid ${colors.neutral[90]}`}
      p={2}
      pb={1}
    >
      <Box display={"flex"} alignItems="center" gap={theme.spacing(1)}>
        <FormControl size="small" variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={"text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search tasks" edge="end">
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
      </Box>
      {/* Icons */}

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box display={"flex"} gap={theme.spacing(1)}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>

          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>

          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
