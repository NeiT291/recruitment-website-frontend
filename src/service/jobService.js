import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/jobs";
const token = localStorage.getItem("token");

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
export default {search}