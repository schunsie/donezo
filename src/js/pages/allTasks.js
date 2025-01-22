import addIcon from '../../media/icons/addBox.svg';
import { getTasks } from '..';
import { openTaskForm } from '../ui';
{/* 
<div class="project">
<div class="project-header">
    <h2>All tasks (2)</h2>
    <button class="new-task"><img src="media/icons/addBox.svg"></button>
</div>

<ul class="task-list">
    <li class="task soon">
        <h3>Walk the dog</h3>
        <div class="info-project">Home</div>
        <div class="info-date">20-01-2025</div>
    </li>
    <li class="task chill">
        <h3>Mow the lawn</h3>
        <div class="info-project">Home</div>
        <div class="info-date">25-01-2025</div>
    </li>
    <li class="task urgent">
        <h3>Learn responsive design</h3>
        <div class="info-project">Web Application</div>
        <div class="info-date">29-01-2025</div>
    </li>
</ul>
</div>  
*/}

export function createAllTaskPage() {
    const page = document.createElement('div');
    page.classList.add('project');

    const header = document.createElement('div');
    header.classList.add('project-header');

    const headerText = document.createElement('h2');
    headerText.textContent = `All tasks (${getTasks().length})`;
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

    const tasks = getTasks();
    tasks.forEach(task => {
        taskList.appendChild(createTaskItem(task));
    })
    
    
    page.appendChild(taskList);
    return page;
}

function createTaskItem(task) {
    const li = document.createElement('li');
    li.classList.add('task')

    // TODO: find a way to get project name of tasks
    li.innerHTML = `
        <h3>${task.title}</h3>
        <div class="info-project">WORK IN PROGRESS</div>
        <div class="info-date">${task.dueDate}</div>
    `

    switch (task.priority) {
        case 0:
            li.classList.add('chill');
            break;
        case 1:
            li.classList.add('soon');
            break;
        case 2:
            li.classList.add('urgent');
            break;
    }

    return li;
}