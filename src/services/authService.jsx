import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";
const tokenKey = "token";
http.setToken(getToken());

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
export function logout() {
  return localStorage.removeItem(tokenKey);
}
export function getToken() {
  return localStorage.getItem(tokenKey);
}
export function getUser() {
  const apiUser = apiUrl + "/details";
  return http.get(apiUser);
}
export function saveBasicUserData(userData) {
  //const body = { ...userData };
  const userInfo = apiUrl + "/user-info";
  return http.post(userInfo, userData);
}

export default {
  login,
  logout,
  getUser,
  getToken,
  saveBasicUserData,
};
