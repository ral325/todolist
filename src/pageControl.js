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
}