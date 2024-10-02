import React from 'react';
// import '.src/App.css'
export default function Login() {
    return (
    <div className="wrapper">
        <button className="close-login">
                <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="form-box login">
            <h2>Đăng nhập</h2>
            <form>
                <div className="input-box">
                    <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input type="Username/Email" required placeholder="Tên đăng nhập"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required placeholder="Mật khẩu"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Ghi nhớ đăng nhập</label>
                    {/* <a href="#">Quên mật khẩu?</a> */}
                </div>
                <div>
                    <button type="submit" className="btn">Đăng nhập</button>
                </div>
                <div className="login-register">
                    <p>Chưa có tài khoản? </p>
                </div>
            </form>
        </div>
        <div className="form-box register">
            <h2>Bạn là?</h2>
            <form>
                <div>
                    <button type="submit" className="register-link-A">HR</button>
                    <h2>Hay là</h2>
                    <button type="submit" className="register-link-B">User</button>
                </div>
                <div className="login-register">
                    <p>Đã có tài khoản? </p>
                </div>
            </form>
        </div>
        <div className="form-box register-1">
            <h2>Đăng kí</h2>
            <form>
                <div className="input-box">
                    <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input type="Username" required placeholder="Tên tài khoản"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required placeholder="Mật khẩu"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required placeholder="Email"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                    <input type="tel" required placeholder="Số điện thoại"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <input type="Address" required placeholder="Địa chỉ"/>
                </div>
                <div className="input-box">
                    <input type="date" id="dob" name="dob" required/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="business-outline"></ion-icon></span>
                    <input type="password" required placeholder="Mật khẩu"/>
                </div>
                <div>
                    <button type="submit" className="btn">Đăng kí</button>
                </div>
                <div className="login-register">
                    <p>Đã có tài khoản? </p>
                </div>
            </form>
        </div>
        <div className="form-box register-2">
            <h2>Đăng kí</h2>
            <form>
                <div className="input-box">
                    <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input type="Username" required placeholder="Tài khoản"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required placeholder="Mật khẩu"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required placeholder="Email"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                    <input type="tel" required placeholder="Số điện thoại"/>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <input type="Address" required placeholder="Địa chỉ"/>
                </div>
                <div className="input-box">
                    <input type="date" id="dob" name="dob" required/>
                </div>
                <div>
                    <button type="submit" className="btn">Đăng kí</button>
                </div>
                <div className="login-register">
                    <p>Đã có tài khoản? </p>
                </div>
            </form>
        </div>
    </div>  
    );
}
