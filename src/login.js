// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   const filePath = path.join(__dirname, 'login.html');

//   fs.readFile(filePath, 'utf-8', (err, content) => {
//     if (err) {
//       res.writeHead(500);
//       res.end('Internal Server Error');
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     }
//   });
// });

// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });
const wrapper = document.querySelector('.wrapper');
const loginLink1 = document.querySelector('.login-link1');
const loginLink2 = document.querySelector('.login-link2');
const loginLink3 = document.querySelector('.login-link3');
const registerLink = document.querySelector('.register-link');
const registerLinkA = document.querySelector('.register-link-A');
const registerLinkB = document.querySelector('.register-link-B');
const forms = document.querySelectorAll('form'); 
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
      e.preventDefault(); 
  });
});
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
registerLinkA.addEventListener('click', ()=> {
  wrapper.classList.add('active1');
});
registerLinkB.addEventListener('click', ()=> {
  wrapper.classList.add('active2');
});
loginLink1.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});
loginLink2.addEventListener('click', ()=> {
  wrapper.classList.remove('active1','active','active2');
});
loginLink3.addEventListener('click', ()=> {
  wrapper.classList.remove('active1','active','active2');
});
