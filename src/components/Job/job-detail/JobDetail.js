import { useContext, useEffect, useState } from 'react';
import './JobDetail.css'
import jobService from '../../../service/jobService';
import { useSearchParams } from 'react-router-dom';
import resumeService from '../../../service/resumeService';
import { TokenContext } from '../../../App';
function JobDetail() {
    const [searchParam] = useSearchParams();
    const { token } = useContext(TokenContext);
    const id = searchParam.get("id");
    const [jobInfo, setJobInfo] = useState(jobService.getJobById(id));
    
    useEffect(()=>{
        const fetchJob = async () =>{
            setJobInfo(await jobService.getJobById(id));
        }
        fetchJob();
    },[])
    const uploadFile = async () => {
        const file = document.getElementById('resume_upload').files[0];
        const response = await resumeService.uploadResume(id, file, token);
        if(response.code === 200){
            alert("Ứng tuyển thành công!!!");
        }
    }
    
    let experience = "không yêu cầu kinh nghiệm";
    if(jobInfo.experience !== 0){
        experience = "tối thiểu " + jobInfo.experience + " năm"
    }
    let wage = "Thỏa thuận";
    if(jobInfo.min_wage !== 0 || jobInfo.max_wage !== 0){
        wage = jobInfo.min_wage + " - " + jobInfo.max_wage + " triệu";
    }
    if(jobInfo.wage !== 0){
        wage = jobInfo.wage + " triệu";
    }

    return (
        <div className="job-detail-container">
            <div className="job-overview">
                <h1 className='job-name'>{jobInfo.name}</h1>
                <div className="info">
                    <div className="salary">
                        <i className="fa-solid fa-sack-dollar"></i>
                        Mức lương: {wage}</div>
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        Địa điểm: {jobInfo.city}</div>
                    <div className="experience">
                        <i className="fa-solid fa-hourglass"></i>
                        Kinh nghiệm: {experience}</div>
                    <div className="deadline">
                        <i className="fa-solid fa-clock"></i>
                        Hạn nộp hồ sơ: {jobInfo.deadline}</div>
                </div>
                <div className="action-buttons">
                    <label htmlFor="resume_upload">Ứng tuyển ngay</label>
                    <input id="resume_upload" 
                            type='file' 
                            onChange={uploadFile} 
                            accept=".jpg, .jpeg, .png" 
                            />
                </div>
            </div>

            <div className="job-details">
                <h2>Chi tiết tin tuyển dụng</h2>
                <div className="job-description">
                    <span>{jobInfo.company}</span>
                    <h3>Mô tả công việc</h3>
                    <p>{jobInfo.description}</p>
                    <p>Địa chỉ: {jobInfo.address}</p>
                </div>
            </div>
        </div>
    );
}
export default JobDetail;