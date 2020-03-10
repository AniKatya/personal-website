import React, { Component } from 'react';
import '../App.css'
import ToolBar from './ToolBar.js'

class LeftSide extends Component {
    render() {
        const backgroundColor = this.props.data.backgroundColor
        const color = this.props.data.color
        const header = this.props.data.header.split("_")
        return (
            <div style={{ backgroundColor, color }} className="left-side" id={this.props.data.name}>
                <div className="header">
                    {header[0]}
                    <br></br>
                    {header[1]}
                </div>
                <ToolBar color={color} />
            </div>
        )
    }
}
export default LeftSide;