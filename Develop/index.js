// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [{
   type: 'input',
   name: 'title',
   message: 'What is the title of your project? (Required)',
      validate: titleInput => {
         if (titleInput) {
         return true;
         } else {
         console.log('You need to enter a project title!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'description',
   message: 'Describe your repository. (Required)',
      validate: descriptionInput => {
         if (descriptionInput) {
         return true;
         } else {
         console.log('You need to enter a project description!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'installation',
   message: 'What are the steps to install the project? (Required)',
      validate: installationInput => {
         if (installationInput) {
         return true;
         } else {
         console.log('You need to enter installation instructions!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'usage',
   message: 'Give instructions and examples for use. (Required)',
      validate: usageInput => {
         if (usageInput) {
         return true;
         } else {
         console.log('You need to enter instructions for use!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'credits',
   message: 'List any collaborators or link any tutorials that you used or type none.',
      validate: creditsInput => {
         if (creditsInput) {
         return true;
         } else {
         console.log('You need to enter credits or type none!');
         return false;
         }
      }
   },
   {
   type: 'checkbox',
   name: 'license',
   message: 'Choose a license for the project (Required)',
   choices: ['MIT Lincense', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache 2.0 License', 'Boost Software License 1.0', 'The Unlicense', 'none'],
      validate: licenseInput => {
         if (licenseInput) {
         return true;
         } else {
         console.log('You need to choose a license!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'contributing',
   message: 'How can others contribute to this project? (Required)',
      validate: contributingInput => {
         if (contributingInput) {
         return true;
         } else {
         console.log('You need to enter how to contribute!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'test',
   message: 'Provide an example of how to run the application. (Required)',
      validate: testInput => {
         if (testInput) {
         return true;
         } else {
         console.log('You need to enter an example!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'userName',
   message: 'What is your GitHub username? (Required)',
      validate: questionsInput => {
         if (questionsInput) {
         return true;
         } else {
         console.log('You need to enter a username!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'email',
   message: 'What is your email address? (Required)',
      validate: emailInput => {
         if (emailInput) {
         return true;
         } else {
         console.log('You need to enter an email address!');
         return false;
         }
      }
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('Information created in README!')
   })
};

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
      .then(function(data) {
         console.log(data);
         writeToFile('README.md', generateMarkdown(data));
      });
}

// Function call to initialize app
init();
