import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://54.180.189.240:3000/',
  timeout: 1000,
});
instance.defaults.headers.common = {
  jwt: `${localStorage.getItem('token')}`,
};
export default instance;
