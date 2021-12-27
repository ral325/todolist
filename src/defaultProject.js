import { isToday } from "date-fns";
import { createProject, createTask } from "./toDoObjects"


export function makeDefaultProject() {
    let titles = ["Task 1", "Task 2", "Task 3"];
    let descriptions = ["make pizza", "eat pizza", "become a chef"];
    let dueDates = [new Date(1994, 5, 10), new Date(2011, 1, 1), new Date(2022, 10, 11)];
    let priorities = ["High", "Low", "Medium"];

    let sampleTaskList = [];
    for (let i = 0; i < titles.length; i++) {
        sampleTaskList.push(createTask(titles[i], descriptions[i], dueDates[i], priorities[i]));
    }

    return createProject("Default Project", sampleTaskList);
}

export function makeDefaultProject2() {
    let titles = ["Task 4", "Task 5", "Task 6", "Task 7"];
    let descriptions = ["write a book", "write code", "complete TOP", "just do it bro"];
    let dueDates = [new Date(1994, 4, 10), new Date(2011, 0, 1), new Date(2022, 9, 11), new Date(2021, 11, 25)];
    let priorities = ["Low", "Medium", "High", "Insane"];

    let sampleTaskList = [];
    for (let i = 0; i < titles.length; i++) {
        sampleTaskList.push(createTask(titles[i], descriptions[i], dueDates[i], priorities[i]));
    }

    return createProject("Default Project 2", sampleTaskList);
}