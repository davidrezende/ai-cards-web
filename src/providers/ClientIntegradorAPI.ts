import axios from 'axios';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

export const BASE_URL = 'https://api.eufor-ia.com'

export const useCardAPI = () => {
  const authHeader = useAuthHeader();

  const CardAPI = axios.create({
    baseURL: BASE_URL + '/v1/card',
    headers: {
      'Authorization': authHeader
    }
  });


  CardAPI.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log("token agora é pelo hook:" + useAuthHeader())
    console.log(error.response)
    return Promise.reject(error);
  });

  return CardAPI;
};


export const useQuestionAPI = () => {
  const authHeader = useAuthHeader();

  const QuestionAPI = axios.create({
    baseURL: BASE_URL + '/v1/question',
    headers: {
      'Authorization': authHeader
    }
  });


  QuestionAPI.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log("token agora é pelo hook:" + useAuthHeader())
    console.log(error.response)
    return Promise.reject(error);
  });
  


  return QuestionAPI;
};




export const useAuthAPI = () => {
  const authHeader = useAuthHeader();

  const AuthAPI = axios.create({
    baseURL: BASE_URL + '/auth',
    headers: {
      'Authorization': authHeader
    }
  });


  AuthAPI.interceptors.response.use(
    (response) => response,
    (error) => {
       if (error.response && error.response.status === 401) {
         console.log("Erro 401: Autenticação necessária.");
       }
       return Promise.reject(error);
    });
  return AuthAPI;
};



export const useUserAPI = () => {
  const authHeader = useAuthHeader();

  const UserAPI = axios.create({
    baseURL: BASE_URL + '/v1/user',
    headers: {
      'Authorization': authHeader
    }
  });


  UserAPI.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log("token agora é pelo hook:" + useAuthHeader())
    console.log(error.response)
    return Promise.reject(error);
  });
  return UserAPI;
};

