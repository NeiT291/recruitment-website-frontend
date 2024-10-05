import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import loginApi from '../../service/auth';
import { useContext } from 'react';
import { TokenContext } from '../../App';
export default function Login() {
   
    const navigate = useNavigate()
    const { setToken } = useContext(TokenContext);
    let username;
    let password;
    
    const login = async (e) => {
        e.preventDefault();
        username = document.getElementById('login-username').value;
        password = document.getElementById('login-password').value;
        if(username == null || password == null || username === "" || password === ""){
            return;
        }
        const token = await loginApi(username, password);
        setToken(token);
        if(token != null){
            navigate("/",  { replace: true });
        }
        
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

