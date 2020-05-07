import React, { Component } from 'react';
import Partition from "../Partition";
import "./style.css";

class Partitions extends Component
{

    state =
    {
        partitionSelected: 0,
    }

    handleState = (name, value) =>
    {
        this.setState({[name]: value},() =>
            {
                console.log(this.state.partitionSelected)
            })
    }
    
    render()
    {
        return (
            <div>
                <div  className ="margin-top">
                    <Partition id = {"About Me"} partitionSelected = {this.state.partitionSelected} handleState = {this.handleState}/>
                </div>
                <div  className ="margin-top">
                    <Partition id = {"Skills"} partitionSelected = {this.state.partitionSelected} handleState = {this.handleState}/>
                </div>
                    <div  className ="margin-top">
                    <Partition id = {"Test 1"} partitionSelected = {this.state.partitionSelected} handleState = {this.handleState}/>
                </div>
                <div  className ="margin-top">
                    <Partition id = {"Test 2"} partitionSelected = {this.state.partitionSelected} handleState = {this.handleState}/>
                </div>
            </div>
        )
    }
}

export default  Partitions;