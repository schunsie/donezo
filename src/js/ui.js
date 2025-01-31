import { getProjects } from ".";
import { createTaskForm, createInformationBar } from "./createElements";
import { createAllTaskPage } from "./pages/allTasks";
import { createProjectPage } from "./pages/project";
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

function renderProjectsInNav() {
    const projectNav = document.querySelector('.nav-projects');
    const projects = getProjects();

    projects.forEach((project, index) => {
        projectNav.appendChild(createNavItem(project, index));
    });

    function createNavItem(project, index) {
        const btn = document.createElement('button');
        btn.textContent = project.name;
        btn.dataset.index = index;
        btn.addEventListener('click', navigateToProject);
        return btn;
    }
}

function navigateToProject(event) {
    const index = event.target.dataset.index;
    content.innerHTML = '';
    renderInformationBar();
    content.appendChild(createProjectPage(index));
    closeNavMenu();
}

export { renderAllTasksPage, openTaskForm, renderProjectsInNav }