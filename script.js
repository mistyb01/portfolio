const header = document.querySelector('header');
const toggleButton = header.querySelector('.toggleBtn');
toggleButton.addEventListener('click', toggleMenu);


let isToggled = false;
function toggleMenu(e) {
    isToggled = !isToggled;
    const menu = header.querySelector('.menu');
    if (isToggled) {
        menu.style.display ='block';
    } else {
        menu.style.display = 'none';
    }
}
