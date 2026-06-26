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
    console.log(newYork);
} else if (cityName === "phoenix") {
        console.log(phoenix);
    } else if (cityName === "kansas city") {
        console.log(kansasCity);
    } else if (cityName === "dayton") {
        console.log(dayton);
    } else {
        console.log(`${cityName} not found.`);
    }


// console.log(chalk.bold.yellow(`Weather Summary: ${cityName}`));






