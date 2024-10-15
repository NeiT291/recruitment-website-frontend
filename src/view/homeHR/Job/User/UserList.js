import { useSearchParams } from 'react-router-dom';
import './UserList.css'
import { useEffect, useState } from 'react';
import jobService from '../../../../service/jobService';
import UserItem from './UserItem';
import resumeService from '../../../../service/resumeService';
export default function UserList(props){
    const [searchParam] = useSearchParams();
    const id = searchParam.get("id");
    const [jobInfo, setJobInfo] = useState(jobService.getJobById(id));
    const [userList, setUserList] = useState(resumeService.getUserList(id));
    useEffect(()=>{
        const fetchJob = async () =>{
            const tempUsers = await resumeService.getUserList(id);
            setUserList(tempUsers);
            setJobInfo(await jobService.getJobById(id));
        }
        fetchJob();
    },[])
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
    return(
       <div className='user-list'>
            <div className='overview-job'>
                <h1>{jobInfo.company}</h1>
                <h1>{jobInfo.name}</h1>
                <div className='overview-job-details'>
                    <div className="detail-info">
                        <i className="fa-solid fa-sack-dollar"></i>
                        Mức lương: {wage}
                    </div>
                    <div className="detail-info">
                        <i className="fa-solid fa-location-dot"></i>
                        Địa điểm: {jobInfo.city}
                    </div>
                    <div className="detail-info">
                        <i className="fa-solid fa-hourglass"></i>
                        Kinh nghiệm: {experience}
                    </div>
                    <div className="detail-info">
                        <i className="fa-solid fa-clock"></i>
                        Hạn nộp hồ sơ: {jobInfo.deadline}
                    </div>
                </div>
            </div>
            <div className='user-list-content'>
                <div>
                    {userList?.data?.map((item) => {
                        return (
                            <UserItem key={item.id} 
                                idItem={item.id} 
                                name={item.userCreated.fullname} 
                                email={item.userCreated.email} 
                                phone={item.userCreated.phone} 
                                address={item.userCreated.address} 
                                dob={item.userCreated.dob}
                            ></UserItem>    
                        )}
                    )}
                </div>
            </div>
       </div>
    )
}