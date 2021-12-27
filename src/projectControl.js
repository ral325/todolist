import { makeTask, makeTaskHeaders } from "./taskControl";

export function getProjectFromName(projectName, projectList) {
    let projectNames = projectList.map(project => project.getProjectName());
    let projectIndex = projectNames.indexOf(projectName);
    return projectList[projectIndex];
}

export function makeTabs(projectList) {
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

export function displayProject(project) {
    let taskContainer = document.getElementById("task-container");
    taskContainer.innerHTML = "";

    //make task headers
    makeTaskHeaders(taskContainer);

    let taskList = project.getTasks();
    for (let i = 0; i < taskList.length; i++) {
        makeTask(taskList[i], taskContainer, project);
    }

    return taskContainer;
}