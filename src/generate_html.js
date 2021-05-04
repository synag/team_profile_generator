const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");


  // const manager = new Manager();
  const engineer = new Engineer();
  const intern = new Intern();
  const manager = new Manager();


const generate_html = (managers,internTeam, engineerTeam) => 
   
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./dist/profile_generator.css" />
  </head>
  <body>
    <div><h1 class="header" style="text-align: center; margin-top: 1em; background-color: #485757; padding: 1em; color: wheat">Team Profile Generator </h1></div>
<div class="container" style="
    margin-top:5em" >
    <div class="row">
      <div class="col">
        <div class="card shadow" style="width: 18rem">
          <div class="card-body">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-text">
              ${manager.getRole()}
            </h3>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" > Id Number ${manager.getId(
              
            )}</li>
            <li class="list-group-item">Email: ${manager.getEmail(
              
            )}</li>
            <li class="list-group-item">Office Phone: 
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card shadow" style="width: 18rem">
          <div class="card-body">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-text">
              ${engineer.getRole()}
            </h3>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" > Id Number ${engineer.getId(
            
            )}</li>
            <li class="list-group-item">Email: ${engineer.getEmail(
              
            )}</li>
            <li class="list-group-item">Github: ${engineer.getGithub()}
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card shadow" style="width: 18rem">
          <div class="card-body">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-text">
              ${engineer.getRole()}
            </h3>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" > Id Number ${engineer.getId(
              
            )}</li>
            <li class="list-group-item">Email: ${engineer.getEmail(
              
            )}</li>
            <li class="list-group-item">Github: ${engineer.getGithub()}</li>
          </ul>
        </div>
      </div>
      <div class="row" style="
      margin-top: 9em;
  ">
        <div class="col">
          <div class="card shadow" style="width: 18rem">
            <div class="card-body">
              <h2 class="card-title">${engineer.getName()}</h2>
              <h3 class="card-text">
                ${engineer.getRole()}
              </h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" > Id Number ${engineer.getId(
                
              )}</li>
              <li class="list-group-item">Email: ${engineer.getEmail(
               
              )}</li>
              <li class="list-group-item">Office Phone: ${engineer.getGithub()}</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card shadow" style="width: 18rem">
            <div class="card-body">
              <h2 class="card-title">${intern.getName()}</h2>
              <h3 class="card-text">
                ${intern.getRole()}
              </h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" > Id Number ${intern.getId(
                
              )}</li>
              <li class="list-group-item">Email: ${intern.getEmail(
                
              )}</li>
              <li class="list-group-item">Office Phone: ${engineer.getGithub()}</li>
            </ul>
          </div>
        </div>
        

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
</body>
</html>
         `

          
          
module.exports = generate_html;
          


