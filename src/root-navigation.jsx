import { Box, ButtonBase, Typography } from "@mui/material";
import { Color } from "./styles/Color";
import ChalkBrain from "./assets/global/ChalkBrain.png";
import TextButton from "./components/atoms/text-button";
import { useState } from "react";
import Home from "./screens/home";
import Posts from "./screens/posts";

function App() {
  const [tab, setTab] = useState("Home"); // Home, Posts, About, Playground

  return (
    <Box
      id="ScreenWrapper"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        id="'NavigationBar'"
        height={70}
        backgroundColor={Color.primary}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <ButtonBase
          id="Logo"
          sx={{ p: 5, pr: 15, borderRadius: "10px" }}
          onClick={() => setTab("Home")}
        >
          <img
            src={ChalkBrain}
            height={60}
            width={60}
            style={{ borderRadius: 10 }}
          ></img>
          <Typography ml={12} fontSize={40}>
            Math Addict
          </Typography>
        </ButtonBase>
        <Box mr={14} display="flex" flexDirection="row" columnGap={5}>
          <TextButton onClick={() => setTab("Posts")}>Posts</TextButton>
          <TextButton onClick={() => setTab("Playgrounds")}>
            Playgrounds
          </TextButton>
          <TextButton onClick={() => setTab("About")}>About</TextButton>
        </Box>
      </Box>
      <Box flex={1} backgroundColor={Color.light} overflow="auto">
        {tab === "Home" && <Home></Home>}
        {tab === "Posts" && <Posts></Posts>}
        {tab === "About" && "About"}
        {tab === "Playground" && "Playground"}
      </Box>
    </Box>
  );
}

export default App;
