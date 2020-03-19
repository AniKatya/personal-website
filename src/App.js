import React, { Component } from 'react';
import pic from './me.jpg'
import LeftSide from './components/LeftSide.js';
import RightSide from './components/RightSide.js';




class App extends Component {
  constructor() {
    super();
    this.state = {
      blocks: [
        {
          name: "welcome", header: 'Shalom!_I am Katya.', backgroundColor: '#C9A3B4', color: "white", pic: pic,
          paragraph1: "I am Full Stack Developer from Russia living in Israel.",
        },

        {
          name: "projects", header: 'My Projects', backgroundColor: 'white', color: '#91C1B9',
          paragraph1: "I've created several projects by myself and with my friends during Hackathons."
        },
        {
          name: "contact", header: 'Contact', backgroundColor: '#8394AD', color: "white",
          paragraph1: "If you are looking for responsible and hard-working junior web-developer and a nice person to work with – you are very welcome to contact me.",
          fullName: "Katya Lopukhina",
          location: "Israel"
        }
      ]
    }
  }



  render() {
    return this.state.blocks.map(block => {
      return (<div>
        {/* <Grid container>
        <Grid item xs={6}><LeftSide data={block} /></Grid>
        <Grid item xs={6}><RightSide data={block} /></Grid>
      </Grid> */}
        <div className="page-grid">
          <LeftSide data={block} />
          <RightSide data={block} />
        </div>
      </div>)


    })
  }
}
export default App;
