import tokenService from './tokenService';

const BASE_URL = '/api/teachers/';

function create(profileData) {
  return fetch(BASE_URL + 'create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profileData)
  }).then((res) => {
    console.log(res, '<-res teacher');
    if (res.ok) return res.json();
    throw new Error('Profile Creation failed!');
  });
}

function getTeacherData(id) {
  const queryURL = `${BASE_URL}find/${id}/`;
  return fetch(queryURL, {
    method: 'GET'
  }).then((res) => {
    if (res.ok) return res.json();
    return { error: 'Cannot find Teacher' };
  });
}

export default {
  create,
  getTeacherData
};
