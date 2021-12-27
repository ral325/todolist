import { parse, isValid } from "date-fns";
import { makeTask, makeTaskHeaders } from "./taskControl";
import { createProject, createTask } from "./toDoObjects";

export function getProjectFromName(projectName, projectList) {
    let projectNames = projectList.map(project => project.getProjectName());
    let projectIndex = projectNames.indexOf(projectName);
    return projectList[projectIndex];
}

export function makeTabs(projectList) {
    let tabContainer = document.getElementById("tab-container");
    tabContainer.innerHTML = ""; //clear any existing tabs

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
    let addProjectButton = document.createElement("button");
    addProjectButton.textContent = "+";
    addProjectButton.classList.add("add-project-button");
    addProjectButton.addEventListener("click", () => addProject(projectList));
    tabContainer.appendChild(addProjectButton);

    // add event listeners to tabs
    let tabs = [...document.querySelectorAll(".tab")];

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", controlTabs);
        // when a tab is clicked, identify which project that is from the projectList and display that project's tasks in the taskContainer
    }

    function controlTabs() {
        //"this" is the tab class element that was clicked
        // projectList comes from input to makeHomePage(), so it won't change within a single call to makeHomePage()
        displayProject(getProjectFromName(this.dataset.projectName, projectList));
    }

    if (projectList.length === 1) {
        displayProject(projectList[0]);
    }

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

    // add "add task button"
    let addTaskButton = document.createElement("button");
    addTaskButton.textContent = "+";
    addTaskButton.addEventListener("click", () => addNewTask(project));
    addTaskButton.classList.add("add-task-button")
    taskContainer.appendChild(addTaskButton);

    return taskContainer;
}

function deleteProject(target, projectList) {
    // when delete project button is clicked, get project from parent tab
    // then delete the project from projectList and delete the tab
    let thisProject = getProjectFromName(target.parentElement.dataset.projectName, projectList);
    let projectIndex = projectList.indexOf(thisProject);
    if (projectIndex > -1) {
        projectList.splice(projectIndex, 1);
        //console.log("project " + projectIndex + " deleted")
        //console.log(projectList)
    }
    target.parentElement.parentElement.removeChild(target.parentElement);

    // if currently viewed project is deleted, replace taskContainer view with 0-index project.
    // if there are no projects, leave taskContainer empty
    let taskContainer = document.getElementById("task-container");
    let currentDisplayedProject = taskContainer.dataset.displayedProject;

    // if currently displayed project is the deleted one, display the first project still in the list.
    // if there are no projects in the list, leave task container empty
    if (projectList.length === 0) {
        taskContainer.innerHTML = "";
        console.log("no projects left")
    } else if (thisProject.getProjectName() == currentDisplayedProject) {
        displayProject(projectList[0]);
    }
}

function addProject(projectList) {
    let newProject = createProject(window.prompt("Enter project name:"), []);
    projectList.push(newProject);
    makeTabs(projectList);
}

function addNewTask(project) {
    let title = window.prompt("Enter task name:");
    let descrip = window.prompt("Enter description of task:");
    let dueDate = promptForValidDate(window.prompt("Enter due date in the format of YYYY-MM-DD:"));
    // console.log(parse(dueDate, "yyyy-MM-dd", new Date()))
    let priority = window.prompt("Enter priority:")

    project.addTask(createTask(title, descrip, dueDate, priority));

    displayProject(project);
}

function promptForValidDate(date) {
    if (!isValid(parse(date, "yyyy-MM-dd", new Date()))) {
        let newdate = window.prompt("Please ensure due date is of the form Y YYY-MM-DD:")
        return promptForValidDate(newdate);
    } else {
        return date;
    }
}