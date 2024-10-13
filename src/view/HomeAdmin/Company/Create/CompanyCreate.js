import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cityService from '../../../../service/cityService';
import professtionService from '../../../../service/professtionService';
import jobService from '../../../../service/jobService';
import companyService from '../../../../service/companyService';
import logo from '../../../../assets/imgs/default_company_logo.png'
import './CompanyCreate.css'
export default function CompanyCreate(props){
    const navigate = useNavigate()
    const submitHandle = async (e) =>{
        e.preventDefault();
        let name = document.getElementById("create-name").value
        let description = document.getElementById("create-description").value
        let address = document.getElementById("create-address").value
        let website = document.getElementById("create-website").value
        const info = {
            name: name,
            description: description,
            address: address,
            website: website
        }
        const response = await companyService.createCompany(info);
        console.log(response)
        // if(response.code === 200){
        //     navigate("/admin/company",  { replace: true });
        // }else{
        //     alert("Lỗi!!!")
        // }
    }
    
    return(
        <div className="create-company-container">
            <form className="form-create" onSubmit={submitHandle}>
                <label>Tên</label>
                <input id="create-name" type="text" placeholder="Tên"/>
                <label>Mô tả</label>
                <textarea id="create-description" type="" placeholder="Mô tả" />
                <label>Địa chỉ</label>
                <input id="create-address" type="text" placeholder="Địa chỉ" />
                <label>Website</label>
                <input id="create-website" type="text" placeholder="Website" />
                
                <button type="submit">Thêm</button>
            </form>
        </div>
    )
}