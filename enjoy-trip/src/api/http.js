import axios from 'axios';

// const baseURL = "http://192.168.208.55:8080/enjoytrip";
const baseURL = 'http://localhost:8080/enjoytrip';

const http = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

function axiosBuilderWithJwt() {
  return axios.create({
    baseURL: `${baseURL}`,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
  });
}

export { baseURL, http, axiosBuilderWithJwt };
