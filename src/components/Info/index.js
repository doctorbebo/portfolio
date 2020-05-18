import React from "react"; 
import "./style.css";
import profile from "./profile.png"

function Info (props)
{

    return (
        <div className = "holder">
            <div className= {`info ${props.partitionSelected === "About Me" ? "info-transform" : "info-origin" }`}>
                <div className="">
                    <div className="img-align">
                        <img src={profile} alt="" className="img-align"></img>
                    </div>
                    <div>
                        <p className = "paragraph"> &emsp; &emsp; My name is Byron Brown. I grew up on a small dairy farm in the great state Pennsylvania where farm life has taught me the importance of a great work ethic. I have a bachelor’s degree in commercial music from Liberty University. and a certificate of web development from the University of Washington. I have built and published my own video game and been a team member of a successful indie video game. I love to participate in hackathons so I can meet new friends and grow as a developer. </p>
                        <p className = "paragraph"> &emsp; &emsp; With a desire to grow and a passion for programming, I’m always looking for the next big challenge to push me beyond my comfort zone. My analytical mindset and collaborative personality help me to solve difficult problems with a win-win solution. With the workplace environment and the latest technologies continuously changing, I pride myself in my ability to learn new skills fast and comprehensively in order to bounce from task to task effectively. Being a valuable member of a team comes easily with my attention to detail and ability to think outside the box. </p>
                        <p className = "paragraph"> &emsp; &emsp; Whether it’s a movie or a board games, I am always down to hang out. I like everything sweet except chocolate or cake. On a clear summer days, I love to hike, play backyard sports or play a fun table top RPG. </p>
                    </div>
                </div>
            </div>
            <div className= {`info ${props.partitionSelected === "Skills" ? "info-transform" : "info-origin" }`}>
                <div className="">Skills</div>
            </div>  
            <div className= {`info ${props.partitionSelected === "Test 1" ? "info-transform" : "info-origin" }`}>
                <div className="">Test 1</div>
            </div>  
            <div className= {`info ${props.partitionSelected === "Test 2" ? "info-transform" : "info-origin" }`}>
                <div className="">Test 2</div>
            </div> 
            <div className= {`info ${!props.partitionSelected ? "introduction-card" : "info-origin" }`}>
                <div className="">Test 2</div>
            </div>               
        </div>
    )
} 

export default Info;
