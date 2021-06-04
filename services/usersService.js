import http from './httpService';

const getAll = async (page = 1) => {
  return await http.get(`/users?page=${page}`);
};

const retrieve = async id => {
  return await http.get(`/users/${id}`);
};

const create = async user => {
  return await http.post('/users', user);
};

const usersService = {
  getAll,
  retrieve,
  create,
};

export default usersService;
