const { projectId } = require("./modules");

class Project {
    constructor() {
        console.log('Constructing Project ');
    }
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
        console.log("Constructing Software Project")
    }
    // getTaskCount() {
    //     return 66;
    // }
    getTaskCount() {
        return super.getTaskCount() + 6;
    }
}

let p = new SoftwareProject();
console.log(p.getTaskCount());

let project = { getTaskCount() { return 55; } }
let softwareProject = { getTaskCount() { return super.getTaskCount() + 7; } }
Object.setPrototypeOf(softwareProject, project);
console.log(softwareProject.getTaskCount());