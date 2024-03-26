#! /usr/bin/env node 
import inquirer from "inquirer";
//1) computer will generate random num done
//2)user input for guessing num done
//3)compare user input with coputer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congratulation you get right answer");
}
else {
    console.log("you guess wrong number");
}
