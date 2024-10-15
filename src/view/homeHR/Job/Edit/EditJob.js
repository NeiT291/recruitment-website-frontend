import { useNavigate, useSearchParams } from 'react-router-dom';
import './EditJob.css'
import { useEffect, useState } from 'react';
import cityService from '../../../../service/cityService';
import professtionService from '../../../../service/professtionService';
import jobService from '../../../../service/jobService';

export default function EditJob(props){
    const [searchParam] = useSearchParams();
    const id = searchParam.get("id");
    const [cities, setCities] = useState([]);
    const [professions, setProfesstion] = useState([]);

    const [job, setJob] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            const tempDataCity = await cityService.getAllCity();
            const tempDataPro = await professtionService.getAll();
            const tempJob = await jobService.getJobById(id)
            setCities(tempDataCity);
            setProfesstion(tempDataPro);
            setJob(tempJob);
        }
        fetchData();
    },[])
    const CitySeclet = document.getElementById("edit-city");
    for(let i = 0; i < cities.length;i++){
        var CityOption = document.createElement("option");
        CityOption.innerHTML = cities[i].name;
        CityOption.value = cities[i].name;
        if(CityOption.value == job.city){
            CityOption.selected = true;
        }
        CitySeclet.appendChild(CityOption);
    }
    const ProSeclet = document.getElementById("edit-profession");
    for(let i = 0; i < professions.length;i++){
        var ProOption = document.createElement("option");
        ProOption.innerHTML = professions[i].name;
        ProOption.value = professions[i].name;
        if(ProOption.value == job.profession){
            ProOption.selected = true;
        }
        ProSeclet.appendChild(ProOption);
    }
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
            let name = document.getElementById("edit-name").value;
            let description = document.getElementById("edit-description").value;
            let address = document.getElementById("edit-address").value;
            let experience = document.getElementById("edit-exp").value;
            let min_wage = document.getElementById("edit-min-wage").value;
            let max_wage = document.getElementById("edit-max-wage").value;
            let wage = document.getElementById("edit-wage").value;
            let deadline = document.getElementById("edit-deadline").value;
            let profession = document.getElementById("edit-profession").value;
            let city = document.getElementById("edit-city").value;
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
                city: city
            }
            const response = await jobService.editJob(id, info);
            if(await response.code === 200){
                navigate("/hr",  { replace: true });
            }else{
                alert("Lỗi!!!")
            }
    }
    return(
        <div className="edit-job-container">
            <form className="form-edit" onSubmit={handleSubmit}>
                <label>Tiêu đề</label>
                <input id="edit-name" type="text" placeholder="Tiêu đề" defaultValue={job.name}/>
                <label>Mô tả</label>
                <textarea id="edit-description" type="" placeholder="Mô tả" defaultValue={job.description}/>
                <label>Địa chỉ</label>
                <input id="edit-address" type="text" placeholder="Địa chỉ" defaultValue={job.address}/>
                <label>Kinh nghiệm</label>
                <input id="edit-exp" type="number" placeholder="Kinh nghiệm" defaultValue={job.experience}/>
                <label>Lương tối thiểu</label>
                <input id="edit-min-wage" type="number" placeholder="Lương tối thiểu" defaultValue={job.min_wage}/>
                <label>Lương tối đa</label>
                <input id="edit-max-wage" type="number" placeholder="Lương tối đa" defaultValue={job.max_wage}/>
                <label>Lương chính xác</label>
                <input id="edit-wage" type="number" placeholder="Lương chính xác" defaultValue={job.wage}/>
                <label>Ngày hết hạn</label>
                <input id="edit-deadline" type="date" defaultValue={job.deadline}/>
                <label>Ngành nghề</label>
                <select id="edit-profession"></select>
                <label>Khu vực</label>
                <select id="edit-city"></select>
                <button type="submit">Sửa</button>
            </form>
        </div>
    )
}