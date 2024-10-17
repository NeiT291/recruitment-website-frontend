import { useEffect, useState } from "react";
import CompanyItem from "./CompanyItem";
import './CompanyList.css'
import companyService from "../../service/companyService";
export default function CompanyList(props){
    const [companies, setCompanies] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const tempData = await companyService.search(props.name, 1, 100);
            setCompanies(tempData);
        }
        fetchData();
    },[props])
    return(
        <div id="company-list">
            <div className="list-item">
                    {companies?.map((item,index) =>{
                        return (
                            <CompanyItem   key={index}
                                            idItem={item.id}
                                            name={item.name}>
                            </CompanyItem>
                        )
                    })}
            </div>
        </div>
    )
}