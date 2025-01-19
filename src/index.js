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





// Testing
const test = new Task('Buy milk', 'Buy 2 liters of milk', '20-01-2025', 8);
console.log(test);

test.toggleCompleted()
console.log(test);