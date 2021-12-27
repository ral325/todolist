import { makeTask, makeTaskHeaders } from "./taskControl";

export function getProjectFromName(projectName, projectList) {
    let projectNames = projectList.map(project => project.getProjectName());
    let projectIndex = projectNames.indexOf(projectName);
    return projectList[projectIndex];
}

export function makeTabs(projectList) {
    let tabContainer = document.getElementById("tab-container");
    for (let i = 0; i < projectList.length; i++) {
        let newTabLine = document.createElement("div"); //will contain actual tab name + delete button
        newTabLine.classList.add("tabline");
        newTabLine.dataset.projectName = projectList[i].getProjectName();

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("project-delete-button");
        deleteButton.textContent = "-";
        deleteButton.addEventListener("click", e => deleteProject(e.target, projectList));

        let newTab = document.createElement("div");
        newTab.classList.add("tab");
        newTab.textContent = projectList[i].getProjectName();
        newTab.dataset.projectName = projectList[i].getProjectName();

        tabContainer.appendChild(newTabLine);
        newTabLine.appendChild(newTab);
        newTabLine.appendChild(deleteButton);
    }

    // add new tab button

    return tabContainer;
}

export function displayProject(project) {
    let taskContainer = document.getElementById("task-container");
    taskContainer.innerHTML = "";
    taskContainer.dataset.displayedProject = project.getProjectName();

    //make task headers
    makeTaskHeaders(taskContainer);

    let taskList = project.getTasks();
    for (let i = 0; i < taskList.length; i++) {
        makeTask(taskList[i], taskContainer, project);
    }

    return taskContainer;
}

export function deleteProject(target, projectList) {
    // when delete project button is clicked, get project from parent tab
    // then delete the project from projectList and delete the tab
    let thisProject = getProjectFromName(target.parentElement.dataset.projectName, projectList);
    let projectIndex = projectList.indexOf(thisProject);
    if (projectIndex > -1) {
        projectList.splice(projectIndex, 1);
        console.log("project " + projectIndex + " deleted")
        console.log(projectList)
    }
    target.parentElement.parentElement.removeChild(target.parentElement);

    // if currently viewed project is deleted, replace taskContainer view with 0-index project.
    // if there are no projects, leave taskContainer empty
    let taskContainer = document.getElementById("task-container");
    let currentDisplayedProject = taskContainer.dataset.displayedProject;
    if (projectList.indexOf(currentDisplayedProject) > -1) {
        throw new Error("somehow found deleted project?");
    } else if (projectList.length > 0) {
        displayProject(projectList[0]);
        //console.log(projectList)
    } else {
        taskContainer.innerHTML = "";
    }

}