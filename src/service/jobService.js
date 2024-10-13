import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/jobs";
const token = localStorage.getItem("token");

export async function deleteJob(id){
    let data;
    await axios.delete(apiUrl, {
            params:{
                'id': id
            },
            responseType: 'json'
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
export async function search(info, page, pageSize){
    let data;
    await axios.get(apiUrl + "/search", {
            params:{
                name: info.name,
                city: info.city,
                company: info.company,
                profession: info.profession,
                min_wage: info.min_wage,
                max_wage: info.max_wage,
                page: page,
                pageSize: pageSize
            },
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
export async function getJobById(id){
    let data;
    await axios.get(apiUrl, {
            params:{
                'id': id
            },
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
export async function editJob(id, info){
    let data;
    let rawJson = JSON.stringify({
        "name": info.name,
        "description": info.description,
        "address": info.address,
        "experience": info.experience,
        "min_wage": info.min_wage,
        "max_wage": info.max_wage,
        "wage": info.wage,
        "deadline": info.deadline,
        "profession": info.profession,
        "company": info.company,
        "cities": [
            info.city
        ]
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
export async function createJob(info){
    let data;
    let rawJson = JSON.stringify({
        "name": info.name,
        "description": info.description,
        "address": info.address,
        "experience": info.experience,
        "min_wage": info.min_wage,
        "max_wage": info.max_wage,
        "wage": info.wage,
        "deadline": info.deadline,
        "profession": info.profession,
        "company": info.company,
        "cities": [
            info.city
        ]
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
export default {search, getJobById, deleteJob, editJob, createJob}