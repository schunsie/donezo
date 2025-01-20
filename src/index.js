import './style.css';
import { touchStartHandler, touchMoveHandler } from './ui';

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

function addTaskToProject(task, project=defaultList) {
    project.tasks.push(task);
}

function removeTaskFromProject(task, project=defaultList) {
    project.tasks = project.tasks.filter((projectTask) => projectTask !== task);
};

function createNewProject(name) {
    projects.push(new Project(name));
}



// Testing
const defaultList = new Project('Home');
const projects = [defaultList]

addTaskToProject(new Task('Walk the dog', 'lorem ipsem', '20-02-2025', 2));
addTaskToProject(new Task('Mow the lawn', 'lorem ipsem', '25-02-2025', 2));

console.log(defaultList);
console.log(projects);

createNewProject('Web App');
addTaskToProject(new Task('Mow the lawn', 'lorem ipsem', '25-02-2025', 2), projects[1]);
console.log(projects);