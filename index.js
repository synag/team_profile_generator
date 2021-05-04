
const fs = require('fs')
const inquirer = require('inquirer')
const generate_html = require('./src/generate_html')




const start = () => {
  inquirer
    .prompt({
      name: 'opening',
      type: 'list',
      message: 'Welcome! What roles do you like to select?',
      choices: [
        'Manager',
        'Intern',
        'Engineer',
      ],
    })
    .then((answer) => {
      switch (answer.opening) {
        case 'Manager':
          addManager();
          break;

        case 'Intern':
          addIntern();
          break;

        case 'Engineer':
          addEngineer();
          break;

        case 'Exit':
          connection.end();
            const htmlPageContent = generate_html(answers);
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addManager = () => {
 const Manager = [
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
 ];
   inquirer.prompt(Manager).then((answer) => {
      
      console.log(answer);
      start()
          
    
  });
};

const addIntern = () => {
  inquirer
    .prompt({
       
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
  
  
    })
    .then((answer) => {
      
      console.log(answer);
          
    
  });
};

const addEngineer = () => {
  inquirer
    .prompt({
       
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
  
  
    })
    .then((answer) => {
      
      console.log(answer);
          
    
  });
};
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
   
  // ];
  
  // inquirer.prompt().then((answers) => {
  //   const htmlPageContent = generate_html(answers);
   
  //   // const license = answers.license
  
  //   console.log(answers);
   
  
  
  //   fs.writeFile("team_profile1.html", htmlPageContent, (err) =>
  //     err ? console.log(err) : console.log("Success")
  //   );
  //   //we need to update the head/ I think but maybe not
  // });
  
  // add this initialize
  function init() {
   
  }
  
  // Function call to initialize app
  init();
  start()
  