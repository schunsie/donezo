import '../style.css';
import './ui.js';
import { renderAllTasksPage } from './ui.js';

class Task {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    };

    toggleCompleted() {
        this.completed = !this.completed;
    }
};

class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
    };
};

function addTaskToProject(task, project=defaultProject) {
    project.tasks.push(task);
}

function removeTaskFromProject(task, project) {
    project.tasks = project.tasks.filter((projectTask) => projectTask !== task);
};

function createNewProject(name) {
    projects.push(new Project(name));
}

const getProjects = () => {return [...projects]};

function getTasks() {
    const projectArray = getProjects();

    const tasks = projectArray.flatMap(project => {
        return project.tasks;
    });

    return tasks;
}

const defaultProject = new Project('Home');
const projects = [defaultProject]


// Testing
addTaskToProject(new Task('Walk the dog', 'lorem ipsem', new Date(2025, 0, 26), 1));
addTaskToProject(new Task('Mow the lawn', 'lorem ipsem', new Date(2025, 0, 30), 0));

createNewProject('Web App');
addTaskToProject(new Task('Learn responsive design', 'lorem ipsem', new Date(2025, 1, 28), 0), projects[1]);
addTaskToProject(new Task('Learn JS', 'lorem ipsem', new Date(2025, 1, 20), 1), projects[1]);
addTaskToProject(new Task('Learn CSS', 'lorem ipsem', new Date(2025, 1, 18), 2), projects[1]);
addTaskToProject(new Task('Learn HTML', 'lorem ipsem', new Date(2025, 1, 10), 2), projects[1]);


// Initial render
renderAllTasksPage();


export {addTaskToProject, Task, getProjects, getTasks}