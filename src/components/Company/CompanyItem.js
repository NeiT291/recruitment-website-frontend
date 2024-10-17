import { useEffect, useState } from 'react';
import './CompanyItem.css'
import { Link } from 'react-router-dom';
import companyService from '../../service/companyService';
export default function CompanyItem(props){
    const [img, setImg] = useState(companyService.getLogo(props.idItem))

    useEffect(()=>{
        const fetchData = async ()=> {
            setImg(await companyService.getLogo(props.idItem));
        }
        fetchData();

    },[])
    
    return(
        <Link className="company-item" to={`/company?id=${props.idItem}&name=${props.name}`}>
            <div className="logo">
                <img src={img} alt=""></img>
            </div>
            <h2 className='company-name'>{props.name}</h2>
        </Link>
    )
}