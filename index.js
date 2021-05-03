
const fs = require('fs')
const inquirer = require('inquirer')
const generate_html = require('./src/generate_html')



const questions = [
  
  {
    type: "input",
    name: "manager_name",
    message: "Welcome Managers! Please enter your name?",
  },
    {
      type: "input",
      name: "manager_id",
      message: "What is your employee id?",
    },
    {
      type: "input",
      name: "manager_email",
      message:"What is your email",
    },
    {
      type: "input",
      name: "manager_number",
      message:"What is office number",
    },
    {
      type: "list",
      name: "roleselection",
      message: "It is time to add your team! What is your first employees role?",
      choices: [ "Engineer", "Intern"],
    },
    
     {
      type: "input",
      name: "engineer_name",
      message: "What is your engineer's name?",
      when: (answers) => answers.roleselection === 'Engineer',
    },
      {
        type: "input",
        name: "engineer_id",
        message: "What is your engineer's employee id?",
        when: (answers) => answers.roleselection === 'Engineer',
      },
      {
        type: "input",
        name: "engineer_email",
        message:"What is your engineer's email",
        when: (answers) => answers.roleselection === 'Engineer',
      },
    {
      type: "input",
      name: "engineer_github",
      message: "what is your engineer's github username?",
      when: (answers) => answers.roleselection === 'Engineer',
    },
    {
      type: "confirm",
      name: "continue",
      message: "Would you like to add another team member ",
      choices: [ 'yes', 'no'],
    },
    // {
    //   type: "list",
    //   name: "roleselection",
    //   message: " What is your employees role?",
    //   choices: [ "Engineer", "Intern"],
    //   when: (answers) => answers.continue === 'yes',
    // },
    // {
    //   type: "input",
    //   name: "engineer_name_2",
    //   message: "What is your engineer's name?",
    //   when: (answers) => answers.roleselection === 'Engineer',
    // },
    //   {
    //     type: "input",
    //     name: "engineer_id_2",
    //     message: "What is your engineer's employee id?",
    //     when: (answers) => answers.roleselection === 'Engineer',
    //   },
    //   {
    //     type: "input",
    //     name: "engineer_email_2",
    //     message:"What is your engineer's email",
    //     when: (answers) => answers.roleselection === 'Engineer',
    //   },
    // {
    //   type: "input",
    //   name: "engineer_github_2",
    //   message: "what is your engineer's github username?",
    //   when: (answers) => answers.roleselection === 'Engineer',
    // },
    // {
    //   type: "list",
    //   name: "continue",
    //   message: "Would you like to add another team member ",
    //   choices: [ "yes", "no"],
    // },
    // {
    //   type: "list",
    //   name: "roleselection",
    //   message: "for your next What is your first employees role?",
    //   choices: [ "Engineer", "Intern"],
    //   when: (answers) => answers.continue === "yes",
    // },
    // {
    //   type: "input",
    //   name: "intern_name",
    //   message: "What is your name?",
    //   when: (answers) => answers.roleselection === 'Intern',
    // },
    //   {
    //     type: "input",
    //     name: "intern_id",
    //     message: "What is your employee id?",
    //     when: (answers) => answers.roleselection === 'Intern',
    //   },
    //   {
    //     type: "input",
    //     name: "intern_email",
    //     message:"What is your email",
    //     when: (answers) => answers.roleselection === 'Intern',
    //   },
    // {
    //   type: "input",
    //   name: "intern_school",
    //   message: "What is your school?",
    //   when: (answers) => answers.roleselection === 'Intern',
    // },
   
  ];
  inquirer.prompt(questions).then((answers) => {
    const htmlPageContent = generate_html(answers);
   
    // const license = answers.license
  
    console.log(answers);
   
  
  
    fs.writeFile("team_profile1.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Success")
    );
    //we need to update the head/ I think but maybe not
  });
  
  // add this initialize
  function init() {}
  
  // Function call to initialize app
  init();
  