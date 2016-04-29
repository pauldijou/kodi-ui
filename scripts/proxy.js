import fetch from 'isomorphic-fetch';
import { setRequest, setResponse } from './store/actions';

export default function proxy(url, options) {
  setRequest({url, ...options});
  setResponse('pending');
  return fetch(url, options)
    .then((response)=> {
      const infos = {
        status: response.status,
        statusText: response.statusText
      };

      if (response.ok) {
        return response.clone().json().then((json)=> {
          setResponse({
            ...infos,
            body: json
          });
          return response;
        });
      } else {
        return response.clone().text().then((text)=> {
          setResponse({
            ...infos,
            body: text,
            error: true
          });
          return response;
        });
      }
    })
    .catch((error)=> {
      const displayError = {};
      if (error.name) {
        displayError.name = error.name;
      }
      if (error.code) {
        displayError.code = error.code;
      }
      if (error.message) {
        displayError.message = error.message;
      }
      if (error.stack) {
        displayError.stack = error.stack.split('\n');
      }
      setResponse({...displayError, error: true});
      throw error;
    });
};
