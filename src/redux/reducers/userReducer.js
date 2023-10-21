import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    token: localStorage.getItem('token') || '',
  },
  {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      console.log({ action });
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action?.payload?.user || {};
      localStorage.setItem("token", JSON.stringify(action?.payload?.token));
      localStorage.setItem("premaUser", JSON.stringify(action?.payload?.user));
      state.message = action?.payload?.message || 'successfully logged in ';
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem('premaUser');
      if (action.payload) state.error = action?.payload?.error || action?.payload?.password || action?.payload?.email || "something went wrong";
      else state.error = "something went wrong";
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
    addMessage: (state, action) => {
      state.message = action.payload;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem('premaUser');
    },
    logoutFail: (state, action) => {
      state.loading = false;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state) => {
      state.loading = false;
      state.message = "successfully Registered";
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = (action.payload || "something went wrong");
      // debugger
      console.log(action.payload)
    },
  }
);
