import axios from "@/plugins/axios";

export function index(params) {
  return axios.get("/articles", { params });
}

export function show(id) {
  return axios.get(`/articles/${id}`);
}

export function store(params) {
  return axios.post("/articles", params);
}

export function update(id, params) {
  return axios.patch(`/articles/${id}`, params);
}

export function destroy(id) {
  return axios.delete(`/articles/${id}`);
}
