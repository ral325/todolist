import _ from 'lodash';
import { createProject, createTask } from "./toDoObjects.js";
import { makeDefaultProject } from "./defaultProject.js";
import { makeHomePage, makePageHeader } from "./pageControl.js"

/// --- initialization --- ///
// TO DO: add functionality to check if there are any projects saved in local storage before creating defaultProject
let projectList = [];
projectList.push(makeDefaultProject());
projectList.push(makeDefaultProject());

makePageHeader();
makeHomePage(projectList, 0);