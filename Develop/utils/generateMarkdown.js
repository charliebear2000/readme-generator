const fs = require('fs');
const data = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credists)
  - [License](#license)
  - [Contributing](#contrbuting)
  - [Tests](#test)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ## License:
  ${data.license}

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.test}

  ## Questions:
  - If you have questions, contact me through:

  GitHub: [${data.userName}](https://github.com/${data.userName})
  email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
