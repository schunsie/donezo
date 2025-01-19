const slider = document.querySelector('.instruction');
slider.addEventListener('touchstart', touchStartHandler);
slider.addEventListener('touchmove', touchMoveHandler);
slider.addEventListener('touchend', touchEndHandler);

const content = document.querySelector('.content');

let startY;

function touchStartHandler(event) {
    const touchInfo = event.touches[0];
    startY = touchInfo.clientY;
    console.log(startY);
}

function touchMoveHandler(event) {
    const touchInfo = event.touches[0];
    const currentY = touchInfo.clientY;
    const deltaY = startY - currentY;

    if (deltaY > 0) {
        return;
    } 

    console.log(`deltaY: ${deltaY}, currentY: ${currentY}, startY ${startY}, deltaY + currentY: ${deltaY + currentY}`);

    content.style.bottom = deltaY + 'px';
}

function touchEndHandler(event) {
    const displacement = content.style.bottom;
    const regex = /^-?([0-9]+)/gm;
    const displacementValue = displacement.match(regex);

    if (displacementValue < -250) {
        content.style.bottom = '100%';
        content.classList.add('menu-mode')
    } 
    else {
        content.style.bottom = 0;
    }
}

export { touchStartHandler, touchMoveHandler }