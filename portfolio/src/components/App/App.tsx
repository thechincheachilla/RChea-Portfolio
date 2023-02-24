import { ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { createDefaultTheme } from "../../themes";
import "./App.css";

export function App() {
  return (
    <>
      <ThemeProvider theme={createDefaultTheme()}>
        <Outlet />
      </ThemeProvider>
    </>
  );
}
