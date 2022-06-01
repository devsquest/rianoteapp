import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/questions";

export function getQuestionsWithOptions(id) {
  return http.get(apiEndpoint + "/" + id);
}
