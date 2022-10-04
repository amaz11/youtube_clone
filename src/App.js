import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import VideoTube from "./components/videoTube/VideoTube";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <VideoTube />
      </div>
    </div>
  );
}

export default App;
