import { compareAsc, format, toDate, parse } from "date-fns";

export const createTask = (title, description, dueDate, priority) => ({
    title,
    description,
    dueDate: parse(dueDate, 'yyyy-MM-dd', new Date()),
    priority,
    completed: false,
    parentProject: null,

    setTitle(title) {
        this.title = title;
    },

    setDescription(description) {
        this.description = description;
    },

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    },

    setPriority(priority) {
        this.priority = priority;
    },

    getTitle() {
        return this.title;
    },

    getDescription() {
        return this.description;
    },

    getDueDate() {
        return format(this.dueDate, "y/M/d");
    },

    getPriority() {
        return this.priority;
    },

    getParentProject() {
        //console.log("this = " + this)
        return this.parentProject;
    },

    setTaskComplete() {
        this.completed = true;
    }
});

export const createProject = (projectName, taskList) => ({
    projectName,
    taskList, // array of tasks

    getProjectName() {
        return this.projectName;
    },

    getTasks() {
        return this.taskList;
    },

    setProjectName(projectName) {
        this.projectName = projectName;
    },

    addTask(task) {
        this.taskList.push(task);
    },

    removeTask(task) {
        let taskIndex = this.taskList.indexOf(task);
        if (taskIndex > -1) {
            this.taskList.splice(taskIndex, 1); //do i need to shift index at all?
        }
    },

    clearTasks() {
        this.taskList = [];
    }
})