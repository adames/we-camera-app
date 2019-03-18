export const imageAPI = {
  get: (userOptions = {}) => {
    const defaultOptions = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
    };

    const options = Object.assign({}, defaultOptions, userOptions);

    return fetch('http://localhost:3004/images', options)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        return myJson;
      })
      .catch(e => {
        console.error('API.images.get failure', e);
      });
  },
  post: async (data, userOptions = {}) => {
    const defaultOptions = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data),
    };

    const options = Object.assign({}, defaultOptions, userOptions);

    try {
      const response = await fetch('http://localhost:3004/images', options);
      const myJson = await response.json();
      return JSON.stringify(myJson);
    } catch (e) {
      console.error('API.images.post failure', e);
    }
  },
};
