const header = document.querySelector('header');
const toggleButton = header.querySelector('.toggleBtn');
const menu = header.querySelector('.menu');

toggleButton.addEventListener('click', toggleMenu);

window.onresize = retoggle;
function retoggle() {
    if (window.innerWidth > 768) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

let isToggled = false;
function toggleMenu() {
    isToggled = !isToggled;
    if (isToggled) {
        menu.style.display ='block';
    } else {
        menu.style.display = 'none';
    }
}

