import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://sqoop.ga/',
  timeout: 1000,
});
instance.defaults.headers.common = {
  jwt: `${sessionStorage.getItem('token')}`,
};
export default instance;
