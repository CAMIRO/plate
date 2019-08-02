export const URL_BASE = __DEV__ ?
  'http://www.encuestasmultiproposito.com'
  : 'http://testapp-cup.smartegov.com.co:8081/coin';

export const URL_API = `${URL_BASE}/api`;
export const URL_MAIL = 'web.com';
export const URL_API_GOOGLE = 'https://maps.googleapis.com';
export const URL_API_MAP = `${URL_API_GOOGLE}/maps/api`;
export const API_KEY_MAP = 'AIzaSyCttFK5r1jBDmlr7tHImA10gy2iBbnNHyg';

// ROUTES API
export const ROUTES = {
  // ================== // Before Login // ================== //
  'authenticate:POST': {
    url: `${URL_API}/login`,
    isToken: false,
    method: 'POST'
  },
  'recovery-password:POST': {
    url: `${URL_API}/recuperarcontrasenia`,
    isToken: false,
    method: 'POST'
  },
  'phaseList:POST': {
    url: `${URL_API}/infoaplicaciones`,
    isToken: true,
    method: 'POST'
  },

  // =============== // URL API MAP // =============== //
  'apiServiceMap:GET': {
    url: `${URL_API_MAP}/geocode/json?key=${API_KEY_MAP}`,
    isToken: true,
    method: 'GET'
  }
};
