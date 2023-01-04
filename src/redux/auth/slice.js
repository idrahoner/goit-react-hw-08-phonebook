import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './operations';

const initialState = {
  user: { username: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload.error;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending]: handlePending,
    [registerUser.fulfilled](state, action) {
      state.error = null;
      state.isRefreshing = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registerUser.rejected]: handleRejected,
    [loginUser.pending]: handlePending,
    [loginUser.fulfilled](state, action) {
      state.error = null;
      state.isRefreshing = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUser.rejected]: handleRejected,
    [logoutUser.pending]: handlePending,
    [logoutUser.fulfilled](state) {
      state.user = initialState.user;
      state.token = '';
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [logoutUser.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
