const images = document.querySelectorAll('#gallery img');
console.log(images);

images.forEach(image => image.addEventListener('click', openFullScreen));

function openFullScreen(e) {
    const fullScreenDiv = document.getElementById('image-full-screen');
    // careful! this REMOVES the image element from the original gallery div!
    // fullScreenDiv.appendChild(e.target); 
    //instead, create a new image with the same src.

    let image = document.createElement('img');
    image.setAttribute('src', e.target.src);
    fullScreenDiv.appendChild(image);
    fullScreenDiv.style.display = 'block';

    const xButton = fullScreenDiv.querySelector('span');
    xButton.addEventListener('click', closeWindow);
    fullScreenDiv.addEventListener('click', closeWindow);

    function closeWindow() {
        fullScreenDiv.removeChild(image);
        fullScreenDiv.style.display = 'none';
    }
}