export function makePageHeader() {
    let mainDiv = document.querySelector("div#page-header");

    // create page header
    let pageHeader = document.createElement("h1");
    pageHeader.classList.add("centered");
    pageHeader.textContent = "To Do List";
    mainDiv.appendChild(pageHeader);
}

export function makeHomePage(projectList, indexToDisplay) {
    let tabContainer = makeTabs(projectList);
    let taskContainer = displayProject(projectList[indexToDisplay]);

    // add event listeners to tabs
    let tabs = [...document.querySelectorAll(".tab")];

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", controlTabs);
        // when a tab is clicked, identify which project that is from the projectList and display that project's tasks in the taskContainer
    }

    function controlTabs() {
        //"this" is the tab class element that was clicked
        // projectList comes from input to makeHomePage(), so it won't change within a single call to makeHomePage()
        let projectNames = projectList.map(project => project.getProjectName());
        let projectIndex = projectNames.indexOf(this.dataset.projectName);
        displayProject(projectList[projectIndex]);
    }
}

function makeTabs(projectList) {
    let tabContainer = document.getElementById("tab-container");
    for (let i = 0; i < projectList.length; i++) {
        let newTab = document.createElement("div");
        newTab.classList.add("tab");
        newTab.textContent = projectList[i].getProjectName();
        newTab.dataset.projectName = projectList[i].getProjectName();
        tabContainer.appendChild(newTab);
    }
    return tabContainer;
}

function displayProject(project) {
    let taskContainer = document.getElementById("task-container");
    taskContainer.innerHTML = "";

    //make task headers
    makeTaskHeaders(taskContainer);

    let taskList = project.getTasks();
    for (let i = 0; i < taskList.length; i++) {
        makeTask(taskList[i], taskContainer);
    }

    return taskContainer;
}

function makeTask(task, taskContainer) {
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    let checkField = document.createElement("div");
    checkField.classList.add("check-box");

    let titleField = document.createElement("div");
    titleField.textContent = task.getTitle();
    titleField.classList.add("title");

    let dateField = document.createElement("div");
    dateField.textContent = task.getDueDate();
    dateField.classList.add("date");

    let descriptionField = document.createElement("div");
    descriptionField.textContent = task.getDescription();
    descriptionField.classList.add("description")

    let priorityField = document.createElement("div");
    priorityField.textContent = task.getPriority();
    priorityField.classList.add("priority");

    taskContainer.appendChild(newTask);

    newTask.appendChild(checkField);
    newTask.appendChild(titleField);
    newTask.appendChild(descriptionField);
    newTask.appendChild(priorityField);
    newTask.appendChild(dateField);
}

function makeTaskHeaders(taskContainer) {
    let taskHeader = document.createElement("div");
    taskHeader.classList.add("task");

    let headerTag = "h3";

    let checkField = document.createElement(headerTag);
    //checkField.classList.add("check-box");

    let titleField = document.createElement(headerTag);
    titleField.textContent = "Task Name:";
    titleField.classList.add("title");

    let dateField = document.createElement(headerTag);
    dateField.textContent = "Due Date:";
    dateField.classList.add("date");

    let descriptionField = document.createElement(headerTag);
    descriptionField.textContent = "Description:";
    descriptionField.classList.add("description")

    let priorityField = document.createElement(headerTag);
    priorityField.textContent = "Priority:";
    priorityField.classList.add("priority");

    taskContainer.appendChild(taskHeader);

    taskHeader.appendChild(checkField);
    taskHeader.appendChild(titleField);
    taskHeader.appendChild(descriptionField);
    taskHeader.appendChild(priorityField);
    taskHeader.appendChild(dateField);
}