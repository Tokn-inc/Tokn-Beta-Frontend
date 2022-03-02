import axios from "axios";
// import dotenv from "dotenv";

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "./userActions";

// require("dotenv").config();

let axiosConfig = {
  withCredentials: true,
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type":
      "multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
  },
};

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = (user) => {
  console.log("User", user);
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};

export const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutFailure = () => {
  return {
    type: LOGOUT_FAILURE,
  };
};
export const signup =
  ({
    username,
    password,
    confirm_password,
    email,
    firstName,
    lastName,
    avatar,
    address,
  }) =>
  (dispatch) => {
    dispatch(signupRequest());
    console.log("in SignUp action");
    let formData = new FormData();
    formData.append("userName", username);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("userPic", avatar);
    formData.append("address", address);

    return confirm_password === password
      ? axios
          .post("http://localhost:8081/user/new", formData, {
            withCredentials: true,
            baseURL: "http://localhost:8081",
            headers: {
              "Content-Type":
                "multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
            },
          })
          .then((response) => {
            console.log(response);
            alert("Signup Successful");
            dispatch(
              signupSuccess({
                username,
                email,
                avatar: response.data.avatarURL,
                accessToken: response.data.token,
              })
            );
            window.location = "/home";
          })
          .catch((error) => {
            dispatch(signupFailure(error.response.data.message));
            alert(error.response.data.message);
          })
      : dispatch(signupFailure("ERROR: Both passwords don't match."));
  };

export const login =
  ({ detail, password, walletAddress }) =>
  async (dispatch) => {
    dispatch(loginRequest());
    // console.log("email", email);
    try {
      console.log(detail, password, walletAddress);
      await axios
        .post(
          "http://localhost:8081/user/login",
          { detail, password, walletAddress },
          {
            withCredentials: true,
            baseURL: "http://localhost:8081",
          }
        )
        .then((response) => {
          console.log("Fine here");
          let user = {
            username: response.data.username,
            email: response.data.email,
            avatar: response.data.avatar,
            accessToken: response.data.token,
          };
          console.log("response", response);
          dispatch(loginSuccess(user));
          // document.cookie = response.headers
          alert("Login successful");
          window.location = "/home";
        })
        .catch((error) => {
          dispatch(loginFailure(error.response.data.message));
          console.log(error.response.data);
          alert(error.response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

export const loginWithJWT = (address) => async (dispatch) => {
  axios
    .post(
      "http://localhost:8081/user/login-with-cookie",
      { address: address },
      {
        withCredentials: true,
        baseURL: "http://localhost:8081",
      }
    )
    .then((response) => {
      dispatch(
        loginSuccess({
          userName: response.data.username,
          email: response.data.email,
          avatar: response.data.avatar,
        })
      );
      window.location = "/home";
      console.log(response);
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export const logout = (username) => async (dispatch) => {
  dispatch(logoutRequest());
  console.log("hereee");
  return axios
    .post(
      "http://localhost:8081/user/logout",
      { username },
      {
        withCredentials: true,
        baseURL: "http://localhost:8081",
      }
    )
    .then((response) => {
      if (response.data.success) {
        dispatch(logoutSuccess());
        // alert("Logout Successful.");
        window.location = "/username";
      } else {
        dispatch(logoutFailure());
        alert("Logout Unsuccessful. Try Again");
      }
    })
    .catch((err) => {
      dispatch(logoutFailure);
      alert(err);
    });
};
