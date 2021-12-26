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
    //console.log(taskContainer);
}

function makeTabs(projectList) {
    let tabContainer = document.getElementById("tab-container");
    for (let i = 0; i < projectList.length; i++) {
        let newTab = document.createElement("div");
        newTab.classList.add("tab");
        newTab.textContent = projectList[i].projectName;
        tabContainer.appendChild(newTab);
    }
    return tabContainer;
}

function displayProject(project) {
    let taskContainer = document.getElementById("task-container");

    // create task list header

    // display tasks for this project
    for (let i = 0; i < project.taskList.length; i++) {
        let newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.textContent = project.taskList[i].title;
        taskContainer.appendChild(newTask);
    }

    return taskContainer;
}