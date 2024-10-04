import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/imgs/logo.png'
import Userservice from '../../service/userService';
import { useEffect, useState } from 'react';
export default function Header() {
  // const token = localStorage.getItem("token");
  // if(token != null || token !== ""){
  //   getUserInfo();
  // }
  
  const [fullname, setFullname] = useState();
  const [avatar, setAvatar] = useState();
  const [hidden, setHidden] = useState();

    useEffect(()=>{
      const fetchData = async () =>{
        const info = await Userservice.getUserInfo()
        setFullname(info.fullname);
        setAvatar(info.avatar);
        if(localStorage.getItem("token") == null || localStorage.getItem("token") === ""){
          setHidden(!hidden);
        }
      }
      fetchData();
    }, [])

  return (
    <div className='header-content'>
        <div className='logo'>
          <Link to="/"><img src={logo} alt='logo'></img></Link>
          
        </div>
        <div className="header-options">
          <div className='link'>
            <Link to="/CV">Hồ sơ CV</Link>
            <Link to="#">Việc làm</Link>
            <Link to="#">Công ty</Link>
          </div>
          <div className='login-register' hidden={!hidden}>
            <button className="header-login-btn" hidden={!hidden}>
              <Link to="/login">Đăng nhập</Link>
            </button>
            <button className="header-register-btn" hidden={!hidden}>
              <Link to="/register">Đăng ký</Link>
            </button>
          </div>
          <div className='info-user' hidden={hidden} >
            <img id='user-avatar' src={avatar}  alt='' hidden={hidden}></img>
            <span>{fullname}</span>
            <div className='options'>
              <span>Thông tin cá nhân</span>
              <span onClick={Userservice.logout}>Đăng xuất</span>
            </div>
          </div>
        </div>
    </div>
  );
}
