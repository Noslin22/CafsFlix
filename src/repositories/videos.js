import config from '../config';

const VIDEOS_URL = `${config.URL_BACKEND}/videos`;

function deleteVideo(idVideo) {
  // eslint-disable-next-line no-undef
  return fetch(`${VIDEOS_URL}/${idVideo}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  }).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();

      return responseJson;
    }

    throw new Error('Não foi possivel pegar os dados :(');
  });
}

function createVideo(video) {
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

export default {
  createVideo,
  deleteVideo,
};
