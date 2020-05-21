const request = (url: string, method: string, body: string): Promise<Response> => {
  if (!method) method = 'GET';
  const headers = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Auth-Tag', 'application/json');
  if (method !== 'GET') {
    headers.set('Content-Type', 'application/json');
    return fetch(url, {
      method,
      headers,
      body
    });
  }

  return fetch(url, { headers })
    .then(res => {
      if (res.status === 401) window.location.href = '/';
      return res;
    });
};

export default request;
