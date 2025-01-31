import { getProjects } from "..";
import { createTaskItem } from "../createElements";
import { getPageTemplate } from "./template";

function createProjectPage(index) {
    const page = getPageTemplate();
    const project = getProjects()[index];

    const headerText = page.querySelector('.project-header h2');
    headerText.textContent = `${project.name} (${project.tasks.length})`;

    const taskList = page.querySelector('.task-list');
    project.tasks.forEach(task => {
        taskList.appendChild(createTaskItem(task, project.name));
    });

    return page;
}

export {createProjectPage}