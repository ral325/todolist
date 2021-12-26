export { createProject, createTask };

const createTask = (title, description, dueDate, priority) => ({
    title,
    description,
    dueDate,
    priority,
    completed: false,

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
    },

    setTaskComplete() {
        this.completed = true;
    }
});

const createProject = (projectName, taskList) => ({
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
        if (taskIndex > 0) {
            this.taskList.splice(taskIndex, 1); //do i need to shift index at all?
        }
    },

    clearTasks() {
        this.taskList = [];
    }
})