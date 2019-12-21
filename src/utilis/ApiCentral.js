import axios from "axios";
import { baseURL } from "../common";
const request = async function(options, isHeader = false) {
  let headers = {};
  headers = {
    "X-Auth-Token": "a2a229ba0f60437db7d847d6f9ee84f2"
  };

  const client = axios.create({
    baseURL,
    headers
  });

  const onSuccess = function(response) {
    return response.data;
  };

  const onError = function(error) {
    if (undefined !== error.response && error.response.status === 401) {
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
