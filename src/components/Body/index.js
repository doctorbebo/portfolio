import React, { Component } from 'react';
import ProjectCard from "../ProjectCard";
import Info from "../Info";
import Partitions from "../Partitions";
import Resume from "../Resume_link"
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
        return (
        <div>
            <div className="grid-template-3">
                <div className="col-margin-auto z-index-1">
                    <Partitions partitionSelected = {this.state.partitionSelected} handleStateChange = {this.handleStateChange} /> 
                </div>
                <div className="col-margin-20">
                    <Info partitionSelected = {this.state.partitionSelected}/>
                </div>
                <div className="grid-template-2 col-margin">
                    <div className="col-padding">
                        <ProjectCard name = {"Fair Weather Hiking"} />
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