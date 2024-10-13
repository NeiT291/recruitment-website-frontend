import { useSearchParams } from 'react-router-dom';
import './Resume.css'
import { useEffect, useState } from 'react';
import resumeService from '../../../../service/resumeService';
export default function Resume(props){
    const [searchParam] = useSearchParams();
    const id = searchParam.get("id");

    const [resume, setResume] = useState(resumeService.downloadResume(id))
    useEffect(()=>{
        const fetchData = async () =>{
            const tempData = await resumeService.downloadResume(id);
            setResume(tempData);
        }
        fetchData();
    },[])
    const downloadHandle = () =>{
        var element = document.createElement("a");
        element.href = resume;
        element.download = "resume.jpg";
        element.click();
    }
    return(
        <div className='resume-container'>
            <div className='resume-btn' onClick={downloadHandle}>
                Tải về
                <i className="fa-solid fa-download"></i>
            </div>
            <div className='resume-content'>
                <img src={resume} alt=''></img>
            </div>
        </div>
    )
}