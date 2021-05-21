import axios from "axios";

const namespace = "project_purple_kw";
// this isn't a secret
const key = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";
export const requestUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;

const createAxiosConfig = () => {
  return axios.create({
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });
};

const api = createAxiosConfig();
export default api;
