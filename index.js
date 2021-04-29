const Employee = require('./lib/Employee')
const Engineer =require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
const inquirer = require('inquirer')
const generate_html = require('./src/generate_html')



const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    
  },
    {
      type: "input",
      name: "id?",
      message: "What is your employee id?",
    },
    {
      type: "input",
      name: "email?",
      message:"What is your email",
    },
    {
      type: "list",
      name: "roleselection",
      message: "What is your role?",
      choices: [ "Engineer", "Intern", "Manager"],
    },
    {
      type: "input",
      name: "github",
      message: "what is your github username?",
      when: (answers) => answers.roleselection === 'Engineer',
    },
    {
      type: "input",
      name: "school",
      message: "What is your school?",
      when: (answers) => answers.roleselection === 'Intern',
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
      when: (answers) => answers.roleselection === 'Manager',
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    const htmlPageContent = generate_html(answers);
    // const license = answers.license
  
    console.log(answers);
   
  
  
    fs.writeFile("team_profile.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Success")
    );
    //we need to update the head/ I think but maybe not
  });
  
  // add this initialize
  function init() {}
  
  // Function call to initialize app
  init();
  