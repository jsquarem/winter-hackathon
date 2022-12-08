const BASE_URL = `/api/projects/`;

const create = (projectPayload) => {
  const queryURL = `${BASE_URL}create/`;
  return fetch(queryURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectPayload)
  }).then((res) => {
    if (res.ok) return res.json();
    return { error: 'Cannot create project' };
  });
};

export default {
  create
};
