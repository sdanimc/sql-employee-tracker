//const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const db = require('./db');

//post request related code
function addDepartment() {
    prompt([{
        name: 'name',
        message: 'What department would you like to add?',
        type: 'input'
    }])
    .then(res => {
        let name = res;
        db.addNewDepartment(name)
        .then(() => console.log('Added new department'))
        .then(()=> init())
    })
};
function addEmployee() {
    db.getAllRoles()
    .then(([rows]) => {
       let roles = rows;
       const roleOpts = roles.map(({id, title}) => ({
           name: title,
           value: id,
       }))
       prompt([    {
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
        choices: roleOpts
    }])
       .then((res) => {
        let firstName = res.first
        let lastName = res.last
        let roleId = res.role
        db.getAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const mgtOpts = employees.map(({id, first, last})=>
            ({
                name: `${first} ${last}`,
                value: id
            }));
            mgtOpts.unshift({name: 'None', value: null});
            prompt({  name: 'manager',
            message: 'What does this employee report to?',
            type: 'list',
            choices: mgtOpts})
            .then(res => {
                let employee = {
                    manager_id: res.manager,
                    role_id: roleId,
                    first: firstName,
                    last: lastName
                }
                db.addNewEmployee(employee)
            })
            .then(() => console.log('Added new employee'))
            .then(() => init())
        })
       })
   })
  
};
function addRole() {
     //get depart function then ([rows]) let departs = rows const departOpts = rows.map
     db.getAllDepartments()
     .then(([rows]) => {
        let departments = rows;
        const departOpts = departments.map(({id, name}) => ({
            name: name,
            value: id,
        }))
        prompt([{
            name: 'title',
            message: 'What is the title of the role you are adding?',
            type: 'input'
        },
        {
            name: 'salary',
            message: 'What is the salary for the role you are adding?',
            type: 'input'
        },
        {
            name: 'department_id',
            message: 'What department is this role under?',
            type: 'list',
            choices: departOpts
        }])
        .then((data) => {
            db.addNewRole(data)
            .then(()=> console.log('Added new Role'))
            .then(()=> init())
        })
    })
   
};
//get request related code
function getDepartments() {
    db.getAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log('\n');
        console.table(departments);
    })
    .then(() => init());
};
function getRoles() {
    db.getAllRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log('\n');
        console.table(roles);
    })
    .then(() => init());
};
function getEmployees() {
    db.getAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log('\n');
        console.table(employees);
    })
    .then(() => init());
};
//put/update related code
function updateRole() {
    //get and post?
    //console.log success
    //run init
};
function init() {
    prompt([{
        name: 'open',
        message: 'Welcome to the Company database. What would you like to do?',
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
init();
