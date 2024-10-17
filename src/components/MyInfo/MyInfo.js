import { useContext, useEffect, useState } from 'react';
import './MyInfo.css'
import userService from '../../service/userService';
import { TokenContext } from '../../App';
export default function MyInfo() {
    const [data,setData] = useState([]);
    const { token } = useContext(TokenContext);
    useEffect(()=>{
        const fetchData = async () =>{
            const tempData = await userService.getUserInfo(token);
            console.log(tempData);
            setData(tempData);
        }
        fetchData()
    },[])
    return (
        <div className="my-info-container">
            <div className='my-info-logo'>
                <img src={data.avatar} alt=''></img>
            </div>
            <span>Họ và tên: {data.fullname}</span>
            <span>Ngày sinh: {data.dob}</span>
            <span>Email: {data.email}</span>
            <span>Số điện thoại: {data.phone}</span>
        </div>
    );
}