// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[Apache](https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "[GNU](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";

  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `## License
   This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
  else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License] (#license)
  * [Contribution] (#contribution)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.test}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.github}


`;
}

module.exports = generateMarkdown;
