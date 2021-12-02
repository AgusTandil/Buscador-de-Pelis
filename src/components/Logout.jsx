import axios from "axios";

export function Logout(e) {
  console.log("DESLOGUEADO!!!");
  e.preventDefault();
  console.log("HOLA")
  return axios.post("/api/auth/logout");

}
