const BASE_URL = `http://localhost:3001/api/`;

export function getProductbyURL(productURL) {
  const queryURL = `${BASE_URL}products/find/${productURL}/`;
  return fetch(queryURL, {
    method: 'GET'
  }).then((res) => {
    console.log(res.json(), '<-res');
    if (res.ok) return res.json();
    return { error: 'Cannot find Amazon Product' };
  });
}
