import axios from 'axios';
const apiUrl = "http://localhost:8080/api/v1/resumes";
const token = localStorage.getItem("token");
export async function uploadResume(id, file, token){
    let data;
    const formData = new FormData();
    formData.append('file',file);
    formData.append('id', id);
    await axios.post(apiUrl, formData, {
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
export async function getUserList(id){
    let data;
    await axios.get(apiUrl + "/job", {
                headers:{
                    'Authorization': `Bearer ${token}`
                },
                params:{
                    "id": id
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
export async function downloadResume(id){
    let data;
    await axios.get(apiUrl + "/download", {
                headers:{
                    'Authorization': `Bearer ${token}`
                },
                params:{
                    "id": id
                },
                responseType: 'blob'
            })
            .then(function (response) {
                data = URL.createObjectURL(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    
    return data;
}
export default { uploadResume,getUserList, downloadResume }