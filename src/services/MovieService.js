import axios from 'axios';
import CONFIG from '../config';

export default class MovieService {
  async getMovieByKeyword(keyword) {
    let response;
    try{
      response = await axios.get(`${CONFIG.BASE_URL}&t=${keyword}`);
    } catch(error) {
      console.warn(error);
    }
    return response;
  }
}