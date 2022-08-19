const inquirer = require('inquirer');
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const renderhtml = require("./src/temp");
const members = [];

function promptManager() {
    inquirer
      .prompt([
        {
    type: 'input',
    name: 'managername',
    message: 'What is the managers name?'
}, {
    type: 'input',
    name: 'managerid',
    message: 'Enter your ID number'
}, {
    type: 'input',
    name: 'manageremail',
    message: 'Enter your email'
}, {
    type: 'input',
    name: 'managerofficenumber',
    message: 'Enter your office number'
},

])
.then((answers) => {

    const manager = new Manager(
        answers.managername,
        answers.managerid,
        answers.manageremail,
        answers.managerofficenumber
      );

      members.push(manager);

      menu();
    });
    }