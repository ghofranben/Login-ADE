const container = document.querySelector('.container');
const registrBtn = document.querySelector('.registr-btn');
const loginBtn = document.querySelector('.login-btn');



registrBtn.addEventListener('click',()=> {
    container.classList.add('active');
})
loginBtn.addEventListener('click',()=> {
    container.classList.remove('active');
})