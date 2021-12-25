export { createProject, createTask };

const createTask = ({ title, description, dueDate, priority }) => ({
    title,
    description,
    dueDate,
    priority,

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
        return this.dueDate;
    },

    getPriority() {
        return this.priority;
    }
});

const createProject = ({ projectName, toDoList }) => ({
    projectName,
    toDoList, // array of tasks

    getProjectName() {
        return this.projectName;
    },

    getTasks() {
        return this.toDoList;
    },

    setProjectName(projectName) {
        this.projectName = projectName;
    },

    addTask(task) {
        this.toDoList.push(task);
    },

    removeTask(task) {
        let taskIndex = this.toDoList.indexOf(task);
        if (taskIndex > 0) {
            this.toDoList.splice(taskIndex, 1); //do i need to shift index at all?
        }
    },

    clearTasks() {
        this.toDoList = [];
    }
})