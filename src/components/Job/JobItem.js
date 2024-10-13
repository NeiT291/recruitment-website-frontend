import { useEffect, useState } from 'react';
import companyService from '../../service/companyService';
import './JobItem.css'
import { Link, replace, useNavigate } from 'react-router-dom';
export default function JobItem(props){
    const [img, setImg] = useState(companyService.getLogo(props.idItem))
    
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchData = async ()=> {
                setImg(await companyService.getLogo(props.idItem));
        }
        fetchData();

    },[])
    
    return(
        <Link className="job-item" to={`/job?id=${props.idItem}`}>
            <div className="logo">
                <img src={img} alt=""></img>
            </div>
            <div className="job-info">
                <h2 className="info-name">{props.name}</h2>
                <h2 className="info-company">{props.company}</h2>
                <div className="wage-location-profession">
                    <span>{props.wage}</span>
                    <span>{props.cities}</span>
                    <span>{props.profession}</span>
                </div>
            </div>
        </Link>
    )
}