function registerHr() {
    return(
        <div class="form-box register-2">
            <h2>Đăng kí</h2>
            <form>
                <div class="input-box">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input type="Username" required placeholder="Tên đăng nhập"/>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required placeholder="Mật khẩu"/>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required placeholder="Email"/>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="call-outline"></ion-icon></span>
                    <input type="Phone number" required placeholder="Số điện thoại"/>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <input type="Address" required placeholder="Địa chỉ"/>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="business-outline"></ion-icon></span>
                    <input type="Company" required placeholder="Tên công ty"/>
                </div>
                <div class="input-box">
                    <input type="date" id="dob" name="dob" required/>
                </div>
                <div>
                    <button type="submit" class="btn">Đăng kí</button>
                </div>
            </form>
        </div>
    );
}
export default registerHr;