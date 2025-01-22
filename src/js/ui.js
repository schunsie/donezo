import { createTaskForm } from "./createElements";
import {touchStartHandler, touchEndHandler, touchMoveHandler} from "./touchControls";

const content = document.querySelector('.content');
const slider = document.querySelector('.instruction');
slider.addEventListener('touchstart', touchStartHandler);
slider.addEventListener('touchmove', touchMoveHandler);
slider.addEventListener('touchend', touchEndHandler);

const newBtn = document.querySelector('.new-task');
newBtn.addEventListener('click', openTaskForm);

function openTaskForm() {
    content.innerHTML = '';

    const form = createTaskForm();

    content.appendChild(form);
}

// dev
// openTaskForm()

export { touchStartHandler, touchMoveHandler, touchEndHandler }