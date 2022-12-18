const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const rolePrompts =[
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
function addDepartment(){
    return inquirer.prompt([{
        name: 'department',
        message: 'What department would you like to add?',
        type: 'input'
    }])
}

app.listen(3001);