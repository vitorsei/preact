import * as Superagent from 'superagent';
import superAgentPromise from 'superagent-promise';
import apiConfig from './api-config';
import * as cookie from 'react-cookie';

const superagent = superAgentPromise(Superagent, Promise);
const API_ROOT = apiConfig.authdUrl;

let token;

function setToken(_token) {
  token = _token;
}

function clearToken() {
  token = null;
}

const responseBody = (res) => res.body;

const tokenPlugin = (req) => {
  token = cookie.load('pp-token');
  if (token) {
    req.set('pp-token', token);
  }
};

const requests = {
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  post: (url) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

function register(username, password, instanceKey) {
  return requests.post('/user/register', {
    username,
    password,
    instanceKey
  });
}

function login(email, password) {
  return requests.post('/user/login', {
    username: email,
    password,
    platformKey: apiConfig.authdPlatformKey
  });
}

function getProfile() {
  return requests.get('/user/profile');
}

export default {
  register,
  login,
  getProfile,
  setToken,
  clearToken
};
