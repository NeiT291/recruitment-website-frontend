import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/imgs/logo.png'
import Userservice from '../../service/userService';
import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../App';
export default function Header() {

  const [fullname, setFullname] = useState();
  const [avatar, setAvatar] = useState();
  const [hidden, setHidden] = useState(false);
  const { setToken } = useContext(TokenContext);
  const { token } = useContext(TokenContext);
    useEffect(()=>{
      const fetchData = async () =>{
        const info = await Userservice.getUserInfo(token);
        setFullname(info.fullname);
        setAvatar(info.avatar);        
      }
      if(token == null || token === ""){
        handleLogout();
      }else{
        setHidden(true);
      }
      fetchData();
    }, [token])
    const handleLogout = ()=>{
      Userservice.logout();
      setToken(localStorage.getItem("token"))
      setHidden(false)
    }
    console.log("out: " + hidden);
  return (
    <div className='header-content'>
        <div className='logo'>
          <Link to="/"><img src={logo} alt='logo'></img></Link>
          
        </div>
        <div className="header-options">
          <div className='link'>

            <Link to="#">Hồ sơ CV</Link>
            <a href="#job-list">Việc làm</a>
            <a href="#company-list">Công ty</a>

          </div>
          <div className='login-register' hidden={hidden}>
            <button className="header-login-btn" hidden={hidden}>
              <Link to="/login">Đăng nhập</Link>
            </button>
            <button className="header-register-btn" hidden={hidden}>
              <Link to="/register">Đăng ký</Link>
            </button>
          </div>
          <div className='info-user' hidden={!hidden} >
            <img id='user-avatar' src={avatar}  alt='' hidden={!hidden}></img>
            <span hidden={!hidden}>{fullname}</span>
            <div className='options' hidden={!hidden}>
              <span>Thông tin cá nhân</span>
              <span onClick={handleLogout}>Đăng xuất</span>
            </div>
          </div>
        </div>
    </div>
  );
}
