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
    const today = new Date()
    const todayFormatted = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    console.log(todayFormatted);

    for (const project of projects) {
        project.tasks.forEach(task => {
            console.log(task.dueDate);
            if (todayFormatted.getTime() === task.dueDate.getTime()) {
                tasks.push({
                    task: task,
                    projectName: project.name
                });
            }
        });
    }
    return tasks;
} 