#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Welcome Message
console.log("\n\Welcome To \'CodeWithAyesha\' - CLI Simple Calculator\n");

//Asking Questions from users through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter SecondNumber", type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perfome Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);

//Conditional Statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}


