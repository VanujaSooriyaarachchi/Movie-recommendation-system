const buttons = document.querySelectorAll('.viewbutton');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-image');
const overlayDescription = document.querySelector('.overlay-description');

function open(e) {
    overlay.classList.add('open');
    const src = e.currentTarget.parentNode.previousElementSibling.src;
    const title = e.currentTarget.parentNode.nextElementSibling.querySelector('h3').textContent;
    const description = e.currentTarget.parentNode.nextElementSibling.querySelector('p').textContent;
    overlayImage.src = src;
    overlayDescription.querySelector('h3').textContent = title;
    overlayDescription.querySelector('p').textContent = description;
}

function close() {
    overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);
