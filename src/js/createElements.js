import { addTaskToProject, Task } from ".";
import { renderAllTasksPage } from "./ui";
import dragIcon from '../media/icons/arrowDown.svg';

function createTaskForm() {
    const form = document.createElement('form');
    form.classList.add('task-form');

    const title = document.createElement('h2');
    title.textContent = 'Add a task'; 
    form.appendChild(title);

    const info = document.createElement('p');
    info.textContent = 'Add the information below to create a new task'
    form.appendChild(info);

    const nameInputField = document.createElement('input');
    nameInputField.type = 'text';
    nameInputField.id = 'input-name';
    nameInputField.placeholder = 'e.g. Buy Milk'
    nameInputField.autofocus = true;
    nameInputField.setAttribute('maxlength', 50);
    const nameInputLabel = document.createElement('label');
    nameInputLabel.setAttribute('for', 'input-name');
    nameInputLabel.textContent = 'Task name';
    form.appendChild(nameInputLabel);
    form.appendChild(nameInputField);
    
    const dateInputField = document.createElement('input');
    dateInputField.type = 'date';
    dateInputField.id = 'input-date';
    const dateInputLabel = document.createElement('label');
    dateInputLabel.setAttribute('for', 'input-date');
    dateInputLabel.textContent = 'Due date';
    form.appendChild(dateInputLabel);
    form.appendChild(dateInputField);

    const descInputLabel = document.createElement('label');
    descInputLabel.textContent = 'Description (max 200 characters)';
    descInputLabel.setAttribute('for', 'input-desc');
    const descInputField = document.createElement('textarea');
    descInputField.id = 'input-desc';
    descInputField.setAttribute('maxlength', 200);
    form.appendChild(descInputLabel);
    form.appendChild(descInputField);

    const priorInputLabel = document.createElement('label');
    priorInputLabel.textContent = 'Priority';
    const priorInput = document.createElement('input');
    priorInput.type = 'range';
    priorInput.max = 2;
    priorInput.min = 0;
    priorInput.step = 1;
    priorInput.defaultValue = 0;
    form.appendChild(priorInputLabel);
    form.appendChild(priorInput);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText ='Add';
    form.appendChild(submitBtn);
    submitBtn.addEventListener('click', getInputFromForm);

    return form;
    
    function getInputFromForm(event) {
        event.preventDefault();
        const title = nameInputField.value;
        const dueDate = new Date(dateInputField.value).
            toLocaleDateString(undefined, {month: '2-digit', day: '2-digit', year: 'numeric'});
        const desc = descInputField.value;
        const priority = priorInput.value;
        console.log(dueDate);
        addTaskToProject(new Task(title, desc, dueDate, priority));
        form.reset();
        renderAllTasksPage();

    }
}

function createInformationBar() {
    const instructions = document.createElement('div');
    instructions.classList.add('instruction');

    const icon = document.createElement('img');
    icon.src = dragIcon;
    instructions.appendChild(icon);

    instructions.innerHTML += `
        <p id="dragInstr">Drag the page down to open the menu</p>
        <p id="clickInstr">Click to open</p>
    `;
    
    return instructions; 
}
export { createTaskForm, createInformationBar }