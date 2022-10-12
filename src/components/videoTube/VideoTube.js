import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { apibase } from "../../axios/axiosApi";
import Card from "../Card";

const VideoTube = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await apibase.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);
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
        {videos.map((video) => (
          <Card video={video} />
        ))}
      </Box>
    </Box>
  );
};

export default VideoTube;
