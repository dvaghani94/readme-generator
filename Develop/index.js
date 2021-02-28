// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide names of collaborators and technologies used during the creation of the project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license is your project using?',
        choices: ['MIT', 'APACHE', 'GNU General Public', 'Boost Software'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'Provide project features here.'
    }, 
    {
        type: 'input',
        name: 'contribute',
        message: 'How would other developers be able to contirbute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can other developers test the application?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('generating your readME');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses}))
    })
}

// Function call to initialize app
init();
