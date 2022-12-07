import tokenService from './tokenService';

const BASE_URL = '/api/schools/';

function create(schoolData) {
  return fetch(BASE_URL + 'create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(schoolData)
  }).then((res) => {
    console.log(res, '<-res school');
    if (res.ok) return res.json();
    throw new Error('School Creation failed!');
  });
}

export default {
  create
};
