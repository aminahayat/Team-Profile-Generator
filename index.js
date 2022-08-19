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

    function menu() {
        inquirer
        .prompt([
          {
            type: "list",
            name: "mainMenu",
            message: "What would you like to do next?",
            choices: ["Engineer", "Intern", "Build Team"],
          },
        ])
        .then((answers) => {
          switch (answers.mainMenu) {
            case "Engineer":
              promptEngineer();
              break;
            case "Intern":
              promptIntern();
              break;
            default:
              buildTeam();
          }
        });
        }
        
        promptManager();
        
        function promptEngineer(){
        inquirer.prompt([
        {
                type: "input",
                name: "engineerName",
                message: "Hi engineer, what is your name?",
              },
              {
                type: "input",
                name: "engineerId",
                message: "Enter your ID number",
              },
              {
                type: "input",
                name: "engineerEmail",
                message: "Enter your email address",
              },
              {
                type: "input",
                name: "engineerGithub",
                message: "What is your github username?",
              },
        ]).then((answers)=>{
        const engineer= new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        )
        members.push(engineer)
        menu();
        })
        
        }
        
        function promptIntern(){
        inquirer.prompt([
         {
          type: "input",
          name: "internName",
          message: "Hi intern, what is your name?",
        },
        {
          type: "input",
          name: "internId",
          message: "Enter your ID number",
        },
        {
          type: "input",
          name: "internEmail",
          message: "Enter your email address",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school did you study at?",
        },
        
        ]).then((answers)=>{
         const intern= new Intern(
           answers.internName,
           answers.internId,
           answers.internEmail,
           answers.internSchool
         )
         members.push(intern)
         menu();
        })
        }
        
        function buildTeam(){
        
        fs.writeFileSync("./develop/index.html", renderhtml(members),(err)=>{
          if(err) throw err;
        })
        }