import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://sqoop.kro.kr/',
  timeout: 1000,
});
instance.defaults.headers.common = {
  jwt: `${sessionStorage.getItem('token')}`,
};
export default instance;
