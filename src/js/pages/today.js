import { getPageTemplate } from './template';
import { getProjects } from '..';
import { createTaskItem } from '../createElements';

export function createTodayPage() {
    const tasksDueToday = getTasksDueToday(getProjects());
    const page = getPageTemplate();
    
    const headerText = page.querySelector('.project-header h2')
    headerText.textContent = `Today (${tasksDueToday.length})`;
    
    const taskList = page.querySelector('.task-list')
    tasksDueToday.forEach(taskToday => {
        taskList.appendChild(createTaskItem(taskToday.task, taskToday.projectName));
    });

    return page;
}

function getTasksDueToday(projects) {
    const tasks = [];
    const today = new Date(Date.now())
    const todayFormatted = today.toLocaleString(undefined, {month: '2-digit', day: '2-digit', year: 'numeric'});
    const todayIsolated = todayFormatted.split(',')[0];

    for (const project of projects) {
        project.tasks.forEach(task => {
            console.log(task.dueDate);
            if (task.dueDate == todayIsolated) {
                tasks.push({
                    task: task,
                    projectName: project.name
                });
            }
        });
    }
    return tasks;
} 