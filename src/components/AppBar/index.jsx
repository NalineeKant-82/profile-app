import { AppBar, Box, Switch, Toolbar, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const CustomAppBar = ({ darkTheme, changeThemeColor }) => {
  return (
    <AppBar
      position="static"
      sx={{
        height: "70px",
        width: 1,
        backgroundColor: darkTheme ? "#181818" : "white",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: darkTheme ? "white" : "black" }}>
          News
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <WbSunnyIcon sx={{ color: darkTheme ? "gray" : "black" }} />
          <Switch defaultChecked color="default" onClick={changeThemeColor} />
          <DarkModeIcon sx={{ color: darkTheme ? "white" : "gray" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default CustomAppBar;
