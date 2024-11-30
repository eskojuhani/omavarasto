import axios from "axios";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

const API_URL = "http://localhost:8080/api/auth/";

export const loginAxios = (username: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const login = async (username: string, password: string): Promise<any> => {
  await signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      return Promise.resolve(user);
    })
    .catch((error: Error) => {
      console.log(error.message);
      return Promise.reject(error);
    });
};

export const logout = () => {
  signOut(auth).then(() => {
    localStorage.removeItem("user");
  }
)};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
