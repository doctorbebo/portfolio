import React from "react";
import "./style.css"
import video from "./rain.mp4"

function Video ()
{
    const vidRef = React.createRef();

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) 
        {
            return (
                <div className="full black">

                </div>
                ); 
        }else
        {
            return (
                <div className="video">
                    <video
                    autoPlay = {true}
                    loop = {true}
                    muted = {true}
                    className = "video"
                    ref={vidRef}
                    src={video}
                    type="video/mp4"
                    />
                </div>
            );
        }
}


export default Video;
