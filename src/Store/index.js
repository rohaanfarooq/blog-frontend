import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    redirectTo: "/",
    mode: localStorage.getItem("thememode")
      ? localStorage.getItem("thememode")
      : "light",
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      state.isLoggedIn = false;
    },
    updateRedirect(state, path) {
      state.redirectTo = path;
    },
    changeMode(state) {
      state.mode = state.mode == "light" ? "dark" : "light";
      localStorage.setItem("thememode", state.mode);
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
