class Project {
    constructor() {
        // console.log(typeof new.target);
        console.log(new.target.getDefaultId()); // used to access static methods
    }
}

class SoftwareProject extends Project {
    // constructor() {
    //     super();
    // }
    static getDefaultId() {
        return 99;
    }
}

let p = new SoftwareProject();