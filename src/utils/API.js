import Axios from 'axios';

const API = {
  fetchPopularRepos: function(lang) {
    const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ lang + '&sort=stars&order=desc&type=Repositories');

    return Axios
           .get(encodedURI)
           .then(response => response.data.items);
  }
}

export default API;
