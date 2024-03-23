#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess the number b/w 1 to 5",
    },
]);
console.log(randomNumber);
if (answer.userGuessedNumber === randomNumber) {
    console.log(`Congrats, you guessed right number.`);
}
else {
    console.log(`you guessed wrong number`);
}
