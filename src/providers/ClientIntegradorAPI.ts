import axios from 'axios';

export const BASE_URL = 'http://localhost:8080'
export const CardAPI = axios.create({ baseURL: BASE_URL + '/v1/card' });
export const QuestionAPI = axios.create({ baseURL: BASE_URL + '/v1/question'})

CardAPI.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(error.response)
  return Promise.reject(error);
});
