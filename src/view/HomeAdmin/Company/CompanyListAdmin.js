import { useEffect, useState } from 'react';
import CompanyItemAdmin from './CompanyItemAdmin';
import './CompanyListAdmin.css';
import companyService from '../../../service/companyService';
export default function CompanyListAdmin(props){
    const [companies, setCompanies] = useState([])
    const [current_page, setCurrentPage] = useState(1);
    useEffect(()=>{
        const fetchData = async () =>{
            const tempData = await companyService.getAllCompany(current_page, 8);
            setCompanies(tempData)
        }
        fetchData();
    },[current_page])
    const prev_page = async ()=>{
        if(current_page <= 1){
            setCurrentPage(1);
            return;
        }
        setCurrentPage(current_page - 1)
    }
    const next_page = async ()=>{
        if(current_page === companies.total_pages){
            return;
        }
        setCurrentPage(current_page + 1)
    }
    console.log(companies)
    return(
        <div id="company-admin-container">
                <div className="page-title">Danh sách công ty</div>
                <div className='col-list'>
                    <span>ID</span>
                    <span>Tên</span>
                    <span>Địa chỉ</span>
                    <span>Website</span>
                </div>
                <div className='company-list'>
                    {companies.data?.map((item) =>{
                        return (
                            <CompanyItemAdmin   key={item.id}
                                                idItem={item.id}
                                                name={item.name}
                                                website={item.websiteUrl}
                                                address={item.address}>
                            </CompanyItemAdmin>
                        )
                    })}
                </div>
                <div className="page-info">
                    <i className="fa-solid fa-backward-step" onClick={prev_page}></i>
                    <span className="current-page">{companies?.current_page + 1 + ""}</span>
                    <span className="total-pages">{" / " + companies.total_pages + " trang"}</span>
                    <i className="fa-solid fa-forward-step" onClick={next_page}></i>
                </div>
        </div>
    )
}