import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, fetchUser } from './operations';

const initialState = {
  user: { name: '', email: '' },
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
  state.error = action.payload;
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
      state.isLoggedIn = true;
    },
    [loginUser.rejected]: handleRejected,
    [logoutUser.pending]: handlePending,
    [logoutUser.fulfilled](state) {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [logoutUser.rejected]: handleRejected,
    [fetchUser.pending]: handlePending,
    [fetchUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [fetchUser.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
