import addIcon from '../../media/icons/addBox.svg';
import { openTaskForm } from '../ui';

export function getPageTemplate() {
    const page = document.createElement('div');
    page.classList.add('project');

    const header = document.createElement('div');
    header.classList.add('project-header');
    const headerText = document.createElement('h2');

    const addBtn = document.createElement('button');
    addBtn.classList.add('new-task');
    const icon = document.createElement('img');
    icon.src = addIcon;
    addBtn.appendChild(icon);
    header.appendChild(headerText);
    header.appendChild(addBtn);
    page.appendChild(header);
    
    const taskList = document.createElement('ul');
    taskList.classList.add('task-list');
    page.appendChild(taskList);
    
    addBtn.addEventListener('click', openTaskForm);

    return page;
}