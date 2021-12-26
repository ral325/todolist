import _ from 'lodash';
import { createProject, createTask } from "./toDoObjects.js";
import { makeDefaultProject } from "./defaultProject.js";
import { makeHomePage } from "./makeHomePage.js"

/// --- initialization --- ///
// TO DO: add functionality to check if there are any projects saved in local storage before creating defaultProject
let projectList = [];
projectList.push(makeDefaultProject());

makeHomePage(projectList);