import { createSlice } from "@reduxjs/toolkit";

const getUserInfo = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const defaultState = {
  user: getUserInfo(),
  theme: "dark",
  sidebar: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload.user);
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logoutUser: (state) => {
      localStorage.removeItem("page");
      localStorage.removeItem("user");
    },
    updateUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    themeUpdate: (state, action) => {
      console.log(state);
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});
//console.log(userSlice);

//// This is userSlice object: so basically we need actions and reducer function
// Objectactions: {loginUser: ƒ, logoutUser: ƒ, themeUpdate: ƒ}caseReducers: {loginUser: ƒ, logoutUser: ƒ, themeUpdate: ƒ}getInitialState: ƒ ()name: "user"reducer: ƒ (state, action)[[Prototype]]: Object
// register:1 [Intervention] Slow network is
//
export const { loginUser, logoutUser, themeUpdate, toggleSidebar, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
