import { Box } from "@mui/system";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Video from "./Video";

const Home = ({ setMode, mode }) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <div className="App">
        <div className="gapContain" />
        <div className="container">
          <Sidebar setMode={setMode} mode={mode} />
          <Video />
        </div>
      </div>
    </Box>
  );
};

export default Home;
