import { Link, Outlet, useNavigate} from 'react-router-dom';
import './HomeAdmin.css'
import { useEffect } from 'react';
import userService from '../../service/userService';
function HomeAdmin() {
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async () =>{
            const token = localStorage.getItem("token");
            if(token == null){
                navigate("/login",  { replace: true });
                return
            }else{
                const user = await userService.getUserInfo(localStorage.getItem("token"));
                if(user.role !== "ADMIN"){
                    if(user.role === "HR"){
                        navigate("/hr",  { replace: true });
                        return
                    }
                    navigate("/",  { replace: true });
                }
            }
        } 
        fetchData()
    },[])
    return (
        <div className='home-admin-container'>
            <div className="home-admin-sidebar">
                <Link to='/admin'>Bài Đăng</Link>
                <Link to='company'>Công ty</Link>
                <Link to='create-company'>Thêm công ty</Link>
            </div>
            <div className="home-admin-content">
                <Outlet></Outlet>
            </div>
        </div>
    );
}
export default HomeAdmin;