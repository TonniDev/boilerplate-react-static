import {fromJS} from 'immutable';

import {
  SELECT_CITY,
  GET_CITIES_FROM_API,
  GET_CITY_ERROR
} from '../actions';

const initialState = {
  cities: [
    {
      _id: '',
      code: null,
      name: '',
      state: '',
      ddd: null,
      other_code: null,
      score: null,
      id: ''
    }
  ],
  selectedCity: '',
  error: {
    type: '',
    message: ''
  }
};

const defaultState = fromJS(initialState);

function contentReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_CITIES_FROM_API:
      return state.set('cities', action.response.rows);
    case GET_CITY_ERROR:
      return state.set('error', {
        type: 'API_ERROR',
        message: 'Error on API.'
      });
    case SELECT_CITY:
      return state.set('selectedCity', action.city);
    default:
      return state;
  }
}

export default contentReducer;
