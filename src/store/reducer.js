const initialState = {
  CRM: false,
  RESCYOUME: false,
  WeatherNow: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addCrmInfo":
      return {
        ...state,
        CRM: !state.CRM,
      };
    case "addRescInfo":
      return {
        ...state,
        RESCYOUME: !state.RESCYOUME,
      };
    case "addWeatherInfo":
      return {
        ...state,
        WeatherNow: !state.WeatherNow,
      };
  }
  return state;
};

export default reducer;
