import { getProjects, getTasks } from '..';
import { createTaskItem } from '../createElements';
import { getPageTemplate } from './template';

export function createAllTaskPage() {
    const page = getPageTemplate();
    const headerText = page.querySelector('.project-header h2');
    headerText.textContent = `All tasks (${getTasks().length})`;
    
    const taskList = page.querySelector('.task-list');
    const projects = getProjects();
    projects.forEach(project => {
        project.tasks.forEach(task => {
            taskList.appendChild(createTaskItem(task, project.name));
        });
    });

    return page;
}