import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/auth/";

export default function loginApi(username, password){

    axios.post(apiUrl + "login", {
        username: username,
        password: password
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
}