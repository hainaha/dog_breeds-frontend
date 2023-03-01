class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/images/search?limit=9&has_breeds=1`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Error: ${res.status}`));
    });
  }

  getBreeds() {
    return fetch(`${this._baseUrl}/breeds/`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Error: ${res.status}`));
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.thedogapi.com/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key':
      'live_bs2PezLtpLAUxgJNQOQnO1qSAQMBNqbL7fxmo1oTdsDmEpG4RJcH94IPCVhwtiUb',
  },
});

export default api;
