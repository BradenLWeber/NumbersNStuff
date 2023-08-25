export default class Http {
  static async post(url, body, headers) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    };

    return fetch('/.netlify/functions/api/' + url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (!json.success && json.message) alert(json.message);
        return json;
      });
  }

  static async get(url, headers) {
    const requestOptions = {
      headers: { 'Content-Type': 'application/json', ...headers },
      mode: 'cors',
    };

    return fetch('/.netlify/functions/api/' + url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (!json.success && json.message) alert(json.message);
        return json;
      });
  }
}
