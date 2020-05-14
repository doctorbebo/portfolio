import React from 'react';
import "./style.css";
import icon from "./images/IconOne.png" 
import fairWeatherHiking from "./images/Fair_Weather_Hiking.png";
import eatDaBurger from "./images/Eat_da_Burger.png";
import fitnessTracker from "./images/Fitness_Tracker.png";
import noteTaker from "./images/Note_Taker.png";
import reactEmployeeDirectory from "./images/React_Employee_Directory.png";
import pwaBudgetTracker from "./images/PWA_Budget_Tracker.png";

class ProjectCard extends React.Component
{   
    constructor (props) {
        super(props);
        this.icon_holder = React.createRef()
        this.randNum = 0;
        this.backgroundImage = ""
        this.link = "http//www.google.com";
    }


    MouseEnter = () => 
    {
        const ref = this.icon_holder.current;
        this.randNum = Math.floor(Math.random()*3)+ 1;
        ref.classList.toggle(`transform-${this.randNum}`);
        ref.classList.toggle("origin");
    }


    MouseLeave = () => 
    {
        const ref = this.icon_holder.current;
        ref.classList.toggle(`transform-${this.randNum}`);
        ref.classList.toggle("origin");
    }

    handleClick = () => 
    {
        window.location = this.link
    }

    render () 
    {

        switch (this.props.name) {
            case "Fair Weather Hiking":
            this.backgroundImage = fairWeatherHiking;
            this.link = "https://github.com/doctorbebo/Fair_Weather_Hiking_App"
                break;
            case "Note Taker App":
            this.backgroundImage = noteTaker;
            this.link = "https://afternoon-chamber-95392.herokuapp.com/"
                break;
            case "React Employee Directory":
            this.backgroundImage = reactEmployeeDirectory;
            this.link = "https://salty-springs-52051.herokuapp.com/"
                break;
            case "PWA Budget Tracker":
            this.backgroundImage = pwaBudgetTracker;
            this.link = "https://still-eyrie-21891.herokuapp.com/"
                break;
            case "Eat da Burger":
            this.backgroundImage = eatDaBurger;
            this.link = "https://glacial-woodland-82955.herokuapp.com/"
                break;            
            case "Fitness Tracker":
            this.backgroundImage = fitnessTracker;
            this.link = "https://guarded-eyrie-47968.herokuapp.com/"
                break;
            default:
                console.log(`${this.props.name} could not be found in switch statement.`);
                break;
        }

        
        return (
        <div className="project-card" onMouseEnter = {this.MouseEnter} onMouseLeave = {this.MouseLeave}>
            <div className="image">
                <a href = {this.link}>
                    <img className="image" alt = " of project" src = {this.backgroundImage}/>
                </a> 
            </div>
            <div className={`icon-holder origin`} ref = {this.icon_holder}>
                <p className = "text-icon-overlay" >{this.props.name}</p>
                <img className="icon" alt = " of project" src = {icon}/>
            </div>
        </div>
        )
    }
}

export default ProjectCard;