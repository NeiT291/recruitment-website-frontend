import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/city";

export async function getAllCity() {
    let data;
    await axios.get(apiUrl, {
            responseType: 'json'
        })
        .then(function (response) {
            data = response.data.data;
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return data;
}
export default {getAllCity}