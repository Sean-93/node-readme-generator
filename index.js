

console.log("This is a readme generator that generates a dynamic readme and pulls profile data from your GitHub account.");

setTimeout(() => {console.log("You will be prompted to fill out information to place in the readme once it is generated.");
    
}, 3000);

setTimeout(() => {console.log("Make sure you include all important details so that your project is well outlined.");
    
}, 6000);

setTimeout(() => {console.log("READY?");
    
}, 9000);

setTimeout(() => {console.log("-3-");
    
}, 10000);

setTimeout(() => {console.log("-2-");
    
}, 11000);

setTimeout(() => {console.log("-1-");
    
}, 12000);

setTimeout(() => {console.log("GO!");
    
}, 13000);


const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

setTimeout(() => {
    
    inquirer.prompt([
        {
        
        type: "input",
        name: "username",
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
        message: "Give me a summary of the application."
    },
    {
        type: "input",
        name: "installation",
        message: "How do I install?"
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
        name: "tests",
        message: "How did you test the program?"
    },
    {
        type: "input",
        name: "other",
        message: "Is there anything else you would like to add to this readme that wasn't covered with previous prompts?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to creating this?"
    },
    {
        
        type: "input",
        name: "email",
        message: "What is a good email to contact you at?"
    },
    
]).then(function(data) {
   
    const queryUrl = `https://api.github.com/users/${data.username}`
    console.log(queryUrl);
    axios.get(queryUrl)
    .then(res => {
        if(res.data.avatar_url){
            data.avatar_url = res.data.avatar_url;
        }
        const fileName = data.title.toLowerCase().split(' ').join('') + ".md";
        const readMe = generateMarkdown(data);
        
        fs.writeFile(fileName, readMe, function(err) {
           
            if (err) {
                return console.log(err);
            }
        
            console.log("Thank you! Your readme has been generated!");
        });
     });
    });
}, 15000);

    
    