import JobItem from "./JobItem";
import './JobList.css'
import JobService from "../../service/jobService";
import { useEffect, useState } from "react";
import companyService from "../../service/companyService";
export default function JobList(props){
    const [data, setData] = useState([]);
    const [current_page, setCurrentPage] = useState(1);
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
            setData(await JobService.search(tempSearch, current_page, 10));
        }
        fetchData();
    },[props, current_page])
    const prev_page = async ()=>{
        if(current_page <= 1){
            setCurrentPage(1);
            return;
        }
        setCurrentPage(current_page - 1)
    }
    const next_page = async ()=>{
        if(current_page === data.total_pages){
            return;
        }
        setCurrentPage(current_page + 1)
    }
    return(
        <div id="job-list">
            <div className="list-item">
                {data.data?.map((item) => {
                    if(item.active){
                        let wage = item.min_wage + " - " + item.max_wage + " triệu";
                        if(item.wage !== 0){
                            wage = item.wage + " triệu";
                        }
                        console.log(item)
                        return (
                            <JobItem key={item.id} idItem={item.id} name={item.name} company={item.company} wage={wage} cities={item.city} profession={item.profession}></JobItem>
                        )
                    }
                })}
               
            </div>
            <div className="page-info">
                    <i className="fa-solid fa-backward-step" onClick={prev_page}></i>
                    <span className="current-page">{data?.current_page + 1 + ""}</span>
                    <span className="total-pages">{" / " + data.total_pages + " trang"}</span>
                    <i className="fa-solid fa-forward-step" onClick={next_page}></i>
                </div>
        </div>
    )
}