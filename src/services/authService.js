import http from './httpService';

const login = async user => {
  return await http.post('/login', user);
};

const register = async user => {
  return await http.post('/register', user);
};
const authService = {
  login,
  register,
};

export default authService;
