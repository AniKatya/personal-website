import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import "./Menu.css";

class Menu extends Component {
    handleClick =()=>{
       this.props.handleClick()
    }
  render() {
    const menuLabels = ["about", "projects", "contact"];

    return (
      <div className="mobile-menu-comp">
        <div className="mobile-menu-labels-container">
          {menuLabels.map((label) => (
            <Link to={label} smooth={true}>
              <Button>
                <div className="mobile-menu-label" onClick={this.handleClick}>
                  {label}
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
