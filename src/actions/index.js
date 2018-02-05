import {CALL_API, CHAIN_API} from './../middleware/api';

export const GET_CITY = 'GET_CITY';
export const GET_CITY_ERROR = 'GET_CITIES_ERROR';

export const SET_CITY = 'SET_CITY';
export const GET_CITIES_FROM_API = 'GET_CITIES_FROM_API';
export const SELECT_CITY = 'SELECT_CITY';

export function getCity() {
  return (dispatch, getState) => {
    const selectedCity = getState().Content.get("selectedCity");

    dispatch({
      [CHAIN_API]: [
        () => {
          return {
            [CALL_API]: {
              method: 'get',
              type: 'external',
              path: '/city/search?limit=10&page=1&term=' + encodeURI(selectedCity),
              successType: GET_CITIES_FROM_API,
              errorType: GET_CITY_ERROR,
            }
          };
        },
        (payload) => {
          console.log(payload);
        }
      ]
    });
  };
};

export function selectCity(city) {
  return (dispatch) => {
    dispatch({
      type: SELECT_CITY,
      city: city
    });
    dispatch(getCity());
  }
};
