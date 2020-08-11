import config from '../config';

const VIDEOS_URL = `${config.URL_BACKEND}/videos`;

function deleteVideo(id) {
  // eslint-disable-next-line no-undef
  return fetch(`${VIDEOS_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    // body: JSON.stringify(objetoDoVideo),
    // method: 'DELETE',
  })
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível apagar os dados :(');
    });
}

function create(video) {
  // eslint-disable-next-line no-undef
  return fetch(`${VIDEOS_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  }).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();

      return responseJson;
    }

    throw new Error('Não foi possivel pegar os dados :(');
  });
}
function getAll() {
  // eslint-disable-next-line no-undef
  return fetch(`${VIDEOS_URL}`).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();

      return responseJson;
    }

    throw new Error('Não foi possivel pegar os dados :(');
  });
}

export default {
  create,
  deleteVideo,
  getAll,
};
