import React from "react";
import { connect } from "react-redux";
import { showProjectInfo } from "../../store/action";

import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Project = (props) => {
  return (
    <div className="screenshots-container">
      <Button
        className="project-title"
        onClick={() => props.showProjectInfo(props.projectData.title)}
        endIcon={<ArrowDropDownIcon> </ArrowDropDownIcon>}
      >
        {props.projectData.title}
      </Button>
      {props.projectData.title === props.selectedProject.title ? 
        <div className="project-info">{props.selectedProject.info}</div>: null}
      {/* <a href={props.projects.projectData.link}> */}
      <img className="projects-screenshots-weather" src={props.projectData.screenshot} alt=""></img>
      {/* </a> */}
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state)
  return {
    selectedProject: state.selectedProject,
    projects: state.projects
  };
};

export default connect(mapStateToProps, {
  showProjectInfo,
})(Project);
