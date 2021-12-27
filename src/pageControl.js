import { makeTabs, displayProject, getProjectFromName } from "./projectControl";

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
        displayProject(getProjectFromName(this.dataset.projectName, projectList));
    }
}