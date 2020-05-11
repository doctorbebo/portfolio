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
                <div className="col-margin-auto">
                    <Partitions partitionSelected = {this.state.partitionSelected} handleStateChange = {this.handleStateChange} /> 
                    <Resume/>              
                </div>
                <div className="">
                    <Info partitionSelected = {this.state.partitionSelected}/>
                </div>
                <div className="grid-template-2 col-margin">
                    <div className="col-padding">
                        <ProjectCard name = {"Fair Weather Hiking"} />
                        <ProjectCard name = {"Music Quiz"}  />
                        <ProjectCard name = {"Test Name one"} />
                    </div>
                    <div className="col-padding">
                        <ProjectCard name = {"Test Name Two"} />
                        <ProjectCard name = {"Test Name Three"} />
                        <ProjectCard name = {"Test Name Four"} />
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Body;