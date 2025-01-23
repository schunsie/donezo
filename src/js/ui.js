import { createTaskForm, createInformationBar } from "./createElements";
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
}

function renderAllTasksPage() {
    content.innerHTML = '';
    renderInformationBar();
    content.appendChild(createAllTaskPage());
}

export { renderAllTasksPage, openTaskForm }