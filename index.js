//include
//prompted team manager's name
//prompted employee ID
//email address
//office number

const inquirer = require('inquirer');
const promptedManger = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager name',
            message: `what is manager's name?`,
        }, 
        {
            type: 'input',
            name: 'ID',
            message: `what is emplpyee ID?`,
        }, 
        {
            type: 'input',
            name: 'email',
            message: `what is manager's email address?`,
        }, 
        {
            type: 'input',
            name: 'office number',
            message: `what is office number?`,
        }
    ])
    .then((response) => {
        console.log(response)
        promptedMenu();
    })
    
}
const promptedMenu = function() {
    inquirer .prompt ([
        {
            type: "list",
            name: 'menu options',
            message: `what's the job type?`,
            choices: [
                'engineer',
                'intern',
                'finish building my team'
            ]
        }

    ])
    .then((response) => {
        console.log(response)
    })
    
}
const promptedEngineer = function() {
    inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: `what is engineer's name?`,
        }, 
        {
            type: 'input',
            name: 'ID',
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
        {
            type: 'list',
            name: 'adding new employee',
            message: 'would you like to add another employee?',
            choices: ['yes', 'no']
        }
    ])
}
const promptedIntern = function() {
    inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: `what is intern's name?`,
        }, 
        {
            type: 'input',
            name: 'ID',
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
       
        {
            type: 'list',
            name: 'adding new employee',
            message: 'would you like to add another intern?',
            choices: ['yes', 'no']
        }
    ])
}
//prompted menu
//engineer
//intern
promptedManger();
// promptedMenu();