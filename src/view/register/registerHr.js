import { useNavigate } from 'react-router-dom';
import userService from '../../service/userService';
import companyService from '../../service/companyService';
import './Register.css'
function RegisterHr() {
    const navigate = useNavigate();
    function select(e){
        const companyInput = document.getElementById("register-company");
        companyInput.value = this.innerHTML;
        var ul = document.getElementById("company-dropdown");
        ul.innerHTML = "";
    }
    const onChangeHandle = async (e) =>{
        let name = document.getElementById('register-company').value;
        var ul = document.getElementById("company-dropdown");
        ul.innerHTML = "";
        if(name === "" || name == null){
            return;
        }
        const companies = await companyService.search(name, 1, 5);
        for (let i = 0; i < companies.length; i++) {
            var li = document.createElement("li");
            li.onclick = select;
            li.innerHTML = companies[i].name;
            ul.appendChild(li);
        }
        console.log(companies.length)
        
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            username: document.getElementById("register-username").value,
            password: document.getElementById("register-password").value,
            repassword: document.getElementById("register-re-password").value,
            fullname: document.getElementById("register-fullname").value,
            email: document.getElementById("register-email").value,
            address: document.getElementById("register-address").value,
            phone: document.getElementById("register-phone").value,
            company: document.getElementById("register-company").value,
            dob: document.getElementById("register-dob").value
        }
        if(data.password !== data.repassword){
            return;
        }
        const info = await userService.registerHr(data);
        if(info.username != null || info.username !== ""){
            alert("Đăng ký thành công!!!!!");
            navigate("/login",  { replace: true });
        }
    }
    return(
        <div class="form-box">
            <form className='register-hr' onSubmit={handleSubmit}>
                <h2>Đăng kí</h2>
                <div class="input-box">
                    <i class="fa-solid fa-user"></i>
                    <input id='register-username' type="text" required placeholder="Tên đăng nhập"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-lock"></i>
                    <input id='register-password' type="password" className='password'required placeholder="Mật khẩu"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-lock"></i>
                    <input id='register-re-password' type="password" className='re-password' required placeholder="Nhập lại mật khẩu"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-user"></i>
                    <input id='register-fullname' type="text" required placeholder="Họ và tên"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-envelope"></i>
                    <input id='register-email' type="email" required placeholder="Email"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-phone"></i>
                    <input id='register-phone' type="text" required placeholder="Số điện thoại"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-location-dot"></i>
                    <input id='register-address' type="text" required placeholder="Địa chỉ"/>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-building"></i>
                    <input id='register-company' type="text" required placeholder="Tên công ty" onChange={onChangeHandle}></input>
                    <ul id='company-dropdown'></ul>
                </div>
                <div class="input-box">
                    <i class="fa-solid fa-calendar-days"></i>
                    <input id='register-dob' type="date" name="dob" required/>
                </div>
                
                   
                <button type="submit" class="btn">Đăng kí</button>
            </form>
        </div>
    );
}
export default RegisterHr;