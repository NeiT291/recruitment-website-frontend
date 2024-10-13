import { useContext, useEffect, useState } from 'react';
import './CreateJob.css'
import cityService from '../../../service/cityService';
import professtionService from '../../../service/professtionService';
import jobService from '../../../service/jobService';
import { TokenContext } from '../../../App';
import userService from '../../../service/userService';
import { useNavigate } from 'react-router-dom';
export default function CreateJob(props){
    const { token } = useContext(TokenContext);
    const [cities, setCities] = useState([]);
    const [professions, setProfesstion] = useState([]);
    const [user , setUser] = useState([])
    useEffect(()=>{
        const fetchData = async() => {
            const tempDataCity = await cityService.getAllCity();
            const tempDataPro = await professtionService.getAll();
            const tempUser = await userService.getUserInfo(token)
            setUser(tempUser);
            setCities(tempDataCity);
            setProfesstion(tempDataPro);
        }
        fetchData();
    },[])
    const CitySeclet = document.getElementById("create-city");
    for(let i = 0; i < cities.length;i++){
        var CityOption = document.createElement("option");
        CityOption.innerHTML = cities[i].name;
        CityOption.value = cities[i].name;
        CitySeclet.appendChild(CityOption);
    }
    const ProSeclet = document.getElementById("create-profession");
    for(let i = 0; i < professions.length;i++){
        var ProOption = document.createElement("option");
        ProOption.innerHTML = professions[i].name;
        ProOption.value = professions[i].name;
        ProSeclet.appendChild(ProOption);
    }
    const navigate = useNavigate();
    const submitHandle = async (e) =>{
        e.preventDefault();
        let name = document.getElementById("create-name").value;
            let description = document.getElementById("create-description").value;
            let address = document.getElementById("create-address").value;
            let experience = document.getElementById("create-exp").value;
            let min_wage = document.getElementById("create-min-wage").value;
            let max_wage = document.getElementById("create-max-wage").value;
            let wage = document.getElementById("create-wage").value;
            let deadline = document.getElementById("create-deadline").value;
            let profession = document.getElementById("create-profession").value;
            let city = document.getElementById("create-city").value;
            const info = {
                name: name,
                description: description,
                address: address,
                experience: experience,
                min_wage: min_wage,
                max_wage: max_wage,
                wage: wage,
                deadline:deadline,
                profession: profession,
                company: await user.company.name,
                city: city
            }
            const response = await jobService.createJob(info);
            if(response.code === 200){
                navigate("/hr",  { replace: true });
            }else{
                alert("Lỗi!!!")
            }
    }
    return(
        <div className="create-job-container">
            {/* <span>{user.company.name}</span> */}
            <form className="form-create" onSubmit={submitHandle}>
                <input id="create-name" type="text" placeholder="Tiêu đề"/>
                <textarea id="create-description" type="" placeholder="Mô tả"/>
                <input id="create-address" type="text" placeholder="Địa chỉ"/>
                <input id="create-exp" type="number" placeholder="Kinh nghiệm"/>
                <input id="create-min-wage" type="number" placeholder="Lương tối thiểu"/>
                <input id="create-max-wage" type="number" placeholder="Lương tối đa"/>
                <input id="create-wage" type="number" placeholder="Lương chính xác"/>
                <input id="create-deadline" type="date"/>
                <select id="create-profession"></select>
                <select id="create-city"></select>
                <button type="submit">Đăng</button>
            </form>
        </div>
    )
}