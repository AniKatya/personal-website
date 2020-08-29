//action creator
let projectsData = {
  "WeatherNow": {
    description:
      "Full-stack MVC weather app. Shows the weather for the user's current location. Builtusing JavaScript, jQuery and Handlebars on frontend; Node.js, Express, MongoDB onbackend. Materialize design.",
    toShowInfo: false,
  },
  CRM: {
    description:
      "A MERN stack based Customer Relationship Management tool. Used Recharts for graphic analytics dashboard and Material UI for design.",
    toShowInfo: false,
  },
  RESCYOUME: {
    description:
      "RescYouMe is an application created for you to feel safer wherever you go. Built using Google Maps API, Web-push npm package, MERN, Material UI, MobX.",
    toShowInfo: false,
  },
};

export const toggleProjectInfo = (project) => {
  const projectSelected = projectsData[project];
  projectSelected.toShowInfo = !projectSelected.toShowInfo;
  const toShowInfo = projectSelected.toShowInfo;
  const projectInfo = projectSelected.description;
  return {
    type: "PROJECT_SELECTED",
    payload: { project, projectInfo, toShowInfo },
  };
};
