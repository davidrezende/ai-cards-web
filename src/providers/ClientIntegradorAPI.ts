import axios from 'axios';
import Cookies from 'js-cookie'

export const BASE_URL = import.meta.env.AI_CARDS_API_URL; // 'http://localhost:8080'
export const CardAPI = axios.create({
  baseURL: BASE_URL + '/v1/card',
  headers: {
    'Authorization': `Bearer ${Cookies.get('_auth')}`
  }
});
export const QuestionAPI = axios.create({
  baseURL: BASE_URL + '/v1/question',
  headers: {
    'Authorization': `Bearer ${Cookies.get('_auth')}`
  }
});
export const UserAPI = axios.create({ baseURL: BASE_URL + '/auth' })

CardAPI.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(error.response)
  return Promise.reject(error);
});

