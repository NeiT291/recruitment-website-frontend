import { useEffect, useState } from 'react'
import jobService from '../../../service/jobService'
import './JobItemHr.css'
import { Link } from 'react-router-dom'

export default function JobItemHr(props){
    
    const deleteHandle = async() =>{
        await jobService.deleteJob(props.idItem);
        window.location.reload();
    }
   
    return(
        <div>
            <div className='job-hr-item-container'>
                <Link className="job-hr-item" to={`/hr/job/user?id=${props.idItem}`}>
                    <span className="info-id">{props.idItem}</span>
                    <span className="info-name">{props.name}</span>
                    <span>{props.wage}</span>
                    <span>{props.cities}</span>
                    <span>{props.profession}</span>
                    <span>{props.user_created}</span>
                    <span>{props.dead_line}</span>
                    <span>{props.active + ""}</span>
                </Link>
                <span className='span_item'>
                    <Link to={`/hr/job/edit?id=${props.idItem}`}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <i className="fa-solid fa-trash" onClick={deleteHandle}></i>
                </span>
            </div>
        </div>
    )
}