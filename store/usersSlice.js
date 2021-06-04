import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import usersService from '../services/usersService';

export const fetchUsers = createAsyncThunk('users/load', async thunkAPI => {
  try {
    const {data} = await usersService.getAll(1);
    return data;
  } catch (error) {
    console.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {users: []},
  reducers: {
    getAll: state => {
      return state;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, {payload}) => ({
      ...state,
      users: payload.data,
    }),
    [fetchUsers.rejected]: (state, {payload}) => ({
      ...state,
    }),
  },
});

export default usersSlice;
