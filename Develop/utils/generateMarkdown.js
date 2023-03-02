// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None') {
    return `![badge](https://img.shields.io/badge/license-${license}-green)`
  } else {
    return ' '
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${license}](https://choosealicense.com/licenses/${license})`
    } else {
      return ' '
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## [License](#table-of-contents)
    The application uses the following license:
    ${renderLicenseLink(license)} `;
    } else {
      return ' ';
    }
   }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
    ${data.description}

  Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contribution)
    * [Tests](#test)
    * [Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    ${renderLicenseSection(data.license)}

  ## Contributing
    ${data.contribution}

  ## Tests
    ${data.test}

  ## Questions
    ${data.username}
    ${data.email}
`;
}

module.exports = generateMarkdown;
