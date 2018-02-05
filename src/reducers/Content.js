import {fromJS, List, Map} from 'immutable';

import {
  GET_CITY,
  SELECT_CITY,
  GET_CITIES_FROM_API,
  GET_CITY_ERROR
} from '../actions';

const initialState = {
  cities:[
    {
      _id: "",
      code: null,
      name: "",
      state: "",
      ddd: null,
      other_code: null,
      score: null,
      id: ""
    }
  ],
  selectedCity: "",
  error: {
    type: "",
    message: ""
  }
};

let defaultState = fromJS(initialState);

function contentReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_CITIES_FROM_API:
      return state.set("cities", action.response.rows);
      break;
    case GET_CITY_ERROR:
      return state.set("error", {type: "API_ERROR", message: "Error on API."})
      break;
    case SELECT_CITY:
      console.log(state);
      return state.set("selectedCity", action.city);
      break;
    default:
      return state;
  }
}

export default contentReducer;
