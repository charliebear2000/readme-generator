// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [{
   type: 'input',
   name: 'title',
   message: 'What is the title of your project?'
   },
   {
   type: 'input',
   name: 'description',
   message: 'Describe your repository.'
   },
   {
   type: 'input',
   name: 'installation',
   message: 'What are the steps to install the project?'
   },
   {
   type: 'input',
   name: 'usage',
   message: 'Give instructions and examples for use.'
   },
   {
   type: 'input',
   name: 'credits',
   message: 'List any collaborators or link any tutorials.'
   },
   {
   type: 'checkbox',
   name: 'license',
   message: 'Choose a license for the project',
   choices: ['MIT Lincense', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'none']
   },
   {
   type: 'input',
   name: 'contributing',
   message: 'How can others contribute to this project?'
   },
   {
   type: 'input',
   name: 'tests',
   message: 'Provide examples of how to run the application.'
   },
   {
   typr: 'input',
   name: 'questions',
   message: 'How can people reach you if they have questions?'
   }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
