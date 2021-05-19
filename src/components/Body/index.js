import React, { Component } from 'react';
import ProjectCard from "../ProjectCard";
import Info from "../Info";
import Partitions from "../Partitions";
import "./style.css";

class Body extends Component
{
    state =
    {
        partitionSelected: "",
    }


    handleStateChange = (name, value) =>
    {

        this.setState({[name]: value},() =>
            {
                console.log(this.state.partitionSelected)
            })
    }

    render ()
    { 
        console.log(window.innerHeight)
        return (
        <div>
            <div className="grid-template-3">
                <div className="col-margin-auto z-index-3">
                    <Partitions partitionSelected = {this.state.partitionSelected} handleStateChange = {this.handleStateChange} /> 
                </div>
                <div className="col-margin-20">
                    <Info partitionSelected = {this.state.partitionSelected}/>
                </div>
                <div className="grid-template-2 col-margin">
                    <div className="col-padding">
                        <ProjectCard name = {"Orbit"}  />  
                        <ProjectCard name = {"PWA Budget Tracker"}  />
                        <ProjectCard name = {"Fitness Tracker"} />
                    </div>
                    <div className="col-padding">
                        <ProjectCard name = {"Note Taker App"} />
                        <ProjectCard name = {"React Employee Directory"} />
                        <ProjectCard name = {"Eat da Burger"} />
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Body;
