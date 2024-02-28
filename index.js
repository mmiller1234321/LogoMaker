// Importing the shape classes and required modules
const Triangle = require('./Assets/lib/shapes').Triangle;
const Square = require('./Assets/lib/shapes').Square;
const Circle = require('./Assets/lib/shapes').Circle;
const inquirer = require('inquirer');
const fs = require('fs');

// Inquirer prompts for user input
inquirer.prompt([
    {
        type: `input`,
        message: `Enter 3 characters for your logo`,
        name: `logo`,
        // Validate method checks if the input is 3 characters or less
        validate: function (input) {
            if (input.length <= 3) {
                return true;
            } else {
                return "Logo must be 3 characters or less.";
            }
        }
    },
    {
        type: `input`,
        message: `Enter the text color for your logo`,
        name: `textColor`
    },
    {
        type: `list`,
        message: `Choose a shape for your logo`,
        choices: [`Triangle`, `Square`, `Circle`],
        name: `shape`
    },
    {
        type: `input`,
        message: `Enter the shape's color for your logo`,
        name: `shapeColor`
    },
])
.then(function (answers) {
    // Based on the chosen shape, create a new object and write the SVG to file
    if (answers.shape === `Triangle`) {
        let triangle = new Triangle(answers.logo, answers.textColor, answers.shapeColor);

        fs.writeFile(`logo.svg`, triangle.render(), function (err) {
            err ? console.log(err) : console.log(`Generated logo.svg!`)
        })
        
    } else if (answers.shape === `Square`) {
        let square = new Square(answers.logo, answers.textColor, answers.shapeColor);

        fs.writeFile(`logo.svg`, square.render(), function (err) {
            err ? console.log(err) : console.log(`Generated logo.svg!`)
        })

    } else {
        let circle = new Circle(answers.logo, answers.textColor, answers.shapeColor);

        fs.writeFile(`logo.svg`, circle.render(), function (err) {
            err ? console.log(err) : console.log(`Generated logo.svg!`)
        })
    }
});
