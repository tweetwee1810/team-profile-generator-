//include
//prompted team manager's name
//prompted employee ID
//email address
//office number
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const employeeArray = [];
const promptedManger = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `what is manager's name?`,
        }, 
        {
            type: 'input',
            name: 'id',
            message: `what is emplpyee ID?`,
        }, 
        {
            type: 'input',
            name: 'email',
            message: `what is manager's email address?`,
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: `what is office number?`,
        }
    ])
    .then((response) => {
        console.log(response)
        const newManager = new Manager(
            response.name, response.id, response.email, response.officeNumber
        )
        employeeArray.push(newManager)
        promptedMenu();
    })
    
}
const promptedMenu = function() {
    inquirer .prompt ([
        {
            type: "list",
            name: 'menu',
            message: `would you like to add another employee or finish?`,
            choices: [
                'engineer',
                'intern',
                'finish building my team'
            ]
        }

    ])
    .then((response) => {
        switch (response.menu) {
            case 'engineer':
                promptedEngineer();
                
                break;
            case 'intern':
                promptedIntern();
                break;
            default:
                finish();
                break;
        }
        console.log(response)
    })
    
}
const finish = function(){
    console.log(employeeArray)
}
const promptedEngineer = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `what is engineer's name?`,
        }, 
        {
            type: 'input',
            name: 'id',
            message: `what is emplpyee ID?`,
        }, 
        {
            type: 'input',
            name: 'email',
            message: `what is Engineer's email address?`,
        }, 
        {
            type: 'input',
            name: 'github',
            message: `what is engineer's github account?`,
        },
    ])
    .then((response) => {
        console.log(response)
        const newEngineer = new Engineer(
            response.name, response.id, response.email, response.github
        )
        employeeArray.push(newEngineer)
        promptedMenu();
    })
}
const promptedIntern = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `what is intern's name?`,
        }, 
        {
            type: 'input',
            name: 'id',
            message: `what is intern ID?`,
        }, 
        {
            type: 'input',
            name: 'email',
            message: `what is intern's email address?`,
        }, 
        {
            type: 'input',
            name: 'school',
            message: `what is intern's school?`,
        }, 
       
    ])
    .then((response) => {
        console.log(response)
        const newIntern = new Intern(
            response.name, response.id, response.email, response.school
        )
        employeeArray.push(newIntern)
        promptedMenu();
    })
}
//prompted menu
//engineer
//intern
promptedManger();
// promptedMenu();
function init() {
    promptedManger();
}
// const generateMarkdown(data) {

// }