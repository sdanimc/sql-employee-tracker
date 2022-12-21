const inquirer = require('inquirer');
const question = [
    {
        name: 'name',
        message: 'What is the name of the Team Manager?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the employee ID number of the Team Manager?',
        type: 'input'
    }
]
const question2 =  [
    {
        name: 'name',
        message: 'What is the name of this Engineer?',
        type: 'input'
    },
    {
        name: 'id',
        message: 'What is the employee ID number of this Engineer?',
        type: 'input'
    }
]
function init(){
    inquirer.prompt([{
        name: 'test',
        message: 'this is a test',
        type: 'list',
        choices: ['1', '2']
    }])
    .then((data)=>{
        let userChoice = data.test;
        if (userChoice == '1'){
            askQ1();
        } else {
            askQ2();
        }
    })
}
function askQ1(){
    inquirer.prompt(question)
    .then((answers) => {console.log(answers)})
}
function askQ2(){
    inquirer.prompt(question2)
    .then((answers) => {console.log(answers)})
}
init();