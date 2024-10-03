import './Register.css'
function RegisterHr() {
    return(
        <div class="form-box">
            <form className='register-hr'>
                <h2>Đăng kí</h2>
                <div class="input-box">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" required placeholder="Tên đăng nhập"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" className='password'required placeholder="Mật khẩu"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" className='re-password' required placeholder=" Nhập lại mật khẩu"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" required placeholder="Email"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-phone"></i>
                    <input type="text" required placeholder="Số điện thoại"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-location-dot"></i>
                    <input type="text" required placeholder="Địa chỉ"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-building"></i>
                    <input type="text" required placeholder="Tên công ty"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-calendar-days"></i>
                    <input type="date" id="dob" name="dob" required/>
                </div>
                <button type="submit" class="btn">Đăng kí</button>
            </form>
        </div>
    );
}
export default RegisterHr;