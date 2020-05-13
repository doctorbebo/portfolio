import React from 'react';
import Partition from "../Partition";
import "./style.css";

function Partitions (props)
{

    return (
        <div className="z">
            <div  className ="margin">
                <Partition id = {"About Me"} partitionSelected = {props.partitionSelected} handleState = {props.handleStateChange}/>
            </div>
            <div  className ="margin">
                <Partition id = {"Skills"} partitionSelected = {props.partitionSelected} handleState = {props.handleStateChange}/>
            </div>
                <div  className ="margin">
                <Partition id = {"Test 1"} partitionSelected = {props.partitionSelected} handleState = {props.handleStateChange}/>
            </div>
            <div  className ="margin">
                <Partition id = {"Test 2"} partitionSelected = {props.partitionSelected} handleState = {props.handleStateChange}/>
            </div>
        </div>
    )
}

export default  Partitions;