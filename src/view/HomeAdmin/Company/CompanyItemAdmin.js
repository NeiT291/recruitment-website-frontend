import { Link } from 'react-router-dom';
import './CompanyItemAdmin.css';

export default function CompanyItemAdmin(props){
   
    return(
        <div>
            <div className='company-admin-item-container'>
                <Link className="company-admin-item" to={`/admin/company/info?id=${props.idItem}&name=${props.name}`}>
                    <span className="info-id">{props.idItem}</span>
                    <span className="info-name">{props.name}</span>
                    <span>{props.address}</span>
                    <span>{props.website}</span>
                </Link>
            </div>
        </div>
    )
}