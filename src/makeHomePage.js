export function makeHomePage(projectList) {
    let mainDiv = document.querySelector("div#content");

    // create page header
    let pageHeader = document.createElement("h1");
    pageHeader.classList.add("centered");
    pageHeader.textContent = "To Do List";
    mainDiv.appendChild(pageHeader);

    for (let i = 0; i < projectList.length; i++) {
        displayProjectCard(projectList[i]);
    }
}

export function displayProjectCard(project) {

}