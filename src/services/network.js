// @flow

import axios from "axios";

const defaultHeaders = {
  "content-type": "application/json",
  accept: "application/json"
};

class Network {
  service: Object;

  constructor() {
    const service = axios.create();
    service.defaults.headers = defaultHeaders;
    this.service = service;
  }

  get(path: string) {
    return this.service
      .get(path)
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  post(path: string, payload: any) {
    return this.service
      .request({
        method: "POST",
        url: path,
        withCredentials: true,
        data: payload ? JSON.stringify(payload) : {}
      })
      .then(response => response)
      .catch(error => Promise.reject(error));
  }
  put(path: string, payload: any) {
    return this.service
      .request({
        method: "PUT",
        url: path,
        data: JSON.stringify(payload)
      })
      .then(response => response)
      .catch(error => Promise.reject(error));
  }

  patch(path: string, payload: any) {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        data: JSON.stringify(payload)
      })
      .then(response => response)
      .catch(error => Promise.reject(error));
  }
}

export default new Network();
