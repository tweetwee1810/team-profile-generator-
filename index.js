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
//prompted menu
//engineer
//intern
promptedManger();
// promptedMenu();