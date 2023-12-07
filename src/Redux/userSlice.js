import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    activeUser: JSON.parse(localStorage.getItem("activeUser")) || null,
    isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
  },
  reducers: {
    setLogin: (state, action) => {
      const { email } = action.payload;
      const userData = JSON.parse(localStorage.getItem("userData")) || [];

      const foundUser = userData.find((data) => data.email === email);

      if (foundUser) {
        state.isLogin = true;
        state.activeUser = foundUser;
        localStorage.setItem(
          "activeUser",
          JSON.stringify({ email: foundUser.email, name: foundUser.name })
        );
        localStorage.setItem("isLogin", true);
      }
      if (state.isLogin==true) {
        alert("successfully Logged in")
        return;
    }
    else {
        alert("user not available please sign up first")
    }
    },
    setLogout: (state) => {
        console.log("hi")
      state.isLogin = false;
      state.activeUser = null;
      localStorage.removeItem("activeUser");
      localStorage.removeItem("isLogin");
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
