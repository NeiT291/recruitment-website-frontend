function login() {
    return (<div class="form-box login">
        <h2>Đăng nhập</h2>
        <form>
            <div class="input-box">
                <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                <input type="Username/Email" required placeholder="Tên đăng nhập"/>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <input type="password" required placeholder="Mật khẩu"/>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"/>Ghi nhớ đăng nhập</label>
                <a href="#">Quên mật khẩu?</a>
            </div>
            <div>
                <button type="submit" class="btn">Đăng nhập</button>
            </div>
            <div class="login-register">
                <p>Chưa có tài khoản? <a href="javascript:void(0)" class="register-link">Đăng ký</a></p>
            </div>
        </form>
    </div>  );
}

export default ;