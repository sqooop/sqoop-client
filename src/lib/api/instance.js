import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.180.189.240:3000/',
  timeout: 1000,
});

instance.defaults.headers.common = {
  jwt:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYxMDYwMzE5NSwiZXhwIjoxNjExMjA3OTk1LCJpc3MiOiJsY2cifQ.c62Cm6w7pvEDAQNrWX2a-uJTXnYFXZusoaLoL6JtoD0',
};
export default instance;
