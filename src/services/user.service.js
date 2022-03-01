import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8092/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "patient", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "chirurgien", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
  getAllUsers(){
    return axios.get(API_URL + "patients", { headers: authHeader() });
  }
}

export default new UserService();
