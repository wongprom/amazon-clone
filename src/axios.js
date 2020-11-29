import axios from 'axios';

const instance = axios.create({
  //the API (cloud function) Url
  baseURL: 'http://localhost:5001/clone-f609f/us-central1/api',
});
export default instance;
