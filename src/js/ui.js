import { createTaskForm, createInformationBar } from "./createElements";
import {touchStartHandler, touchEndHandler, touchMoveHandler} from "./touchControls";
import { createAllTaskPage } from "./pages/allTasks";

const content = document.querySelector('.content');

function openTaskForm() {
    content.innerHTML = '';

    const form = createTaskForm();
    content.appendChild(form);
}

function renderInformationBar() {
    const instructions = createInformationBar();
    content.appendChild(instructions);

    instructions.addEventListener('touchstart', touchStartHandler);
    instructions.addEventListener('touchmove', touchMoveHandler);
    instructions.addEventListener('touchend', touchEndHandler);
}

function renderAllTasksPage() {
    content.innerHTML = '';
    renderInformationBar();
    content.appendChild(createAllTaskPage());
}
// dev
// openTaskForm()

export { renderAllTasksPage, openTaskForm }