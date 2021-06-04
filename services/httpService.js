import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://reqres.in/api/',
  timeout: 1000,
});

// Add a response interceptor
instance.interceptors.response.use(null, error => {
  if (error.response) {
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
  return Promise.reject(error);
});

const httpService = {
  get: instance.get,
  post: instance.post,
};
export default httpService;
