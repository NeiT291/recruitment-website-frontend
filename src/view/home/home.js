import { useEffect, useState } from "react";
import CityService from "../../service/cityService";
import ProfesstionService from "../../service/professtionService";
import JobList from "../../components/Job/JobList";
import './Home.css'
import banner from '../../assets/imgs/bg_header.webp'
import CompanyList from "../../components/Company/CompanyList";
function Home() {
    const [cities, setCities] = useState([]);
    const [professions, setProfesstion] = useState([]);
    const [search_data_company, setSearchDataCompany] = useState(" ");
    const [search_data, setSearchData] = useState(
        {
            name: null,
            company: null,
            city: null,
            profession: null,
            min_wage: null,
            max_wage: null,
            page: 1
        }
    )
    useEffect(()=>{
        const fetchData = async() => {
            const tempDataCity = await CityService.getAllCity();
            const tempDataPro = await ProfesstionService.getAll();
            setCities(tempDataCity);
            setProfesstion(tempDataPro);
        }
        fetchData();
    },[])
    const CitySeclet = document.getElementById("search-address");
    for(let i = 0; i < cities.length;i++){
        var CityOption = document.createElement("option");
        CityOption.innerHTML = cities[i].name;
        CityOption.value = cities[i].name;
        CitySeclet.appendChild(CityOption);
    }
    const ProSeclet = document.getElementById("search-pro");
    for(let i = 0; i < professions.length;i++){
        var ProOption = document.createElement("option");
        ProOption.innerHTML = professions[i].name;
        ProOption.value = professions[i].name;
        ProSeclet.appendChild(ProOption);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let searchData = {
            name: document.getElementById("search-input").value,
            company: document.getElementById("search-company").value,
            city: document.getElementById("search-address").value,
            profession: document.getElementById("search-pro").value,
            min_wage: document.getElementById("search-min-wage").value,
            max_wage: document.getElementById("search-max-wage").value
        }
        if(searchData.city === "Tất cả các khu vực"){
            searchData.city = null;
        }
        if(searchData.profession === "Tất cả các ngành nghề"){
            searchData.profession = null;
        }
        setSearchData(searchData);
    }
    const searchCompany = (e) =>{
        e.preventDefault();
        e.preventDefault();
        let searchCompany = document.getElementById("search-company-input").value;
        if(searchCompany === null || searchCompany === ""){
            searchCompany = " ";
        }
        setSearchDataCompany(searchCompany);
    }
    return (
        <>
            <div className="banner">
                <img className="banner-img" src={banner} alt=""></img>
                <h1>TÌM VIỆC NGAY</h1>
            </div>
            <div className="home-page">
                <div className="search-bar">
                    <form id="form-search" onSubmit={handleSubmit}>
                        <div className="search-input">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input id="search-input" placeholder="Tên công việc" defaultValue={null}/>
                        </div>
                        <div className="search-options">
                            <input id="search-company" placeholder="Công ty"/>
                            <select id="search-address"/>
                            <select id="search-pro"/>
                            <input id="search-min-wage" type="number" placeholder="lương tối thiểu" min={0} defaultValue={null}/>
                            <input id="search-max-wage" type="number" placeholder="lương tối đa" min={0} defaultValue={null}/>
                        </div>
                        <input type="submit" hidden></input>
                    </form>
                </div>
                <JobList name={search_data.name} 
                        company={search_data.company} 
                        city={search_data.city} 
                        profession={search_data.profession} 
                        min_wage={search_data.min_wage} 
                        max_wage={search_data.max_wage} 
                        page={search_data.page}
                ></JobList>
                <form className="search-company-form" onSubmit={searchCompany}>
                    <div className="search-company-input">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input id="search-company-input" placeholder="Công ty"/>
                    </div>
                    <input type="submit" hidden></input>
                </form>
                <CompanyList name={search_data_company}></CompanyList>
            </div>
        </>
    );
}
export default Home;