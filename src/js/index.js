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
    console.log(projects);
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
addTaskToProject(new Task('Walk the dog', 'lorem ipsem', '20-02-2025', 1));
addTaskToProject(new Task('Mow the lawn', 'lorem ipsem', '25-02-2025', 0));

createNewProject('Web App');
addTaskToProject(new Task('Learn responsive design', 'lorem ipsem', '25-02-2025', 2), projects[1]);
// addTaskToProject(new Task('Learn JS', 'lorem ipsem', '25-02-2025', 2), projects[1]);
// addTaskToProject(new Task('Learn CSS', 'lorem ipsem', '25-02-2025', 2), projects[1]);
// addTaskToProject(new Task('Learn HTML', 'lorem ipsem', '25-02-2025', 2), projects[1]);


// Initial render
renderAllTasksPage();


export {addTaskToProject, Task, getProjects, getTasks}