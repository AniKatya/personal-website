import React, { Component } from "react";
import { connect } from "react-redux";

import Project from "./Project";
import "./ProjectsRight.scss";

class Projects extends Component {
  render() {
    return (
      <div className="right-side">
        <div
          className="content"
          style={{ color: this.props.data.backgroundColor, backgroundColor: this.props.data.color }}
        >
          I've created several projects by myself and with my friends during Hackathons.
          {this.props.projects.map((project) => {
            return <Project key={project.title} projectData={project} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Projects);
