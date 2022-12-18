const inquirer = require('inquirer');
const db = require('./db');

init();

//post request related code
const rolePrompts = [
    {
        name: 'role',
        message: 'What is the title of the role you are adding?',
        type: 'input'
    },
    {
        name: 'salary',
        message: 'What is the salary for the role you are adding?',
        type: 'input'
    },
    {
        name: 'department',
        message: 'What department is this role under?',
        type: 'list',
        //choices: somehow call department names from db here?
    },
]
const employeePrompts = [
    {
        name: 'first',
        message: 'First Name:',
        type: 'input'
    },
    {
        name: 'last',
        message: 'Last Name:',
        type: 'input'
    },
    {
        name: 'role',
        message: 'What role does this employee hold?',
        type: 'list',
        //choices: call role table from db here
    },
]
function addDepartment() {
    return inquirer.prompt([{
        name: 'departmentAdd',
        message: 'What department would you like to add?',
        type: 'input'
    }])
    //post to add input to db
    //console.log success
    //run init
};
function addEmployee() {
    return inquirer.prompt(employeePrompts)
    //post to add input to db
    //console.log success
    //run init
};
function addRole() {
    return inquirer.prompt(rolePrompts)
    //post to add input to db
    //console.log success
    //run init
};
//get request related code
function getDepartments() {
    //return departmets get request
    //then run init
};
function getRoles() {
    //return roles get request
    //then run init
};
function getEmployees() {
    //return employee get request
    //then run init
};
//put/update related code
function updateRole() {
    //get and post?
    //console.log success
    //run init
};
function init() {
    return inquirer.prompt([{
        name: "open",
        message: "Welcome to the Company database. What would you like to do?",
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
    }])
        .then((data) => {
            let userChoice = data.open;
            if (userChoice == 'View all departments') { getDepartments(); }
            else if (userChoice == 'View all roles') { getRoles(); }
            else if (userChoice == 'View all employees') { getEmployees(); }
            else if (userChoice == 'Add Department') { addDepartment(); }
            else if (userChoice == 'Add Role') { addRole(); }
            else if (userChoice == 'Add Employee') { addEmployee(); }
            else if (userChoice == 'Update Employee Role') { updateRole(); }
        })
}
