const inquirer = require("inquirer");
const fs = require("fs"); 
const util = require("util");
const GenerateReadme = require("./util/GenerateReadme");

inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description about your project:',
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
          "Unlicensed",
      ],
      default: "Unlicensed"
    },
    {
      type: 'editor',
      name: 'contributor',
      message: 'Who are contributors for your project? List GitHub usernames: ',
    },
    {
      type: 'editor',
      name: 'contributing_guidelines',
      message: 'Are there any contributing guidelines? If so, please add the information:',
    },
    {
      type: 'editor',
      name: 'test',
      message: 'What are the steps to test your project?',
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
  ])
  .then(response => generateReadME(response))
  .catch((err) => console.error(err));

  const generateReadME = (response) =>{

    const generateContent = new GenerateReadme(response);
    fs.writeFileSync('test.md', generateContent.readme);
    console.log("Success! README.md was created");

  }