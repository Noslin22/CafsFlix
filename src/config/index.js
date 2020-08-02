/* eslint-disable no-undef */

const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://db-cafsflix.herokuapp.com';

export default {
  URL_BACKEND,
};
