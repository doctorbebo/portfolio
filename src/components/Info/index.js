    import React from "react"; 
import "./style.css"

function Info (props)
{

    return (
        <div className = "holder">
            <div className= {`info ${props.partitionSelected === "About Me" ? "info-transform" : "info-origin" }`}>
                <div className=""> About Me</div>
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
