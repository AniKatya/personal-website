//action creator
export const showProjectInfo = (project) => {
  const projectsData = [
    {
      title: "WeatherNow",
      description:
        "Full-stack MVC weather app. Shows the weather for the user's current location. Builtusing JavaScript, jQuery and Handlebars on frontend; Node.js, Express, MongoDB onbackend. Materialize design.",
    },
    {
      title: "CRM",
      description:
        "A MERN stack based Customer Relationship Management tool. Used Recharts for graphic analytics dashboard and Material UI for design.",
    },
    {
      title: "RESCYOUME",
      description:
        "RescYouMe is an application created for you to feel safer wherever you go. Built using Google Maps API, Web-push npm package, MERN, Material UI, MobX.",
    },
  ];
  const projectInfo = projectsData.filter((proj) => proj.title === project)[0].description
  return {
    type: "PROJECT_SELECTED",
    payload: {project, projectInfo}
  };
};

