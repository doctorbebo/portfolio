import React, { Component } from 'react';
import ProjectCard from "../ProjectCard";
import AboutMe from "../AboutMe";
import Partitions from "../Partitions";
import "./style.css";

class Body extends Component
{
    render ()
    { 
        return (
        <div>
            <div className="grid-template-3">
                <div className="col-margin col-top-margin">
                        <Partitions />                    
                </div>
                <div className="col-margin">
                    <AboutMe/>
                </div>
                <div className="grid-template-2 col-margin">
                    <div className="col-margin">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className="col-margin">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Body;