import Axios from 'axios'
import utils from './utils'
const BASE_URL = 'http://10.0.40.15:8000/api/'
const BASE_URI = 'http://10.0.40.15:8000/'
const SERVER_TIMEOUT = 10000
let constants = Axios.create({
  baseURL: BASE_URL,
  timeout: SERVER_TIMEOUT
})
function logError(error) {
  console.log('error: ', error);
  console.group
    && console.group(
      '%cAPI ERROR',
      'color:white;font-weight:bold;background:red;padding:2px 6px',
    );
  if (error.response) {
    const apiName = error.config.apiName || 'UNKNOWN';

    console.log(apiName, error.response);
    console.groupEnd && console.groupEnd()
  } else if (error.request) {
    const apiName = error.config.headers.X_HEADER_API_LOG || 'UNKNOWN';

    console.log(apiName, error.request);
    console.groupEnd && console.groupEnd()
  } else {

    console.log('API Error', error.message);
    console.groupEnd && console.groupEnd()
  }
  throw error
}
function logResponse(res) {
  console.group
    && console.group(
      '%cAPI Response',
      'color:white;font-weight:bold;background:green;padding:2px 6px',
    );
  console.log('res: ', res)
  console.groupEnd && console.groupEnd()
}
function fetch(url, params) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }
  return constants
    .get(url, { params }, { headers })
    .then(res => {
      logResponse(res)
      return res.data
    })
    .catch(error => {
      logError(error)
    })
}
function put(url, params) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }
  return constants
    .put(url, params, { headers })
    .then(res => {
      logResponse(res)
      return res.data
    })
    .catch(error => {
      logError(error)
    })
}
function post(url, params) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }
  return constants
    .post(url, params, { headers })
    .then(res => {
      logResponse(res)
      return res.data
    })
    .catch(error => {
      logError(error)

    })
}
function postForm(url, params) {
  let headers = {
    "Content-Type": "multipart/form-data",
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }

  return constants
    .post(url, params, { headers })
    .then(res => {
      logResponse(res)
      return res.data
    })
    .catch(error => {
      logError(error)

    })
}
function removeRequest(url) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (utils.database.token) {
    headers.Authorization = `Bearer ${utils.database.token}`
  }
  return constants
    .delete(url, { headers })
    .then(res => {
      logResponse(res)
      return res.data
    })
    .catch(error => {
      logError(error)
    })
}
export default {
  PATH: {
    LOGIN: 'login',
    REGISTER: 'register',
    UPLOAD_IMAGE: 'update_avatar'
  },
  fetch,
  put,
  post,
  removeRequest,
  BASE_URI,
  BASE_URL,
  postForm
}
