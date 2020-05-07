import React from 'react';
import "./style.css";
import picture from "./image.png" 

class ProjectCard extends React.Component
{   
    constructor (props) {
        super(props);
        this.icon_holder = React.createRef()
        this.randNum = 0;
    }

    componentDidMount() 
    {
    }

    MouseEnter = () => 
    {
        const ref = this.icon_holder.current;
        this.randNum = Math.floor(Math.random()*4)+ 1;
        ref.classList.toggle(`transform-${this.randNum}`);
        ref.classList.toggle("origin");
    }


    MouseLeave = () => 
    {
        const ref = this.icon_holder.current;
        ref.classList.toggle(`transform-${this.randNum}`);
        ref.classList.toggle("origin");
    }

    render () 
    {
        return (
        <div className="project-card" onMouseEnter = {this.MouseEnter} onMouseLeave = {this.MouseLeave}>
            <div className={`icon-holder origin`} ref = {this.icon_holder}>
                <img className="icon" alt = " of project" src = {picture}/>
            </div>
        </div>
        )
    }
}

export default ProjectCard;