import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { registerFailure, registerStart, registerSuccess } from "./userRedux";

import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    window.location = "/houses";
  } catch (err) {
    dispatch(loginFailure());
    alert("Invalid Username or Password!");
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    window.location = "/houses";
  } catch (err) {
    dispatch(registerFailure());
    alert("Invalid Username or Password!");
  }
};