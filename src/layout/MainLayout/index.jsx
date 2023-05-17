import { Box } from "@mui/material";
import LandingPage from "../LandingPage";
const MainLayout = ({ darkTheme }) => {
  return (
    <Box
      sx={{
        height: "calc(100% - 70px);",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LandingPage darkTheme={darkTheme} />
    </Box>
  );
};
export default MainLayout;
