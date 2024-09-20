const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forms = document.querySelectorAll('form');

// Ngăn không cho form tự động submit khi nhấn nút
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Ngăn chặn hành vi submit mặc định
    });
});
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});