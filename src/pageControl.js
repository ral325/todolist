export function makePageHeader() {
    let mainDiv = document.querySelector("div#page-header");

    // create page header
    let pageHeader = document.createElement("h1");
    pageHeader.classList.add("centered");
    pageHeader.textContent = "To Do List";
    mainDiv.appendChild(pageHeader);
}

export function makeHomePage(projectList) {
    let tabContainer = makeTabs(projectList);
}

export function makeTabs(projectList) {
    let tabContainer = document.getElementById("tab-container");
    for (let i = 0; i < projectList.length; i++) {
        let newTab = document.createElement("div");
        newTab.classList.add("tab")
        newTab.textContent = projectList[i].projectName;
        tabContainer.appendChild(newTab);
    }
    return tabContainer;
}