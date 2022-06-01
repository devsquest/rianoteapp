import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/headings";

export function getHeadingsByType(id) {
    return http.get(apiEndpoint + "/" + id);
}

export function saveHeading(heading_text, heading_content, note_id, head_id) {
    return http.post(apiEndpoint + '/save', { heading_text, heading_content, note_id, head_id });
}

export function editHeadingById(id, heading_text, heading_content) {
    return http.put(apiEndpoint + '/' + id, { heading_text, heading_content });
}

export function deleteHeadingById(id) {
    return http.delete(apiEndpoint + '/' + id);
}
