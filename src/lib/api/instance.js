import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.180.189.240:3000/',
  timeout: 1000,
});

instance.defaults.headers.common = {
  jwt:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IuyYiOyngCIsImlhdCI6MTYxMDYyNjI1OCwiZXhwIjoxNjExMjMxMDU4LCJpc3MiOiJsY2cifQ.P44MKAAObdu5sWPvywxNa2s96gs3LR8runHNkCd2ohw',
};
export default instance;
