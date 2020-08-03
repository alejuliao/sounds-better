const URL_BACKEND_TOP = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://soundsbetter.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};
