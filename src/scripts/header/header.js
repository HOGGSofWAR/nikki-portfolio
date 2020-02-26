const eyeLeftInner = document.getElementById('svg_2');
const eyeLeftPupil = document.getElementById('svg_4');
const eyeRightPupil = document.getElementById('svg_5');
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const xMovement = (innerEyeWidth - pupilWidth);
const yMovement = (innerEyeHeight - pupilHeight);

const sootballtest = document.getElementById('sootballtest');

const containerWidth = sootballtest.getBoundingClientRect().width;
const containerHeight = sootballtest.getBoundingClientRect().height;

window.addEventListener('mousemove', updateEyePosition);

let posX = 0;
let posY = 0;

function updateEyePosition(event) {
    
    if (event.clientX < document.body.clientWidth) { 
        posX = ((event.clientX / document.body.clientWidth) * 2 - 1) * xMovement;
    }
    if (event.clientY < document.body.clientHeight) {
        posY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yMovement;
    }

    eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
    eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}