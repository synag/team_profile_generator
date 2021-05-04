
const fs = require('fs')
const inquirer = require('inquirer')
const generate_html = require('./src/generate_html')
const engineerTeam = []
const internTeam = []
const managers = []




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
        'Exit Application'
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

        case 'Exit Application':
          // connection.end();
            const htmlPageContent = generate_html(managers,internTeam, engineerTeam);
            fs.writeFile("team_profile1.html", htmlPageContent, (err) =>
            err ? console.log(err) : console.log("Success"));
            console.log(managers);
            console.log(internTeam);
            console.log(engineerTeam);
          break;
      }
    });
};

const addManager = () => {
 const Manager = [
 {   
    type: "input",
    name: "manager_name",
    message: "Welcome Manager! Please enter your name?",
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
      managers.push(answer)
      start()
     
          
    
  });
};

const addIntern = () => {
  const Intern = [
    {   
       type: "input",
       name: "intern_name",
       message: "Welcome Intern! Please enter your name?",
     },
       {
         type: "input",
         name: "intern_id",
         message: "What is your employee id?",
       },
       {
         type: "input",
         name: "intern_email",
         message:"What is your email",
       },
       {
         type: "input",
         name: "intern_school",
         message:"What school do you attend?",
     
       },
    ];
      inquirer.prompt(Intern).then((answer) => {
      
         internTeam.push(answer)
         start()
    
  });
};

const addEngineer = () => {
  const Engineer = [
    {   
       type: "input",
       name: "engineer_name",
       message: "Welcome engineer! Please enter your name?",
     },
       {
         type: "input",
         name: "engineer_id",
         message: "What is your employee id?",
       },
       {
         type: "input",
         name: "engineer_email",
         message:"What is your email",
       },
       {
         type: "input",
         name: "engineer_github",
         message:"What is your github id?",
     
       },
    ];
      inquirer.prompt(Engineer).then((answer) => {
         
         
         engineerTeam.push(answer)
         start();

  });
};
    //   type: "list",
    //   name: "continue",
    //   message: "Would you like to add another team member ",
    //   choices: [ "yes", "no"],
    // },
    // {
    //
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
  