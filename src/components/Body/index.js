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
        return (
        <div>
            <div className="grid-template-3">
                <div className="col-margin-auto">
                    <Partitions partitionSelected = {this.state.partitionSelected} handleStateChange = {this.handleStateChange} />                    
                </div>
                <div className="">
                    <Info partitionSelected = {this.state.partitionSelected}/>
                </div>
                <div className="grid-template-2 col-margin">
                    <div className="col-padding">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className="col-padding">
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