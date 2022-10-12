import { Box } from "@mui/system";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import VideoTube from "./videoTube/VideoTube";

const Home = ({ setMode, mode, type }) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <div className="App">
        <div className="gapContain" />
        <div className="container">
          <Sidebar setMode={setMode} mode={mode} />
          <VideoTube type={type} />
        </div>
      </div>
    </Box>
  );
};

export default Home;
