import {combineReducers} from '@reduxjs/toolkit';
import usersSlice from './usersSlice';

export default combineReducers({
  users: usersSlice.reducer,
});
