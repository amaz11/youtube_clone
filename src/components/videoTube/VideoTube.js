import { Box } from "@mui/material";
import React from "react";
import Card from "../Card";

const VideoTube = () => {
  return (
    <Box flex={7} p={1} m={1}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-evenly",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};

export default VideoTube;
