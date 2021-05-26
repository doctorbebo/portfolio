import React from "react";
import "./style.css";
import profile from "./profile.png";
import resume from "./Resume.pdf";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageSmaller: false,
    };
  }

  render() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 500 && !this.state.isImageSmaller) {
        this.setState({ isImageSmaller: true });
      }
      if (window.innerWidth > 500 && this.state.isImageSmaller) {
        this.setState({ isImageSmaller: false });
      }
    });
    return (
      <div className="holder">
        <div className={`info ${this.props.partitionSelected === "About Me" ? "info-transform" : "info-origin"}`}>
          <div className="">
            <div className="img-align">
              <img
                src={profile}
                alt=""
                id="profile-img"
                height={`${window.innerWidth < 500 ? "140px" : "240px"}`}
                width={`${window.innerWidth < 500 ? "150px" : "263px"}`}
              ></img>
            </div>
            <div>
              <p className="paragraph">
                {" "}
                &emsp; &emsp; My name is Byron Brown. I grew up on a small dairy farm in the great state Pennsylvania where farm life has taught me the
                importance of a great work ethic. I have a bachelor’s degree in commercial music from Liberty University. and a certificate of web development
                from the University of Washington. I have built and published my own video game and been a team member of a successful indie video game. I love
                to participate in hackathons so I can meet new friends and grow as a developer.{" "}
              </p>
              <p className="paragraph">
                {" "}
                &emsp; &emsp; With a desire to grow and a passion for programming, I’m always looking for the next big challenge to push me beyond my comfort
                zone. My analytical mindset and collaborative personality help me to solve difficult problems with a win-win solution. With the workplace
                environment and the latest technologies continuously changing, I pride myself in my ability to learn new skills fast and comprehensively in
                order to bounce from task to task effectively. Being a valuable member of a team comes easily with my attention to detail and ability to think
                outside the box.{" "}
              </p>
              <p className="paragraph">
                {" "}
                &emsp; &emsp; Whether it’s a movie or a board games, I am always down to hang out. I like everything sweet except chocolate or cake and I love
                rain. On a clear summer days, I love to hike, play backyard sports or play a fun table top RPG.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={`info ${this.props.partitionSelected === "Skills" ? "info-transform" : "info-origin"}`}>
          <div className="info-holder">
            <h1>Skills</h1>
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>HTML, CSS, JavaScript, C#, SQL, TypeScript</li>
            </ul>
            <h3>Frameworks/Libraries</h3>
            <ul className="skill-list">
              <li>React, Angular, Bootstrap, JQuery</li>
            </ul>
            <h3>Databases</h3>
            <ul className="skill-list">
              <li>MySQL & NoSQL </li>
            </ul>
            <h3>Other</h3>
            <ul className="skill-list">
              <li>Unity Game Engine, Git, Github</li>
            </ul>
            <h3>Soft Skills</h3>
            <ul className="skill-list">
              <li>Clear verbal and written communication</li>
              <li>Able to master new skills quickly and comprehensively</li>
              <li>Teamwork and problem-solving</li>
            </ul>
            <div className="link">
              <a href={resume} rel="noopener noreferrer" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className={`info ${this.props.partitionSelected === "Education" ? "info-transform" : "info-origin"}`}>
          <div className="info-holder">
            <h1>Education:</h1>
            <div className="border-top">
              <h2>University of Washington</h2>
              <h2>Certificate of Web Development</h2>
              <h2>2020</h2>
              <p className="paragraph">
                Full stack wed development bootcamp where I learned and mastered. HTML, CSS, JavaScript, JQuery, React, MySQL, NoSQL with a mobile-first
                responsive design.{" "}
              </p>
            </div>
            <div className="border-top">
              <h2>Liberty University</h2>
              <h2>Bachelor of Music Commercial Music: Film Scoring </h2>
              <h2>2017</h2>
              <p className="paragraph">
                Libral arts degree where I studied music and sound with an emphasis on excellent user experience and prefessional media
              </p>
            </div>
          </div>
        </div>
        <div className={`info ${this.props.partitionSelected === "Contact Me" ? "info-transform" : "info-origin"}`}>
          <div className="info-holder">
            <h1>Contact Me</h1>
            <h2>Byron Brown</h2>
            <h3>
              Phone Number: &emsp;{" "}
              <a className="contact-info" href="tel:+18145996428">
                +1 (814) 599-6428
              </a>
            </h3>
            <h3>
              Email: &emsp;{" "}
              <a className="contact-info" href="mailto:byronrb92@gmail.com">
                byronrb92@gmail.com
              </a>
            </h3>
            <h3>
              LinkedIn: &emsp;{" "}
              <a className="contact-info" href="https://www.linkedin.com/in/byron-r-brown/">
                https://www.linkedin.com/in/byron-r-brown/
              </a>
            </h3>
            <h3>
              Github Profile: &emsp;{" "}
              <a className="contact-info" href="https://github.com/doctorbebo">
                https://github.com/doctorbebo
              </a>
            </h3>
            <h3>
              Music Site: &emsp;{" "}
              <a className="contact-info" href="https://www.byronrbrownmusic.com/">
                https://www.byronrbrownmusic.com/
              </a>
            </h3>
          </div>
        </div>
        <div className={`info ${!this.props.partitionSelected ? "introduction-card" : "info-origin"}`}>
          <div className="info-holder text text-large">
            <h1 className="left">Hello,</h1>
            <h1 className="center">My Name is</h1>
            <h1 className="left name top-margin">Byron</h1>
            <h1 className="right name bottom-margin">Brown</h1>
            <h1 className="center">I'm a Software Engineer</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
