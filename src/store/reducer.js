import { combineReducers } from "redux";

import crmPic from "../images/crm.png";
import rescPic from "../images/resc.png";
import weatherPic from "../images/Weather.png";

const projectsReducer = () => {
  return [
    {
      title: "WeatherNow",
      screenshot: weatherPic,
      link: "https://my-weather-now-app.herokuapp.com/",
    },
    {
      title: "CRM",
      screenshot: crmPic,
    },
    {
      title: "RESCYOUME",
      screenshot: rescPic,
    },
  ];
};

const selectedProjectReducer = (selectedProject = "", action) => {
  if (action.type === "PROJECT_SELECTED") {
    return { title: action.payload.project, info: action.payload.projectInfo };
  }
  return selectedProject;
};

export default combineReducers({
  projects: projectsReducer,
  selectedProject: selectedProjectReducer,
});
