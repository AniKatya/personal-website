import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import crm1 from "../../crm1.png";
import crm2 from "../../crm2.png";
import crm3 from "../../crm3.png";
import resc from "../../resc.png";
import Weather from "../../Weather.png";

import "./ProjectsRight.scss"
let json = require("../../aboutMe.json");

class Projects extends Component {
  render() {
    return (
      <div className="right-side">
        <div
          className="content"
          style={{ color: this.props.data.backgroundColor, backgroundColor: this.props.data.color }}
        >
          <div className="screenshots-container">
          <Button
              className="project-title weather-title"
              onClick={this.props.addWeatherInfoDiv}
              endIcon={<ArrowDropDownIcon> </ArrowDropDownIcon>}
            >
              WeatherNow
            </Button>
            {this.props.WeatherNow ? (
              <div className="project-info">{json.projects.WeatherNow}</div>
            ) : null}
            <a href="https://my-weather-now-app.herokuapp.com/">
                <img className="projects-screenshots-weather" src={Weather} alt=""></img>
            </a>

            <Button
              className="project-title crm-title"
              onClick={this.props.addCrmInfoDiv}
              endIcon={<ArrowDropDownIcon> </ArrowDropDownIcon>}
            >
              CRM
            </Button>
            {this.props.CRM ? <div className="project-info">{json.projects.CRM}</div> : null}
            <a href="https://customer-management-tool.herokuapp.com/">
              <div className="crm-screenshots-container">
                <img className="projects-screenshots" src={crm1} alt=""></img>
                <img className="projects-screenshots" src={crm2} alt=""></img>
                <img className="projects-screenshots" src={crm3} alt=""></img>
              </div>
            </a>

            <Button
              className="project-title rescyoume-title"
              onClick={this.props.addRescInfoDiv}
              endIcon={<ArrowDropDownIcon> </ArrowDropDownIcon>}
            >
              RESCYOUME
            </Button>
            {this.props.RESCYOUME ? (
              <div className="project-info">{json.projects.RESCYOUME}</div>
            ) : null}
            <a href="https://resc-you-me.herokuapp.com/">
                <img className="projects-screenshots-rescyoume" src={resc} alt=""></img>
            </a>
    
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CRM: state.CRM,
    RESCYOUME: state.RESCYOUME,
    WeatherNow: state.WeatherNow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCrmInfoDiv: () => dispatch({ type: "addCrmInfo" }),
    addRescInfoDiv: () => dispatch({ type: "addRescInfo" }),
    addWeatherInfoDiv: () => dispatch({ type: "addWeatherInfo" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
