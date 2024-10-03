import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/users/";
const token = localStorage.getItem("token");

export async function getUserInfo(){
    let info = {};
    await axios.get(apiUrl + "my-info", {
                headers :{
                    'Authorization': `Bearer ${token}`
                },
                responseType: 'json'
    
            })
            .then( async function (response) {
                info.fullname = response.data.data.fullname;
                info.avatar = await getAvatar(response.data.data.username);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    
    return info;
}
export async function getAvatar(username){
    let imgUrl;
    await axios.get(apiUrl + "avatar", {
            params: {
                'username': username
            },
            responseType: 'blob'
        })
        .then(function (response) {
            imgUrl = URL.createObjectURL(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    return imgUrl;
}
export function logout(){
    localStorage.removeItem("token");
    window.location.reload();
}
export default {getUserInfo, getAvatar, logout}
