const BASE_URL = `/api/products/`;

export function getProductbyURL(productURL) {
  const queryURL = `${BASE_URL}find/`;
  return fetch(queryURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productURL)
  }).then((res) => {
    if (res.ok) return res.json();
    return { error: 'Cannot find Amazon Product' };
  });
}
