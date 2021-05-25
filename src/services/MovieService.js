import axios from 'axios';
import CONFIG from '../config';

export default class MovieService {
  async getMovieByKeyword(keyword) {
    let response;
    try {
      response = await axios.get(`${CONFIG.BASE_URL}&s=${keyword}`);
    } catch(error) {
      console.warn(error);
    }
    return response;
  }

  async getMovieByImdbId(imdbId) {
    let response;
    try {
      response = await axios.get(`${CONFIG.BASE_URL}&i=${imdbId}`)
    } catch(error) {
      console.warn(error);
    }
    return response;
  }
}