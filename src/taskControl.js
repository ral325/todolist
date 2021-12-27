export function makeTask(task, taskContainer, project) {
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.dataset.projectName = project.getProjectName();

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

    // add event listeners to each task
    checkField.addEventListener("click", (e) => { deleteTask(e.target, task, project) });
}

export function deleteTask(checkFieldElement, task, project) {
    let taskContainer = document.getElementById("task-container");
    let thisTask = checkFieldElement.parentElement;
    taskContainer.removeChild(thisTask);

    //console.log(task)
    project.removeTask(task);
}

export function makeTaskHeaders(taskContainer) {
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