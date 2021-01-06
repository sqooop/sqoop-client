import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
});

instance.defaults.headers.common = {
  jwt:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYwOTkxMDgxMywiZXhwIjoxNjA5OTk3MjEzLCJpc3MiOiJsY2cifQ.n9gI3esMfhdi9xt03WUWxZ2NUUdgup-pIEDRXev33-M',
};
export default instance;
