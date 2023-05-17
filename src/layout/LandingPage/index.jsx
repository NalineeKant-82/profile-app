import { Box, Button, TextField } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import ViewColumnRoundedIcon from "@mui/icons-material/ViewColumnRounded";
const LandingPage = ({ darkTheme }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        pt: "50px",
      }}
    >
      <Box
        width={1}
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField fullWidth label="Search" sx={{ width: [0.8, 0.5] }} />
        <Box>
          <Button
            sx={{
              background: darkTheme ? "#2d2d2d" : "white",
              minWidth: "166px",
              border: darkTheme ? "1px solid gray" : "1px solid #004488",
              color: darkTheme ? "white" : "#004488",
            }}
            startIcon={<PersonAddAlt1Icon />}
          >
            Create Profile
          </Button>
        </Box>
        <Box
          sx={{
            border: darkTheme ? "1px solid gray" : "1px solid #004488",
            borderRadius: "5px",
            display: ["none", "flex", "flex"],
          }}
        >
          <Button sx={{ color: darkTheme ? "grey" : "#004488" }}>
            <DensityMediumOutlinedIcon />
          </Button>
          <Button sx={{ color: darkTheme ? "grey" : "#004488" }}>
            <ViewColumnRoundedIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default LandingPage;
