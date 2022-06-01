import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/sections";

export function getSections(id) {
  return http.get(apiEndpoint + "/" + id);
}
