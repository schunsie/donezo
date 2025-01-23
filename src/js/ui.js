import { createTaskForm, createInformationBar } from "./createElements";
import { createAllTaskPage } from "./pages/allTasks";
import { createTodayPage } from "./pages/today";
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

function renderTodayPage() {
    content.innerHTML = '';
    renderInformationBar();
    content.appendChild(createTodayPage());
}

// Navigation
const allTaskFilter = document.querySelector('#all-tasks');
allTaskFilter.addEventListener('click', () => {
    renderAllTasksPage()
    closeNavMenu();
});

const todayTaskFilter = document.querySelector('#today');
todayTaskFilter.addEventListener('click', () => {
    renderTodayPage();
    closeNavMenu();
})

export { renderAllTasksPage, openTaskForm }