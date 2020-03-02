const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");
// const queryUrl = `https://api.github.com/users/${username}`;

console.log("This is a readme generator that generates a dynamic readme and pulls profile data from your GitHub account.  You will be prompted to fill out information to place in the readme once it is generated.");

const questions = [
    
];
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
            message: "Who contributed to this?"
        },
        {
            type: "input",
            name: "tests",
            message: "How do you test this program?"
        },
        {
            type: "input",
            name: "questions",
            message: "Is there anything else you would like to add to this readme?"
        },
        
        ]).then(function(data) {
            const readMe = `
            ${data.title}
            ${data.name}
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
            
                console.log("Readme Generated!");
            });
        });





