import React from "react"
import "./style.css"
import resume from "./Byron_Resume.pdf"

function Resume ()
{
    return (
        <div className="link">
            <a href={resume}>Resume</a>
        </div>
    );
}


export default Resume;