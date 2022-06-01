import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/notes";

export function getNotes() {
  return http.get(apiEndpoint);
}
export function getSectionsByType(id) {
  return http.get(apiEndpoint + "/" + id);
}
