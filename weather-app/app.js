// import yargs from "yargs";
// import { hideBin } from "yargs/helpers";
// import chalk from "chalk";

const yargs = require('yargs');
const chalk = require('chalk');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .option('city', {
    describe: 'City name used to retrieve weather information',
    demandOption: true,
    type: "string"
  })
  .help()
  .argv;

class CityData {
    constructor(name, temp, description, percipitation) {
    this.name = name;
    this.temp = temp;
    this.description = description;
    this.percipitation = percipitation;
}}


let newYork = new CityData("New York",75,"Gloomy","15%");
let phoenix = new CityData("Phoenix",98,"Sunny, dry","0%");
let kansasCity = new CityData("Kansas City",87,"Partly cloudy, Humid","45%");
let dayton = new CityData("Dayton",78,"Partly cloudy, breezy","20%");

const cityName = argv.city.toLowerCase();

if (cityName === "new york") {
    console.log(chalk.bold.blue(`City Name: ${newYork.name}`));
    console.log(chalk.bold.blue(`Temperature: ${newYork.temp}`));
    console.log(chalk.bold.blue(`Weather Description: ${newYork.description}`));
    console.log(chalk.bold.blue(`Chance of Percipitation: ${newYork.percipitation}`));
} else if (cityName === "phoenix") {
        console.log(chalk.bold.green(phoenix.name));
        console.log(chalk.bold.green(phoenix.temp));
        console.log(chalk.bold.green(phoenix.description));
        console.log(chalk.bold.green(phoenix.percipitation));
    } else if (cityName === "kansas city") {
        console.log(chalk.bold.yellow(kansasCity.name));
        console.log(chalk.bold.yellow(kansasCity.temp));
        console.log(chalk.bold.yellow(kansasCity.description));
        console.log(chalk.bold.yellow(kansasCity.percipitation));
    } else if (cityName === "dayton") {
        console.log(chalk.bold.red(dayton.name));
        console.log(chalk.bold.red(dayton.temp));
        console.log(chalk.bold.red(dayton.description));
        console.log(chalk.bold.red(dayton.percipitation));
    } else {
        console.log(`${cityName} not found.`);
    }


// console.log(chalk.bold.yellow(`Weather Summary: ${cityName}`));






