import { BreakpointsOptions, createTheme } from "@mui/material";
import { palette } from "./palette";
import { typographyTheme } from "./typography";

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 920,
    lg: 1120,
    xl: 1500,
  },
};

export const createDefaultTheme = () => {
  return createTheme({
    breakpoints,
    palette: {
      ...palette,
    },
    typography: typographyTheme(createTheme()),
  });
};
