let menu = document.querySelector('menu-bar');
let navbar = document.querySelector('.navbr');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
