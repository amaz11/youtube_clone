import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import VideoTube from "./components/videoTube/VideoTube";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <div className="App">
          <Navbar />
          <div className="gapContain" />
          <div className="container">
            <Sidebar setMode={setMode} mode={mode} />
            <VideoTube />
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
