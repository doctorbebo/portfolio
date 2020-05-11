import React from 'react';
import "./style.css";

 function Partition (props)
{

    const MouseEnter = () => 
    {
        props.handleState("partitionSelected", props.id);
    }

    if(props.id === props.partitionSelected)
    {
        return(
            <div className = "card-transform">
                <div className= "card-holder"  onMouseEnter = {MouseEnter} >
                    <div  className="card" >
                        <div className = "text card-transform"> {props.id} </div> 
                    </div>
                </div>
            </div>
        )
    }else
    {
        return (
            <div className = "origin">
                <div className= "card-holder"  onMouseEnter = {MouseEnter} >
                    <div  className="card">
                        <div className = "text origin"> {props.id}</div> 
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Partition;