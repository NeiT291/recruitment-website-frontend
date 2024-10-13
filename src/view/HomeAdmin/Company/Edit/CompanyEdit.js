import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cityService from '../../../../service/cityService';
import professtionService from '../../../../service/professtionService';
import jobService from '../../../../service/jobService';
import companyService from '../../../../service/companyService';
import './CompanyEdit.css'
export default function CompanyEdit(props){
    const [searchParam] = useSearchParams();
    const id = searchParam.get("id");
    const name = searchParam.get("name");

    const [company, setCompany] = useState([]);
    const [logo, setLogo] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const tempData = await companyService.search(name);
            const tempLogo = await companyService.getLogo(id);

            setCompany(tempData[0])
            setLogo(tempLogo)
        }
        fetchData();
    },[])
    const changeLogo = async() =>{
        const file = document.getElementById('logo_upload').files[0];
        const response = await companyService.uploadLogo(id, file);
        window.location.reload();
    }
    const navigate = useNavigate()
    const submitHandle = async (e) =>{
        e.preventDefault();
        let name = document.getElementById("edit-name").value
        let description = document.getElementById("edit-description").value
        let address = document.getElementById("edit-address").value
        let website = document.getElementById("edit-website").value
        const info = {
            name: name,
            description: description,
            address: address,
            website: website
        }
        const response = await companyService.editCompany(id, info);
        if(response.code === 200){
            navigate("/admin/company",  { replace: true });
        }else{
            alert("Lỗi!!!")
        }
    }
    
    return(
        <div className="edit-company-container">
            <form className="form-edit" onSubmit={submitHandle}>
                <div className='company-logo'>
                    <img src={logo} alt=''></img>
                </div>
                <div className="upload-button">
                    <label htmlFor="logo_upload">Thay đổi logo</label>
                    <input id="logo_upload" 
                            type='file' 
                            onChange={changeLogo} 
                            accept=".jpg, .jpeg, .png" 
                            />
                </div>
                <label>Tên</label>
                <input id="edit-name" type="text" placeholder="Tên" defaultValue={company.name}/>
                <label>Mô tả</label>
                <textarea id="edit-description" type="" placeholder="Mô tả" defaultValue={company.description}/>
                <label>Địa chỉ</label>
                <input id="edit-address" type="text" placeholder="Địa chỉ" defaultValue={company.address}/>
                <label>Website</label>
                <input id="edit-website" type="text" placeholder="Website" defaultValue={company.websiteUrl}/>
                
                <button type="submit">Sửa</button>
            </form>
        </div>
    )
}