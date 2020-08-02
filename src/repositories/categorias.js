import config from '../config';

const CATEGORIES_URL = `${config.URL_BACKEND}/categorias`;

function getWithVideos() {
  // eslint-disable-next-line no-undef
  return fetch(`${CATEGORIES_URL}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();

      return responseJson;
    }

    throw new Error('Não foi possivel pegar os dados :(');
  });
}

export default {
  getWithVideos,
};
