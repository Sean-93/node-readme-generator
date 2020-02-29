const questions = [

];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

//Links inquirer and fs packages

//MAKE SURE TO USE AXIOS!!!!!!
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

//user inquirer package to set up a prompt
inquirer.prompt([
{
    
    type: "input",
    name: "name",
    message: "What is your GitHub username?"
},
{
     
     type: "input",
     name: "title",
     message: "What is the name of the project?"

},
{
     type: "input",
     name: "description",
     message: "Can you give me a summary of the project?"
},
{
    type: "input",
    name: "installation",
    message: "How do I install this program?"
},
{
    type: "input",
    name: "usage",
    message: "How do I use this program?"
},
{
    type: "input",
    name: "license",
    message: "What is the licensing information?"
},
{
    type: "input",
    name: "contributors",
    message: "How can one contribute to this?"
},
{
    type: "input",
    name: "tests",
    message: "How do you test this program?"
},
{
    type: "input",
    name: "questions",
    message: "Honestly not sure what you mean by 'questions' for this one"
},

]).then(function(data) {
    const readMe = `
    ${data.name}
    ${data.title}
    ${data.description}
    ${data.installation}
    ${data.license}
    ${data.tests}
    ${data.questions}
    
    `
    var fileName = data.name.toLowerCase().split(' ').join('') + ".md";
    
    fs.writeFile(fileName, readMe, function(err) {
       
        if (err) {
            return console.log(err);
        }
    
        console.log("You did it!");
    });
});