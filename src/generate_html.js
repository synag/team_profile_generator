
const Engineer =require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

 generatePeople = (name) =>
   ``

//    
// }

//gemerate intern object 
//generate engineer


const generate_html = (answers) => ` 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

${Engineer(answers.name,answers.id, answers.email, answers.github)}
</body>
</html>`



module.exports = generate_html

