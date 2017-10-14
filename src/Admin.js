import React, { Component } from 'react';
import ClaimTitle from "./ClaimTitle.js";
import ClaimCard from "./ClaimCard/ClaimCard.js";

class Admin extends Component {
  render() {
    return (
      <div>
        <ClaimTitle />
        <div style={{
          display: "flex",
          justifyContent: "spaceAround",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "80%",
          marginRight: "10%",
          marginLeft: "10%"
        }}>
          {this.props.bounties.map((bounty, index) => {
            if(bounty.upload !== "") {
              return (
                <ClaimCard
                  key={index}
                  title={bounty.title}
                  icon={bounty.upload}
                  details={bounty.details}
                  upload={bounty.upload}
                />
              )
            } else {
              return null;
            }
            })}
        </div>
      </div>
    );
  }
}

export default Admin;