import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import VideoPage from "./components/VideoPage";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home setMode={setMode} mode={mode} type="rendom" />}
          />
          <Route
            path="/trends"
            element={<Home setMode={setMode} mode={mode} type="trends" />}
          />
          <Route
            path="/sub"
            element={<Home setMode={setMode} mode={mode} type="sub" />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="video/test"
            element={<VideoPage setMode={setMode} mode={mode} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
