const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const engineer1 = new Manager(
  answers.manager_name,
  answers.manager_id,
  answers.manager_email,
  manager_number
);
const engineer2 = new Manager(
  answers.manager_name,
  answers.manager_id,
  answers.manager_email,
  manager_number
);
const engineer3 = new Manager(
  answers.manager_name,
  answers.manager_id,
  answers.manager_email,
  manager_number
);
const intern = new Manager(
  answers.manager_name,
  answers.manager_id,
  answers.manager_email,
  manager_number
);



const generate_html = (answers) => ` 

<!DOCTYPE html>
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
<div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-text">
              ${manager.getRole()}.
            </h3>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item light" > Id Number ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Phone: ${
              manager.officeNumber
            }</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-text">
            ${engineer.getRole()}.
          </h3>
        </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.getId()}</li>
            <li class="list-group-item"${engineer.getEmail()}</li>
            <li class="list-group-item">${enginner.getGithub()}</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 18rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-text">
            ${engineer.getRole()}.
          </h3>
        </div>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.getId()}</li>
          <li class="list-group-item"${engineer.getEmail()}</li>
          <li class="list-group-item">${enginner.getGithub()}</li>
          </ul>
        </div>
      </div>
    </div>
<div class="row">
    <div class="col">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-text">
        ${engineer.getRole()}.
      </h3>
    </div>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.getId()}</li>
      <li class="list-group-item"${engineer.getEmail()}</li>
      <li class="list-group-item">${enginner.getGithub()}</li>
      </ul>
    </div>
</div>
<div class="col">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
      <h2 class="card-title">${intern.name}</h2>
      <h3 class="card-text">
        ${intern.getRole()}.
      </h3>
    </div>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.getId()}</li>
            <li class="list-group-item"${intern.getEmail()}</li>
            <li class="list-group-item">${intern.getSchool()}</li>
      </ul>
    </div>
</div>
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
</html>`;

module.exports = generate_html;
