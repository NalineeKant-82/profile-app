import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import MainLayout from "./layout/MainLayout";
import CustomAppBar from "./components/AppBar";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkTheme ? "dark" : "light",
      primary: {
        main: "#0052cc",
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
        <CustomAppBar check={darkTheme} changeThemeColor={changeThemeColor} />
        <MainLayout />
      </ThemeProvider>
    </Box>
  );
}

export default App;
