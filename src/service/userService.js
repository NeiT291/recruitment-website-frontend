import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/users";

export async function getUserInfo(token){
    let info = {};
    await axios.get(apiUrl + "/my-info", {
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
                localStorage.removeItem("token");
                console.log(error);
            });
    
    return info;
}
export async function getAvatar(username){
    let imgUrl;
    await axios.get(apiUrl + "/avatar", {
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
    // window.location.reload();
}
export async function registerUser(data){
    let info;
    await axios.post(apiUrl, {
                username: data.username,
                password: data.password,
                fullname: data.fullname,
                email: data.email,
                phone: data.phone,
                address: data.address,
                dob: data.dob
            })
            .then(function (response) {
                info = response.data.data;
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    
    return info;
}
export async function registerHr(data){
    let info;
    await axios.post(apiUrl, {
                username: data.username,
                password: data.password,
                fullname: data.fullname,
                email: data.email,
                phone: data.phone,
                address: data.address,
                dob: data.dob
            })
            .then(function (response) {
                info = response.data.data;
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    
    return info;
}
export default {getUserInfo, getAvatar, logout, registerUser, registerHr}
