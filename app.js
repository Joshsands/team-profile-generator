const fs = require("fs");
const inquirer = require("inquirer");

// add constructors
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// arry for all the team members
const team = [];

// initial user prompts to add a employee
const addTeam = function () {
  // ask general questions for all employees
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please select the team member's role",
        choices: ["Team Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter the team member's name",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the team member's ID number",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the team member's email",
      },
    ])
    //answers used as arguments including a specific role for each type of team member
    .then(({ name, role, id, email }) => {
      let selectedRole = "";
      if (role === "Team Manager") {
        selectedRole = "office number";
      } else if (role === "Engineer") {
        selectedRole = "GitHub username";
      } else {
        selectedRole = "school name";
      }
      inquirer
        .prompt([
          {
            type: "input",
            name: "selectedRole",
            message: `Please enter the team meber's ${selectedRole}`,
          },
          {
            type: "list",
            name: "addMember",
            message: "Would you like to enter another team member?",
            choices: ["yes", "no"],
          },
        ])
        // create constructors for each role
        .then(({ selectedRole, addMember }) => {
          let addedMember;
          if (role === "Team Manager") {
            addedMember = new Manager(name, id, email, selectedRole);
          } else if (role === "Engineer") {
            addedMember = new Engineer(name, id, email, selectedRole);
          } else {
            addedMember = new Intern(name, id, email, selectedRole);
          }
          team.push(addedMember);
          addMemberHTML(addedMember).then(() => {
            if (addMember === "yes") {
              addTeam();
            } else {
              console.log(team);
              endHTML();
            }
          });
        });
    });
};

const generateHTML = function () {
  const HTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
          <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <title>Team Profile</title>
  </head>
  <body>
  <nav class="navbar navbar-dark bg-dark mb-5">
  <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
  </nav>
  <div class="container">
  <div class="row">`;
  fs.writeFile("./dist/index.html", HTML, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("ANSWER THE QUESTIONS TO ADD TEAM MEMBERS TO YOUR PROFILE!");
};

function addMemberHTML(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();

    let data = "";
    
    if (role === "Team Manager") {
        const officePhone = member.getOfficeNumber();
        data = `<div class="col-6">
              <div class="card mx-auto mb-3" style="width: 18rem">
              <h5 class="card-header">${name}<br /><br />Manager</h5>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email Address: ${email}</li>
                  <li class="list-group-item">Office Phone: ${officePhone}</li>
              </ul>
              </div>
          </div>`;
    } else {console.log('error')}

    console.log("adding team member");

    fs.appendFile("./dist/index.html", data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function endHTML() {
  const html = ` </div>
    </div>
    
</body>
</html>`;

  fs.appendFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("YOUR TEAM PROFILE HAS BEEN GENERATED! FIND IT IN THE 'dist' DIRECTORY");
}

generateHTML();
addTeam();
