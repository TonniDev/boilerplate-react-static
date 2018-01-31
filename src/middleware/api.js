import superAgent from 'superagent';
import Promise from 'bluebird';
import _ from 'lodash';
import {camelizeKeys} from 'humps';
import config from './../config';

export const CALL_API = Symbol('CALL_API');
export const CHAIN_API = Symbol('CHAIN_API');

function actionWith(action, toMerge) {
  const ret = Object.assign({}, action, toMerge);
  delete ret[CALL_API];
  return ret;
}

function extractParams(callApi) {
  const {
    method,
    attach,
    type,
    path,
    query,
    body,
    header,
    successType,
    errorType,
    afterSuccess,
    afterError
  } = callApi;
  let url = '';

  if (type === 'internal') {
    url = `${config.API_BASE_URL_INTERNAL}${path}`;
  } else {
    url = `${config.API_BASE_URL_EXTERNAL}${path}`;
  }

  return {
    method,
    attach,
    url,
    query,
    body,
    header,
    successType,
    errorType,
    afterSuccess,
    afterError
  };
}

function createRequestPromise(apiActionCreator, next, getState, dispatch) {
  return (prevBody) => {
    const apiAction = apiActionCreator(prevBody);
    const params = extractParams(apiAction[CALL_API]);
    const header = params.header || {'api-key-oi': 'user-unlogged'};

    return new Promise((resolve, reject) => {
      superAgent[params.method](params.url)
        .send(params.body)
        .query(params.query)
        .set(header)
        .end((err, res) => {
          if (err) {
            if (params.errorType) {
              dispatch(actionWith(apiAction, {
                type: params.errorType,
                message: res.body.error,
                status: res.body.status,
                statusCode: res.statusCode,
                statusText: res.statusText
              }));
            }

            if (_.isFunction(params.afterError)) {
              params.afterError({getState});
            }
            reject();
          } else {
            const resBody = camelizeKeys(res.body);
            dispatch(actionWith(apiAction, {
              type: params.successType,
              response: resBody,
              status: resBody.status
            }));

            if (_.isFunction(params.afterSuccess)) {
              params.afterSuccess({getState});
            }
            resolve(resBody);
          }
        });
    });
  };
}

export default ({dispatch, getState}) => next => (action) => {
  if (action[CALL_API]) {
    return dispatch({
      [CHAIN_API]: [
        () => action
      ]
    });
  }
  return new Promise((resolve, reject) => {
    if (!action[CHAIN_API]) {
      return next(action);
    }

    const promiseCreators = action[CHAIN_API].map((apiActionCreator) => {
      return createRequestPromise(apiActionCreator, next, getState, dispatch);
    });

    const overall = promiseCreators.reduce((promise, creator) => {
      return promise.then((body) => {
        return creator(body);
      });
    }, Promise.resolve());

    return overall.finally(() => {
      resolve();
    })
      .catch((e) => {
        reject(e);
      });
  });
};
