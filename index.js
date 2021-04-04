// Title
// Description
// Table of Contents (contains corresponding sections)
// Installation (installation instructions)
// Usage (usage information)
// License (badge added near the top of the readme,explains which license the application is covered under)
// Contribution (contribution guidelines)
// Tests (test instructions)
// Questions (get github username, email address-how to reach me with additional questions)

const inquirer = require('inquirer');
const fs = require('fs'); 
const generateReadme = require("./utils/generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>{
return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description for your project?',
    },
    {
      type: 'editor',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'editor',
      name: 'usage',
      message: 'What are the usage instructions your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose your license:',
      choices:[
          "Apache license 2.0",
          "BSD 2-clause License",
          "BSD 3-clause License",
          "BSD 4-clause License",
          "GNU General Public License v3.0",
          "MIT License",
          "Mozilla Public License 2.0",
          "University of Illinois/NCSA Open Source License",
          "Unlicense",
      ],
      default: "Unlicense"
    },
    {
      type: 'editor',
      name: 'contributor',
      message: 'Who are contributors for your project? List GitHub usernames: ',
    },
    {
      type: 'editor',
      name: 'test',
      message: 'What are the steps to test your project?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ]);
}

  const init = () => {
    promptUser()
      .then((response) => writeFileAsync('README.md', generateReadme(response)))
      .then(() => console.log('Successfully wrote to markdown file!'))
      .catch((err) => console.error(err));
  };
  
  init();