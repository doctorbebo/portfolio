import React from 'react';
import ProjectCard from "../ProjectCard";
import "./style.css";

function Body ()
{
    return (
        <div>
            <div className="grid-template-3">
                <div>
          
                </div>
                <div>
          
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