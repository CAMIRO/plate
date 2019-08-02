/**
 * ApiService
 */
import { AsyncStorage } from 'react-native';
import { ROUTES } from './apiRoutes';

/**
 * BASE FETCH
 * @param {api} string name api
 * @param {body} [object|string] body xhr
 */

const apiService = async (api: string, data: any) => {
  let { url } = ROUTES[api];
  const { isToken, method, type = 'json' } = ROUTES[api];

  var body: ?Object = null;
  var objFetch: Object = {};
  const headers: Object = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Content-Encoding': 'application/gzip'
  };

  if (type === 'json' && method !== 'GET' && method !== 'DELETE'){
    body = JSON.stringify(data);
    headers['Content-Type'] = 'application/json';
  }
  else if (type === 'form-data'){
    body = new FormData();
    Object.keys(data).forEach(function (key) {
      if (data[key]) { body.append(key, data[key]); }
    });
  }
  else if (data && (method === 'GET' || method === 'DELETE') ) {url = `${url}${data}`;}

  if (isToken){
    const userToken = await AsyncStorage.getItem('token');
    headers.Authorization = `Bearer ${userToken || ''}`;
  }
  if (method === 'GET') {objFetch = { method, headers };}
  else { objFetch = { method, headers, body: JSON.stringify(body) }; }

  return fetch(`${url}`, objFetch)
    .then(async resp => {
      if (resp.ok && resp.status === 200 && method === 'DELETE') {return { success: true };}
      else if (resp.ok && resp.status === 200) {return resp.json();}

      const error = await resp.json();
      return { success: false, error };
    })
    .then(json => {
      if (json) { return json; }
      return json.then(err => {
        console.log(err); // eslint-disable-line no-console
        throw err;
      });
    })
    .then(json => ({ success: true, data: json }))
    .catch(error => ({ success: false, data: {}, error }));
};

export default apiService;
