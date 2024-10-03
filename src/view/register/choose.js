import { Link } from "react-router-dom";
import './Register.css'
function Choose() {
    return (
        <div className="form-box">
            <div className="register-choose">
                <h2>Bạn muốn?</h2>
                <button>
                    <Link to='/register/hr'>Đăng tuyển</Link>
                </button>
                <button>
                    <Link to='/register/user'>Xin việc</Link>
                </button>
                
                <div class="login-register">
                    <p>Đã có tài khoản? <Link to='/login'>Đăng nhập</Link></p>
                </div>
            </div>
        </div>
      );
}

export default Choose;