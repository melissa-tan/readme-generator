class GenerateReadme {
    constructor (response) {
  

this.readme = 
`
#${response.title}

![license-badge](https://img.shields.io/badge/license-${response.license}-yellow)

## Description
${response.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## Contribution
#### Contributors
${response.contributors}

${response.contributing_guidelines}

## Tests
${response.test}

## Questions
If you have any questions or see any issues, please feel free to reach out!

Find me on github! [${response.github}](https://github.com/${response.github})
Email me at: ${response.email}
`;
}
}
module.exports = GenerateReadme;