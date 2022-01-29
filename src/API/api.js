import axios from "axios";

const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "https://test-powr-back.herokuapp.com",
});

export function sendItems(json) {
  return api.post("/", {
    json,
  });
}

export function getItemsByID(id) {
  return api.get(`/${id}`);
}

export function updateItems(json, id) {
  return api.post(`/${id}`, {
    json,
  });
}
export default api;
