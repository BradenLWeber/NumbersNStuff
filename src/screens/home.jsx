import { Box, Typography } from "@mui/material";
import BlackBoard from "../assets/global/blackboard.jpg";

const Home = () => {
  return (
    <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
      <img
        src={BlackBoard}
        width={"100%"}
        height={"100%"}
        style={{ position: "absolute", zIndex: 0 }}
      ></img>
      <Box
        id="home-content"
        sx={{ height: "100%", width: "100%", zIndex: 10, position: "relative" }}
      >
        <Box
          id="title-bar"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            p: 60,
            alignItems: "flex-end",
            overflowY: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: 50,
              fontFamily: "Fredericka the Great",
              color: "white",
            }}
          >
            Mathematics for the addicts
          </Typography>
          <Typography
            sx={{ fontSize: 22, color: "white", mb: 10, fontWeight: 200 }}
          >
            Braden Weber
          </Typography>
        </Box>
        <Box
          id="explore-posts"
          sx={{
            mt: 30,
            height: 200,
            ml: 200,
            backgroundColor: "white",
            width: "calc(100% - 200px)",
            borderRadius: "20px 0px 0px 20px",
            display: "relative",
          }}
        >
          <Box
            id="explore-posts-colored-area-border"
            sx={{
              borderBottom: "200px solid transparent",
              borderRight: "120px solid #F0B08D",
              position: "absolute",
              left: 529,
            }}
          ></Box>
          <Box
            id="explore-posts-colored-area-rectangle"
            sx={{
              height: 200,
              width: "calc(100% - 649px)",
              position: "absolute",
              right: 0,
              backgroundColor: "#F0B08D",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
