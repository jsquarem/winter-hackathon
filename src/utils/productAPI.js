const BASE_URL = `/api/products/`;

export function getProductbyURL(productURL) {
  const queryURL = `${BASE_URL}find/${productURL}/`;
  return fetch(queryURL, {
    method: 'GET'
  }).then((res) => {
    if (res.ok) return res.json();
    return { error: 'Cannot find Amazon Product' };
  });
}
