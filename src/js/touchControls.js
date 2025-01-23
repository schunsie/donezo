const content = document.querySelector('.content');

let startY;

// Handles dragging of content tab on mobile displays
function touchStartHandler(event) {
    const touchInfo = event.touches[0];
    startY = touchInfo.clientY;
}

function touchMoveHandler(event) {
    const touchInfo = event.touches[0];
    const currentY = touchInfo.clientY;
    const deltaY = currentY - startY;

    // Only vertically dragging down
    if (deltaY > 0) {
        content.style.transform = `translateY(${deltaY}px)`;
    } 
    
}

function touchEndHandler(event) {
    const transform = content.style.transform;
    const regex = /([0-9]+)/gm;
    const displacementValue = transform.match(regex);
    
    // If displacement is larger than cut off (250 px here)
    if (displacementValue > 250) {
        // Snap content window downwards
        content.classList.add('menu-mode')
        content.style.transform = 'translateY(calc(100% - 100px))';
    } 
    else {
        content.style.transform = 'translateY(0)';
        content.classList.remove('menu-mode');
    }
}

function closeNavMenu() {
    if (window.innerWidth < 992) {
        content.style.transform = 'translateY(0)';
        content.classList.remove('menu-mode');
    }
}

export {touchEndHandler, touchMoveHandler, touchStartHandler, closeNavMenu}