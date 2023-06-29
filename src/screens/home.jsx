import { Box, ButtonBase, Typography } from "@mui/material";
import BlackBoard from "../assets/global/blackboard.png";

const Home = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <img
        style="position: relative"
        src={BlackBoard}
        width={"100%"}
        height={"100%"}
      ></img>
      <Typography sx={{ fontSize: 40 }}>Welcome!</Typography>
    </Box>
  );
};

export default Home;
