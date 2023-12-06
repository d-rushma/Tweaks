import axios from "axios";
class tweaksApi {
  constructor() {
    this._apiUrl = "http://localhost:5000/api/ideas";
  }
  getTweaks() {
    return axios.get(this._apiUrl);
  }
}
export default new tweaksApi();
