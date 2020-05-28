import { combineReducers } from "redux";

import crmPic from "../crm.png";
import rescPic from "../resc.png";
import weatherPic from "../weather.png";

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
