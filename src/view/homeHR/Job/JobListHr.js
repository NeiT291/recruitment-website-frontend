import JobItemHr from './JobItemHr';
import './JobListHr.css'
import JobService from '../../../service/jobService';
import { useEffect, useState } from "react";
import userService from '../../../service/userService';
import { useNavigate } from 'react-router-dom';
export default function JobListHr(props){
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [current_page, setCurrentPage] = useState(1);
    useEffect(()=>{
        if(localStorage.getItem("token") == null){
            navigate("/login",  { replace: true });
            return
        }
        const fetchData = async() => {
            const tempUser = await userService.getUserInfo(localStorage.getItem("token"));
            let company = null;
            if(tempUser.role === "HR"){
                company = tempUser.company.name;
            }else{
                if(tempUser.role === "USER"){
                    navigate("/",  { replace: true });
                    return
                }else{
                    navigate("/admin",  { replace: true });
                }
            }
            const tempSearch ={
                name: props.name,
                company: company, 
                city: props.city,
                profession: props.profession,
                min_wage: props.min_wage,
                max_wage: props.max_wage,
            }
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
        <div id="job-hr-list">
                <div className="page-title">Danh sách đăng tuyển</div>
                <div className='col-list'>
                    <span>ID</span>
                    <span>Tiêu đề</span>
                    <span>Lương</span>
                    <span>Khu vực</span>
                    <span>Ngành nghề</span>
                    <span>Người tạo</span>
                    <span>Hạn nộp</span>
                    <span>Active</span>
                    <span>Sửa Xóa</span>
                    
                </div>
            <div className="list-item">
                {data.data?.map((item) => {
                    let wage = item.min_wage + " - " + item.max_wage + " triệu";
                    if(item.wage !== 0){
                        wage = item.wage + " triệu";
                    }
                    return (
                        <JobItemHr key={item.id} 
                            idItem={item.id} 
                            name={item.name} 
                            company={item.company} 
                            wage={wage} 
                            cities={item.city} 
                            profession={item.profession}
                            user_created={item.user_created}
                            active={item.active}
                            dead_line={item.deadline}
                        ></JobItemHr>    
                    )}
                )}
               
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