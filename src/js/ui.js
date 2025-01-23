import { createTaskForm, createInformationBar } from "./createElements";
import { createAllTaskPage } from "./pages/allTasks";
import { closeNavMenu } from "./touchControls";

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

// Navigation
const allTaskFilter = document.querySelector('#all-tasks');
allTaskFilter.addEventListener('click', () => {
    renderAllTasksPage()
    closeNavMenu();
});

export { renderAllTasksPage, openTaskForm }