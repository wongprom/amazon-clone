import axios from 'axios';

const instance = axios.create({
  //the API (cloud function) Url
  baseURL: 'https://us-central1-clone-f609f.cloudfunctions.net/api',
});
export default instance;
// 'http://localhost:5001/clone-f609f/us-central1/api',
