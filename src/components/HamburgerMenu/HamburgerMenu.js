import React, { Component } from "react";
import { Motion, spring, presets } from "react-motion";
import "./HamburgerMenu.css";
import Menu from "./Menu";

class HamburgerMenu extends Component {
  state = {
    toggle: false,
    showMenu: false,
  };

  handleClick = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  render() {
    const style = {
      zIndex: "2",
      cursor: "pointer",
      color: "white",
      position: "fixed",
      backgroundColor: "#C9A3B4",
      padding: "5px",
      margin: "10px",
      borderRadius: "20%",
    };

    return (
      <div className="hamburger-menu">
        <svg viewBox="0 0 96 96" height="1em" onClick={this.handleClick.bind(this)} style={style}>
          <Motion
            style={{
              x: spring(this.state.showMenu ? 1 : 0, presets.wobbly),
              y: spring(this.state.showMenu ? 0 : 1, presets.wobbly),
            }}
          >
            {({ x, y }) => (
              <g
                id="navicon"
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line
                  transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`}
                  x1="7"
                  y1="26"
                  x2="89"
                  y2="26"
                />
                <line
                  transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`}
                  x1="7"
                  y1="70"
                  x2="89"
                  y2="70"
                />
                <line
                  transform={`translate(${x * -96})`}
                  opacity={y}
                  x1="7"
                  y1="48"
                  x2="89"
                  y2="48"
                />
              </g>
            )}
          </Motion>
        </svg>
        {this.state.showMenu ? <Menu handleClick={this.handleClick} /> : null}
      </div>
    );
  }
}

export default HamburgerMenu;
