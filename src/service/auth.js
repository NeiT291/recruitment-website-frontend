import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/auth/";

export default async function loginApi(username, password){
    let data;
    await axios.post(apiUrl + "login", {
        username: username,
        password: password
      })
      .then(async function (response) {
        await localStorage.setItem("token", response.data.data.token);
        data = response.data.data.token;
      })
      .catch(function (error) {
        console.log(error);
      });
    return data;
}