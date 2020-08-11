/* eslint-disable no-undef */
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

function getAll() {
  // eslint-disable-next-line no-undef
  return fetch(`${CATEGORIES_URL}`).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();

      return responseJson;
    }

    throw new Error('Não foi possivel pegar os dados :(');
  });
}
function create(objetoDaCategoria) {
  return fetch(`${CATEGORIES_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
    // method: 'DELETE',
  })
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function edit(objetoModificado, id) {
  return fetch(`${CATEGORIES_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoModificado),
  })
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function deleteCateg(id) {
  return fetch(`${CATEGORIES_URL}/${id}?_embed=videos`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (firstResponse) => {
      if (firstResponse.ok) {
        const responseParsed = await firstResponse.json();
        return responseParsed;
      }

      throw new Error('Não foi possível apagar os dados :(');
    });
}

export default {
  getWithVideos,
  getAll,
  create,
  edit,
  deleteCateg,
};
