import { Link } from 'react-router-dom'
import './UserItem.css'
import { useEffect, useState } from 'react'
import resumeService from '../../../../service/resumeService'
export default function UserItem(props){
    const [resume, setResume] = useState(resumeService.downloadResume(props.idItem))
    useEffect(()=>{
        const fetchData = async () =>{
            const tempData = await resumeService.downloadResume(props.idItem);
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
        <div className="user-item">
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
            <span>{props.address}</span>
            <span>{props.dob}</span>
            <Link to={`resume?id=${props.idItem}`}>
                <i className="fa-solid fa-eye"></i>
            </Link>
            <i className="fa-solid fa-download" onClick={downloadHandle}></i>
        </div>
    )
}