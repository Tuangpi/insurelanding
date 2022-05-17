const humburger = document.querySelector("nav ul svg");
const closeBtn = document.querySelector('nav > svg');
const blackScreen = document.querySelector('.black-screen')
const lis = document.querySelectorAll('li');

humburger.addEventListener('click', showNavBar);
closeBtn.addEventListener('click', hideNavBar);

function showNavBar(){
    lis.forEach(li => li.style.display = "block");
    humburger.style.display = "none";
    closeBtn.style.display = "block";
    blackScreen.style.display = "block";
    closeBtn.style.animation = 'rotate 2s forwards';
}

function hideNavBar(){
    lis.forEach(li => li.style.display = "none");
    humburger.style.display = "block";
    closeBtn.style.display = "none";
    blackScreen.style.display = "none";
}