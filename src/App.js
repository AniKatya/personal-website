import React, { Component } from 'react';
import pic from './me.jpg'
import LeftSide from './components/LeftSide.js';
import RightSide from './components/RightSide.js';
let json = require('./aboutMe.json');



class App extends Component {
  constructor() {
    super();
    this.state = {
      blocks: [
        {
          name: "welcome", header: 'Shalom!_I am Katya.', 
          backgroundColor: '#C9A3B4', color: "white", 
          pic: pic,
          paragraph1: json.welcome.presentation
        },

        {
          name: "projects", header: 'My Projects', 
          backgroundColor: 'white', color: '#91C1B9',
          paragraph1: json.projects.presentation
        },
        {
          name: "contact", header: 'Contact', 
          backgroundColor: '#8394AD', color: "white",
          paragraph1: json.contact.presentation,
          fullName: "Katya Lopukhina",
          location: "Israel"
        }
      ]
    }
  }



  render() {
    return this.state.blocks.map(block => {
      return (<div>
        <div className="page-grid">
          <LeftSide data={block} />
          <RightSide data={block} />
        </div>
      </div>)


    })
  }
}
export default App;
