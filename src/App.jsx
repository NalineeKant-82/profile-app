import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import MainLayout from "./layout/MainLayout";
import CustomAppBar from "./components/AppBar";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkTheme ? "dark" : "light",
      // primary: {
      //   main: "#0052cc",
      // },
      typography: {
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
    },
  });

  const changeThemeColor = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomAppBar darkTheme={darkTheme} changeThemeColor={changeThemeColor} />
        <MainLayout  darkTheme={darkTheme} />
      </ThemeProvider>
    </Box>
  );
}

export default App;
