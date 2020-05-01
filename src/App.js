import React, { Component } from "react";
import "./App.scss";

import pic from "./me.jpg";
import AboutRight from "./new_components/About/AboutRight.js";
import ProjectsRight from "./new_components/Projects/ProjectsRight.js";
import ContactRight from "./new_components/Contact/ContactRight.js";
import LeftSide from "./new_components/LeftSide/LeftSide.js";
let json = require("./aboutMe.json");

class App extends Component {
  constructor() {
    super();
    this.state = {
      main: {
        header: "Shalom!_I am Katya.",
        backgroundColor: "#C9A3B4",
        color: "white",
        pic: pic,
        paragraph1: json.welcome.presentation,
      },

      projects: {
        header: "My Projects",
        backgroundColor: "white",
        color: "#91C1B9",
        paragraph1: json.projects.presentation,
      },
      contact: {
        header: "Contact",
        backgroundColor: "#8394AD",
        color: "white",
        paragraph1: json.contact.presentation,
        fullName: "Katya Lopukhina",
        location: "Israel",
      },
    };
  }

  render() {
    return (
      <div>
        <div name = "about" className="main-container" >
            <LeftSide className="left-side" data={this.state.main} />
            <AboutRight className="right-side" data={this.state.main}/>
        </div>
        <div name = "projects" className="main-container">
          <LeftSide data={this.state.projects} />
          <ProjectsRight className="right-side" data={this.state.projects}/>
        </div>
        <div name = "contact" className="main-container">
          <LeftSide data={this.state.contact} />
          <ContactRight className="right-side" data={this.state.contact}/>
        </div>
      </div>
    );
  }
}
export default App;
