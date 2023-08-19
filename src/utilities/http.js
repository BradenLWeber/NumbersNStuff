export default class Http {
  async post(url, body, headers) {
    const requestOptions = {
      method: 'POST',
      headers,
      body,
    };

    return fetch(url, requestOptions).then((response) => response.json());
  }

  async get(url, headers) {
    const requestOptions = {
      headers,
      body,
    };

    return fetch(url, requestOptions).then((response) => response.json());
  }
}
