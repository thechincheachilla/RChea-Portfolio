import { Theme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const fonts = `'DM Sans', 'Helvetica Neue', Helvetica,  sans-serif`;

export const typographyTheme = ({ breakpoints }: Theme): TypographyOptions => ({
  fontFamily: `Helvetica, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  h1: {
    fontFamily: fonts,
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: 1.21,
    [breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },
  h2: {
    fontFamily: fonts,
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.21,
    [breakpoints.up("sm")]: {
      fontSize: "1.75rem",
    },
  },
  h3: {
    fontFamily: fonts,
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.21,
  },
  h4: {
    fontFamily: fonts,
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.21,
  },
  h5: {
    fontFamily: fonts,
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.21,
  },
  h6: {
    fontFamily: fonts,
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.21,
  },
  subtitle1: {
    fontFamily: fonts,
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.21,
    [breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
  },
  subtitle2: {
    fontFamily: fonts,
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.21,
    [breakpoints.up("sm")]: {
      fontSize: "1.125rem",
    },
  },
  body1: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.21,
    [breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },
  body2: {
    fontSize: "0.625rem",
    fontWeight: 400,
    lineHeight: 1.21,
    [breakpoints.up("sm")]: {
      fontSize: "0.75rem",
    },
  },
  button: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.21,
    textTransform: "none",
    [breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },
});
