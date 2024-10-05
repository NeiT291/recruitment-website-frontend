import JobItem from "./JobItem";
import './JobList.css'
import JobService from "../../service/jobService";
import { useEffect, useState } from "react";
export default function JobList(props){
    const [data, setData] = useState([]);
    const [search_data, setSearchData] = useState([])
    
    const tempSearch ={
        name: props.name,
        company: props.company,
        city: props.city,
        profession: props.profession,
        min_wage: props.min_wage,
        max_wage: props.max_wage,
    }
    
    useEffect(()=>{
        const fetchData = async() => {
            setSearchData(tempSearch)
            setData(await JobService.search(tempSearch, 1, 10));
        }
        fetchData();
    },[props])
    return(
        <div id="job-list">
            <div className="list-item">
                {data.data?.map((item) => {
                    if(item.active){
                        let wage = item.min_wage + " - " + item.max_wage + " triệu";
                        if(item.wage !== 0){
                            wage = item.wage + " triệu";
                        }
                        return (
                            <JobItem key={item.id} name={item.name} company={item.company} wage={wage} cities={item.cities[0].name} profession={item.profession.name}></JobItem>
                        )
                    }
                })}
               
            </div>
            <div className="page-info">
                <i className="fa-solid fa-backward-step"></i>
                <span className="current-page">{data?.current_page + 1}</span>
                <span>...</span>
                <span className="total-pages">{data.total_pages}</span>
                <i className="fa-solid fa-forward-step"></i>
            </div>
        </div>
    )
}