import axios from "@/plugins/axios";

export function login(params) {
  return axios.post("/auth/login", params);
}

export function me() {
  return axios.get("me");
}
