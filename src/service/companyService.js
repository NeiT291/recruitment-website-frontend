import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/companies";
const token = localStorage.getItem("token");

export async function getAllCompany(page, pageSize){
    let data;
    await axios.get(apiUrl + "/all", {
                page: page,
                pageSize: pageSize
            })
            .then(function (response) {
                data = response.data.data;
                console.log(data)
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    
    return data;
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
export default {getAllCompany, search}