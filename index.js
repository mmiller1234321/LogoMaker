const Triangle = require('./Assets/lib/shapes').Triangle;
const Square = require('./Assets/lib/shapes').Square;
const Circle = require('./Assets/lib/shapes').Circle;
const inquirer = require('inquirer');
const fs = require('fs');
//inquire prompts for logo, text color, and shape

inquirer.prompt ([{

  type: 'input',
  message: 'Enter 3 characters for the logo',
  name: 'logo',

  validate:function(input){
    if(input.length === 3){
      return true;
    }
    else{
      return 'Please enter 3 characters';
    }
  }

}, // Added a comma here

{
  type:'input',
  message: 'Enter text color for logo',
  name: 'textColor',
}, // Added a comma here

{
  type: `input`,
  message: `Enter the shape's color for your logo`,
  name: `shapeColor`,
},
]).then(function(answers){
  if(answers.shape === 'triangle'){
    let triangle = new Triangle(answers.logo, answers.textColor, answers.shapeColor);
    fs.writeFile('logo.svg', triangle.render(), function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log('Generated lovo.svg');
      }
    });
  } else if (answers.shape === 'square'){
    let square = new Square(answers.logo, answers.textColor, answers.shapeColor);
    fs.writeFile('logo.svg', square.render(), function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log('Generated lovo.svg');
      }
    });
  } else if (answers.shape === 'circle'){
    let circle = new Circle(answers.logo, answers.textColor, answers.shapeColor);
    fs.writeFile('logo.svg', circle.render(), function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log('Generated lovo.svg');
      }
    });
  }

})
