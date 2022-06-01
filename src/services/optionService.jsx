import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/option";

export function saveOptionWithId(id, option_text) {
    return http.put(apiEndpoint + '/' + id, {option_text});
}
