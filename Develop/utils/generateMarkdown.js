const fs = require('fs');
const data = require('../index.js');

// function to generate markdown for README
function generateMarkdown(data) {

  // section that adds the badge depending on what license is chosen
  // and adds a link to more information about the license in the 'license' section
  let badgeChoice = `${data.license}`;
  let licenseLink = '';

  if (badgeChoice === 'MIT License') {
    badgeChoice = 'https://img.shields.io/badge/License-MIT-yellow.svg';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };

  if (badgeChoice === 'GNU GPLv3') {
    badgeChoice = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };

  if (badgeChoice === 'Mozilla Public License 2.0') {
    badgeChoice = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };

  if (badgeChoice === 'Apache 2.0 License') {
    badgeChoice = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };

  if (badgeChoice === 'Boost Software License 1.0') {
    badgeChoice = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };

  if (badgeChoice === 'The Unlicense') {
    badgeChoice = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };

  return `
  
  # ${data.title}

  ![badge](${badgeChoice})

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
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

  For more information go to: [${data.license}](${licenseLink})

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
