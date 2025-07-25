import { data } from "react-router-dom";
import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
  // then callback function for : res.data => data.data
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  return http.post("/user/complete-profile", data).then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
