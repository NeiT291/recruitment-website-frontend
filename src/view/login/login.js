import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import loginApi from '../../service/auth';
export default function Login() {
   
    const navigate = useNavigate()
    const login = (e) => {
        e.preventDefault();
        let username = document.getElementById('login-username').value;
        let password = document.getElementById('login-password').value;
        if(username == null || password == null || username === "" || password === ""){
            return;
        }
        loginApi(username, password);
        if(localStorage.getItem("token") != null){
            navigate("/",  { replace: true });
            window.location.reload();
        }
        return;
    }
    return (    
        <div className="form-box">
            <form id='login-form' onSubmit={login}>
                <h2>Đăng nhập</h2>
                <div className="input-box">
                    <i className="fa-solid fa-user"></i>
                    <input id='login-username' type="text" required placeholder="Tên đăng nhập" />
                </div>
                <div className="input-box">
                    <i className="fa-solid fa-lock"></i>
                    <input id='login-password' type="password" required placeholder="Mật khẩu"/>
                </div>
                <div className="remember-or-forgot">
                    <label><input type="checkbox" className='remember-password'/>Ghi nhớ đăng nhập</label>
                    <Link to='/forgot-password'>Quên mật khẩu?</Link>
                </div>
                <div>
                    <button type='submit' id="login-submit-btn">Đăng nhập</button>
                </div>
                <Link className='register' to='/register'>Chưa có tài khoản?</Link>
            </form>
            
        </div>
        
    );
    
}

