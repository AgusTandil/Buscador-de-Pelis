import axios from "axios";

export function Logout(e) {
  console.log("DESLOGUEADO!!!");
  e.preventDefault();
  return axios.post("/api/auth/logout");
}
