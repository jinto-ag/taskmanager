import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          0: "#ffffff",
          10: "#fffbff",
          20: "#ffede7",
          30: "#ffdbcd",
          40: "#ffb596",
          50: "#ff8c56",
          60: "#e66e32",
          70: "#c4551a",
          80: "#a33f00",
          90: "#7c2e00",
          95: "#581e00",
          99: "#360f00",
          100: "#000000",
        },
        secondary: {
          0: "#ffffff",
          10: "#fffbff",
          20: "#ffede7",
          30: "#ffdbcd",
          40: "#e6bead",
          50: "#c9a393",
          60: "#ad897a",
          70: "#917061",
          80: "#77574a",
          90: "#5d4034",
          95: "#442a1f",
          99: "#2c160c",
          100: "#000000",
        },
        tertiary: {
          0: "#ffffff",
          10: "#fffbff",
          20: "#fdf2b6",
          30: "#efe3a9",
          40: "#d2c78f",
          50: "#b6ac76",
          60: "#9b915e",
          70: "#807847",
          80: "#675f30",
          90: "#4e471b",
          95: "#373106",
          99: "#201c00",
          100: "#000000",
        },
        error: {
          0: "#ffffff",
          10: "#fffbff",
          20: "#ffedea",
          30: "#ffdad6",
          40: "#ffb4ab",
          50: "#ff897d",
          60: "#ff5449",
          70: "#de3730",
          80: "#ba1a1a",
          90: "#93000a",
          95: "#690005",
          99: "#410002",
          100: "#000000",
        },
        neutral: {
          0: "#ffffff",
          10: "#fffbff",
          20: "#fbeeea",
          30: "#ede0db",
          40: "#d0c4c0",
          50: "#b4a9a5",
          60: "#998f8b",
          70: "#7f7572",
          80: "#655d59",
          90: "#4d4542",
          95: "#362f2c",
          99: "#201a18",
          100: "#000000",
        },
        neutralVariant: {
          0: "#ffffff",
          10: "#fffbff",
          20: "#ffede7",
          30: "#f5ded5",
          40: "#d8c2ba",
          50: "#bba79f",
          60: "#a08d85",
          70: "#85736c",
          80: "#6b5b54",
          90: "#53443d",
          95: "#3b2d28",
          99: "#251914",
          100: "#000000",
        },
      }
    : {
        primary: {
          0: "#000000",
          10: "#360f00",
          20: "#581e00",
          30: "#7c2e00",
          40: "#a33f00",
          50: "#c4551a",
          60: "#e66e32",
          70: "#ff8c56",
          80: "#ffb596",
          90: "#ffdbcd",
          95: "#ffede7",
          99: "#fffbff",
          100: "#ffffff",
        },
        secondary: {
          0: "#000000",
          10: "#2c160c",
          20: "#442a1f",
          30: "#5d4034",
          40: "#77574a",
          50: "#917061",
          60: "#ad897a",
          70: "#c9a393",
          80: "#e6bead",
          90: "#ffdbcd",
          95: "#ffede7",
          99: "#fffbff",
          100: "#ffffff",
        },
        tertiary: {
          0: "#000000",
          10: "#201c00",
          20: "#373106",
          30: "#4e471b",
          40: "#675f30",
          50: "#807847",
          60: "#9b915e",
          70: "#b6ac76",
          80: "#d2c78f",
          90: "#efe3a9",
          95: "#fdf2b6",
          99: "#fffbff",
          100: "#ffffff",
        },
        error: {
          0: "#000000",
          10: "#410002",
          20: "#690005",
          30: "#93000a",
          40: "#ba1a1a",
          50: "#de3730",
          60: "#ff5449",
          70: "#ff897d",
          80: "#ffb4ab",
          90: "#ffdad6",
          95: "#ffedea",
          99: "#fffbff",
          100: "#ffffff",
        },
        neutral: {
          0: "#000000",
          10: "#201a18",
          20: "#362f2c",
          30: "#4d4542",
          40: "#655d59",
          50: "#7f7572",
          60: "#998f8b",
          70: "#b4a9a5",
          80: "#d0c4c0",
          90: "#ede0db",
          95: "#fbeeea",
          99: "#fffbff",
          100: "#ffffff",
        },
        neutralVariant: {
          0: "#000000",
          10: "#251914",
          20: "#3b2d28",
          30: "#53443d",
          40: "#6b5b54",
          50: "#85736c",
          60: "#a08d85",
          70: "#bba79f",
          80: "#d8c2ba",
          90: "#f5ded5",
          95: "#ffede7",
          99: "#fffbff",
          100: "#ffffff",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[80],
            },
            secondary: {
              main: colors.secondary[80],
            },
            neutral: {
              dark: colors.neutral[99],
              main: colors.neutral[80],
              light: colors.neutral[10],
            },
            background: {
              default: colors.neutral[99],
            },
            typography: {
              fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
              fontSize: 12,
              h1: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 40,
              },
              h2: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 32,
              },
              h3: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 24,
              },
              h4: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 20,
              },
              h5: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 16,
              },
              h6: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 14,
              },
            },
          }
        : {
            primary: {
              main: colors.primary[40],
            },
            secondary: {
              main: colors.secondary[40],
            },
            neutral: {
              dark: colors.neutral[99],
              main: colors.neutral[40],
              light: colors.neutral[10],
            },
            background: {
              default: colors.neutral[99],
            },
            typography: {
              fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
              fontSize: 12,
              h1: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 40,
              },
              h2: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 32,
              },
              h3: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 24,
              },
              h4: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 20,
              },
              h5: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 16,
              },
              h6: {
                fontFamily: ["Poppins", "Dosis", "sans-serif"].join(","),
                fontSize: 14,
              },
            },
          }),
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
