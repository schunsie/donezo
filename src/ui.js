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
    const deltaY = currentY - startY;

    if (deltaY > 0) {
        content.style.transform = `translateY(${deltaY}px)`;
    } 
    
}

function touchEndHandler(event) {
    const transform = content.style.transform;
    const regex = /([0-9]+)/gm;
    const displacementValue = transform.match(regex);
    
    if (displacementValue > 250) {
        content.classList.add('menu-mode')
        content.style.transform = 'translateY(calc(100% - 100px))';
    } 
    else {
        content.style.transform = 'translateY(0)';
    }
}

export { touchStartHandler, touchMoveHandler, touchEndHandler }