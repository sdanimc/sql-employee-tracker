const inquirer = require('inquirer');
//const db = require('./db');

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
    /*{
        name: 'department',
        message: 'What department is this role under?',
        type: 'list',
        choices: departOpts
    }*/
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
    /*{
        name: 'role',
        message: 'What role does this employee hold?',
        type: 'list',
        //get rolesOpts in addEmployee funct
        choices: rolesOpts
    }*/
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
    //get roles function then ([rows]) let roles = rows const rolesOpts = rows.map
    inquirer.prompt(employeePrompts)
    .then((answers) => {console.log(answers)})
    //post to add input to db
    //console.log success
    //run init
};
function addRole() {
     //get depart function then ([rows]) let departs = rows const departOpts = rows.map
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
    inquirer.prompt([{
        name: 'open',
        message: 'Welcome to the Company database. What would you like to do?',
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
        //choices: [ 'Add Department', 'Add Role', 'Add Employee']
    }])
        .then((data) => {
            let userChoice = data.open;
            if(userChoice == 'Add Employee') { addEmployee();} else { console.log('test complete')}
            /*if (userChoice == 'View all departments') { getDepartments(); }
            else if (userChoice == 'View all roles') { getRoles(); }
            else if (userChoice == 'View all employees') { getEmployees(); }
            else if (userChoice == 'Add Department') { addDepartment(); }
            else if (userChoice == 'Add Role') { addRole(); }
            else if (userChoice == 'Add Employee') { addEmployee(); }
            else if (userChoice == 'Update Employee Role') { updateRole(); }*/
        })
}
init();
