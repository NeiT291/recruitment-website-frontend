import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/companies";
const token = localStorage.getItem("token");

export async function getAllCompany(page, pageSize){
    let data;
    await axios.get(apiUrl + "/all", {
                params:{
                    page: page,
                    pageSize: pageSize
                }
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
export async function getLogo(id){
    let imgUrl;
    await axios.get(apiUrl + "/avatar", {
            params: {
                'id': id
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
export async function search(name, page, pageSize){
    let data;
    await axios.get(apiUrl + "/search", {
                params:{
                    name: name,
                    page: page,
                    pageSize: pageSize
                }
            })
            .then(function (response) {
                data = response.data.data.data;
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    
    return data;
}
export async function editCompany(id, info){
    let data;
    let rawJson = JSON.stringify({
        "name": info.name,
        "description": info.description,
        "address": info.address,
        "websiteUrl": info.website
      });
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: apiUrl + `/${id}`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        },
        data : rawJson
      };

    await axios.request(config)
        .then(function (response) {
            data = response.data;
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return data;
}
export async function uploadLogo(id, file){
    let data;
    const formData = new FormData();
    formData.append('file',file);
    formData.append('id', id);
    await axios.post(apiUrl + "/avatar", formData, {
                headers:{
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
                
            })
            .then(function (response) {
                data = response.data;
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    
    return data;
}
export async function createCompany(info){
    let data;
    let rawJson = JSON.stringify({
        "name": info.name,
        "description": info.description,
        "address": info.address,
        "websiteUrl": info.website
      });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: apiUrl,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        },
        data : rawJson
      };

    await axios.request(config)
        .then(function (response) {
            data = response.data;
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return data;
}
export default {getAllCompany, search, getLogo, editCompany, uploadLogo, createCompany}