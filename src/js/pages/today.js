import addIcon from '../../media/icons/addBox.svg';
import { getProjects, getTasks } from '..';
import { openTaskForm } from '../ui';
import { createTaskItem } from '../createElements';

export function createTodayPage() {
    const tasksDueToday = getTasksDueToday(getProjects());
    console.log(tasksDueToday);

    const page = document.createElement('div');
    page.classList.add('project');

    const header = document.createElement('div');
    header.classList.add('project-header');

    const headerText = document.createElement('h2');
    headerText.textContent = `Today (${tasksDueToday.length})`;
    const addBtn = document.createElement('button');
    addBtn.classList.add('new-task');
    const icon = document.createElement('img');
    icon.src = addIcon;
    addBtn.appendChild(icon);
    header.appendChild(headerText);
    header.appendChild(addBtn);
    page.appendChild(header);

    addBtn.addEventListener('click', openTaskForm);

    const taskList = document.createElement('ul');
    taskList.classList.add('task-list');

    tasksDueToday.forEach(taskToday => {
        taskList.appendChild(createTaskItem(taskToday.task, taskToday.projectName));
    });
        
    page.appendChild(taskList);
    return page;
}

function getTasksDueToday(projects) {
    const tasks = [];
    const today = new Date(Date.now())
    const todayFormatted = today.toLocaleString(undefined, {month: '2-digit', day: '2-digit', year: 'numeric'});
    const todayIsolated = todayFormatted.split(',')[0];
    console.log(todayIsolated);
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