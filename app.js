const fs = require("fs");
const inquirer = require("inquirer");

// initial user prompts to add a employee
const addEmployee = function () {
  inquirer.prompt([
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
  ]);
};
