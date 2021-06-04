import {useContext} from 'react';
import AuthContext from './context';
import storageService from './storageService';

const useAuth = () => {
  const {user, setUser} = useContext(AuthContext);

  const logIn = async authToken => {
    setUser(authToken);
    await storageService.storeData(authToken);
  };

  const logOut = async () => {
    setUser(null);
    await storageService.removeItem;
  };

  return {user, logIn, logOut};
};

export default useAuth;
