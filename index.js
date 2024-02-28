const Triangle = require('./Assets/lib/shapes').Triangle;
const Square = require('./Assets/lib/shapes').Square;
const Circle = require('./Assets/lib/shapes').Circle;
const inquirer = require('inquirer');
const fs = require('fs');
//imports for the 3 shape classes, inquirer for the prompt, and fs for writing the logo.svg file.

//inquirer prompts that ask for the logo, text color, shape, and shape color in that order.
inquirer.prompt([
    {
        type: `input`,
        message: `Enter 3 characters for your logo`,
        name: `logo`,
        //validate method checks if the input for the inquirer prompt is 3 characters or less before moving on to the next prompt.
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
    //if statements that check for the shape. Then creates a new object based on what shape it is. Finally using the render method it writes the svg to file.
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