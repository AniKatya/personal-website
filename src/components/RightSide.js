import React, { Component } from 'react';
import Icons from './Icons.js'
import Projects from './Projects.js'
let json = require('../aboutMe.json')


class RightSide extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.data.color }} id={this.props.data.name} className={this.props.data.name} className="right-side">
                <div className="content" style={{ color: this.props.data.backgroundColor }}>
                    {this.props.data.paragraph1}
                    <br></br> <br></br>
                    {this.props.data.name === "welcome" ? 
                    <>
                    <img src={this.props.data.pic} alt="" className="pic"></img>
                    <br></br>
                    <div>{json.welcome.welcomeParagraph1}</div>
                    <br></br>
                    <div>{json.welcome.welcomeParagraph2}</div>
                    <h4>{this.props.data.fullName}</h4>
                    <h1><i>Technologies I use</i></h1>
                    {json.welcome.technologies.map(tech=><div className="tech-tag">{tech}</div>)}
                    </>
                    : null}
                    {this.props.data.name === "projects" ? <Projects />: null}
                    <br></br> <br></br>
                    {this.props.data.name === "contact" ? <Icons /> : null}
                </div>
            </div>)


    }
}
export default RightSide;