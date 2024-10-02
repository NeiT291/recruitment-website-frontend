import React, { useState } from 'react';
import './App.css';
import Login from './view/login/login';
import Header from './component/header/header';
import { BrowserRouter } from 'react-router-dom'; 

function App() {
  const [showLogin, setShowLogin] = useState(false);  

  return (
    <>
     <BrowserRouter>
     <Header onLoginClick={() => setShowLogin(true)} />
      {showLogin && <Login />}
      </BrowserRouter>
    </>
  );
}

export default App;

// const wrapper = document.querySelector('.wrapper');
// const loginLink1 = document.querySelector('.login-link1');
// const loginLink2 = document.querySelector('.login-link2');
// const loginLink3 = document.querySelector('.login-link3');
// const registerLink = document.querySelector('.register-link');
// const registerLinkA = document.querySelector('.register-link-A');
// const registerLinkB = document.querySelector('.register-link-B');
// const btnLogin = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.close-login');
// const forms = document.querySelectorAll('form'); 
// forms.forEach(form => {
//   form.addEventListener('submit', (e) => {
//       e.preventDefault(); 
//   });
// });
// btnLogin.addEventListener('click', ()=> {
//   wrapper.classList.add('active-popup');
// });
// iconClose.addEventListener('click', ()=> {
//   wrapper.classList.remove('active-popup','active','active1','active2');
// });
// registerLink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });
// registerLinkA.addEventListener('click', ()=> {
//   wrapper.classList.add('active1');
// });
// registerLinkB.addEventListener('click', ()=> {
//   wrapper.classList.add('active2');
// });
// loginLink1.addEventListener('click', ()=> {
//   wrapper.classList.remove('active');
// });
// loginLink2.addEventListener('click', ()=> {
//   wrapper.classList.remove('active1','active','active2');
// });
// loginLink3.addEventListener('click', ()=> {
//   wrapper.classList.remove('active1','active','active2');
// });
