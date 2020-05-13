import React from 'react';
import "./style.css";
import video from "./rain.mp4"
// import Navbar from "./components/Navbar";
import Body from "../components/Body";

function App() {
  const vidRef = React.createRef();
  console.log(vidRef)
  return (
    <div className="overflow-hide"> 
      <video
        autoPlay = {true}
        loop = {true}
        muted = {true}
        id = "myVideo"
        ref={vidRef}
        src={video}
        type="video/mp4"
      />
      <Body/>
    </div>
  );
}

export default App;
