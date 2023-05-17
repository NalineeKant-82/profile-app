import { Box } from "@mui/material";
import LandingPage from "../LandingPage";
const MainLayout = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >   
      <LandingPage />
    </Box>
  );
};
export default MainLayout;
