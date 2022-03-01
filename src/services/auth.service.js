import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8092/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  registerPatient(nom, prenom, username, email, password, taille, poids, chirurgienUsername) {
    return axios.post(API_URL + "signup/patient", {
      nom,
      prenom,
      username,
      email,
      password,
      taille,
      poids,
      chirurgienUsername,
    }, { headers: authHeader() });
  }

  registerAdmin(username, email, password) {
    return axios.post(API_URL + "signup/admin", {
      username,
      email,
      password,
    }, { headers: authHeader() });
  }

  registerChirurgien(nom, prenom, username, email, password, discipline, numeroRPS,
                     lieuxConsultation, lieuxInterventionChirurgicale, adresseAdomicile,
                     numTelAdomicile, numTelPersonnel) {
    return axios.post(API_URL + "signup/chirurgien", {
      nom,
      prenom,
      username,
      email,
      password,
      discipline,
      numeroRPS,
      lieuxConsultation, 
      lieuxInterventionChirurgicale, 
      adresseAdomicile,
      numTelAdomicile, 
      numTelPersonnel
    }, { headers: authHeader() });
  }

  registerPersonnel(nom, prenom, username, email, password, discipline) {
    return axios.post(API_URL + "signup/personnel", {
      nom,
      prenom,
      username,
      email,
      password,
      discipline,
    }, { headers: authHeader() });
  }

  registerMedecin(nom, prenom, username, email, password, discipline, numeroRPS, lieuxConsultation) {
    return axios.post(API_URL + "signup/medecin", {
      nom,
      prenom,
      username,
      email,
      password,
      discipline,
      numeroRPS,
      lieuxConsultation,
    }, { headers: authHeader() });
  }

}

export default new AuthService();
