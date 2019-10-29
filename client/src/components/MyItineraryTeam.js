import React, { Component } from "react";
import DisplayEmployee from "./Employees";
import Luke from "../assets/Luke_Williams.png";
import Sabrina from "../assets/Sabrina.png";
import Martin from "../assets/Martin_Wright.png";
import Mongoose from "../assets/mongoose.jpg";

class MyItineraryTeam extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: "Sabrina Miller",
        title: "Product Owner",
        photo: Sabrina
      },
      {
        id: 2,
        name: "Martin Wright",
        title: "Product Owner",
        photo: Martin
      },
      {
        id: 3,
        name: "Luke Williams",
        title: "Scrum Master",
        photo: Luke
      },
      {
        id: 4,
        name: "Sai Patel",
        title: "UI Designer",
        photo: Mongoose
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <h1>This is my team</h1>
        <div className="employee">
          <DisplayEmployee employees={this.state.employees} />
        </div>
        <h2>Please add another employee</h2>
        <form>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyItineraryTeam;
