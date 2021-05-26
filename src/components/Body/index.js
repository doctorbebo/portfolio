import React, { Component } from "react";
import Card from "../Card";
import cardData from "../Card/cardData";
import Info from "../Info";
import Partitions from "../Partitions";
import "./style.css";

class Body extends Component {
  state = {
    partitionSelected: "",
  };

  handleStateChange = (name, value) => {
    this.setState({ [name]: value }, () => {
      console.log(this.state.partitionSelected);
    });
  };

  render() {
    const cardDataA = cardData.slice(0, cardData.length / 2);
    const cardDataB = cardData.slice(cardData.length / 2, cardData.length);
    console.log(window.innerHeight);
    return (
      <div>
        <div className="grid-template-3">
          <div className="col-margin-auto z-index-3">
            <Partitions partitionSelected={this.state.partitionSelected} handleStateChange={this.handleStateChange} />
          </div>
          <div className="col-margin-20">
            <Info partitionSelected={this.state.partitionSelected} />
          </div>
          <div className="grid-template-2 col-margin">
            <div>
              {cardDataA.map((cardData) => (
                <Card cardData={cardData} />
              ))}
            </div>
            <div>
              {cardDataB.map((cardData) => (
                <Card cardData={cardData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
