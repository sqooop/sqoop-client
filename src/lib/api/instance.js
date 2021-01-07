import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.180.189.240:3000/',
  timeout: 1000,
});

instance.defaults.headers.common = {
  jwt:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYwOTk5NzYwNywiZXhwIjoxNjEwNjAyNDA3LCJpc3MiOiJsY2cifQ.9Ua8ekgW9CFKuy6M_0p2drB9fnprPmewZUVSgNH47Hg',
};
export default instance;
