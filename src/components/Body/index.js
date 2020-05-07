import React from 'react';
import ProjectCard from "../ProjectCard";
import AboutMe from "../AboutMe";
import "./style.css";

function Body ()
{
    return (
        <div>
            <div className="grid-template-3">
                <div>
          
                </div>
                <div>
                    <AboutMe />
                </div>
                <div className="grid-template-2">
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
    )
}

export default Body;