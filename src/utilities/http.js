export default class Http {
  static async post(url, body, params, headers) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    };

    let parameters = [];
    if (params) {
      for (const key in params) {
        parameters.push(key + '=' + encodeURIComponent(params[key]));
      }
    }
    const httpParams =
      parameters.length === 0 ? '' : '?' + parameters.join('&');

    return fetch('/.netlify/functions/api/' + url + httpParams, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (!json.success && json.message) alert(json.message);
        return json;
      });
  }

  static async get(url, params, headers) {
    const requestOptions = {
      headers: { 'Content-Type': 'application/json', ...headers },
      mode: 'cors',
    };

    let parameters = [];
    if (params) {
      for (const key in params) {
        parameters.push(key + '=' + encodeURIComponent(params[key]));
      }
    }
    const httpParams =
      parameters.length === 0 ? '' : '?' + parameters.join('&');

    return fetch('/.netlify/functions/api/' + url + httpParams, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (!json.success && json.message) alert(json.message);
        return json;
      });
  }
}
