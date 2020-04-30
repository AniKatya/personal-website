import React, { Component } from 'react';
import Contact from './Contact.js'
import Projects from './Projects.js'
import AboutMe from './AboutMe.js';


class RightSide extends Component {
    render() {
       
        return (
            <div style={{ backgroundColor: this.props.data.color }}  id={this.props.data.name} className={this.props.data.name} className="right-side">
                <div className="content" style={{ color: this.props.data.backgroundColor }}>
                    {this.props.data.paragraph1}
                    <br></br> <br></br>
                    {this.props.data.name === "main" ? 
                        <AboutMe />
                    : null}
                    {this.props.data.name === "projects" ? <Projects />: null}
                    <br></br> <br></br>
                    {this.props.data.name === "contact" ?
                    <Contact />: null}
                </div>
            </div>)


    }
}
export default RightSide;