import { useSearchParams } from 'react-router-dom';
import './CompanyItemDetail.css'
import { useEffect, useState } from 'react';
import companyService from '../../service/companyService';
import JobList from '../Job/JobList';
export default function CompanyItemDetail() {
    const [searchParam] = useSearchParams();
    const id = searchParam.get("id");
    const name = searchParam.get("name");
    const [company, setJobInfo] = useState(companyService.search(name));
    
    useEffect(()=>{
        const fetchJob = async () =>{
            const tempData = await companyService.search(name,1,1);
            console.log(tempData[0])
            setJobInfo(tempData[0]);
        }
        fetchJob();
    },[])
    
    const [img, setImg] = useState(companyService.getLogo(id))

    useEffect(()=>{
        const fetchData = async ()=> {
            setImg(await companyService.getLogo(id));
        }
        fetchData();

    },[])
    
    return (
        <div className="company-detail-container">
            <div className='company-logo'>
                <img src={img} alt=''></img>
            </div>
            <h2 className='company-name'>{company.name}</h2>
            <p className='company-des'>{company.description}</p>
            <span className='company-address'>Địa chỉ: {company.address}</span>
            <span className='company-website'>Website: {company.websiteUrl}</span>
            <h2 className='title-list-job'>Dang sách công việc</h2>
            <JobList name={null} 
                        company={company.name} 
                        city={null} 
                        profession={null} 
                        min_wage={null} 
                        max_wage={null} 
                        page={null}
            ></JobList>
        </div>
    );
}