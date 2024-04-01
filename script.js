const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function click(){
var login = document.getElementById("mail").value;
var mk = document.getElementById("mk").value;
    if (login != "admin@gmail.com") 
        document.getElementById('lenh').innerHTML = 'Sai tài khoản hoặc mật khẩu';
    if (mk != 1234)
        document.getElementById('lenh').innerHTML = 'Sai tài khoản hoặc mật khẩu';
}