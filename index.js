#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random()*5+1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: chalk.blue("please guess the number b/w 1 to 5"),
  },
]);
console.log(randomNumber);
if (answer.userGuessedNumber === randomNumber) {
  console.log(chalk.green(`Congrats, you guessed right number.`));
} else {
  console.log(chalk.red(`You guessed wrong number`));
}
