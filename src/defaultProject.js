import { createProject, createTask } from "toDoObjects"
import { compareAsc, format } from "date-fns";

export function makeDefaultProject() {
    let titles = ["task1", "task2", "task3"];
    let descriptions = ["abc", "def", "ghi"];
    let dueDates = [new Date(1994, 5, 10), new Date(2011, 1, 1), new Date(2022, 10, 11)];
    let priorities = [1, 2, 3];

    let sampleTaskList = [];
    for (let i = 0; i < 3; i++) {
        sampleTaskList.push(createTask(titles[i], descriptions[i], dueDates[i], priorities[i]));
    }
}