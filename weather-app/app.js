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
        console.log(chalk.bold.green(`City Name: ${phoenix.name}`));
        console.log(chalk.bold.green(`Temperature: ${phoenix.temp}`));
        console.log(chalk.bold.green(`Weather Description: ${phoenix.description}`));
        console.log(chalk.bold.green(`Chance of Percipitation: ${phoenix.percipitation}`));
    } else if (cityName === "kansas city") {
        console.log(chalk.bold.yellow(`City Name: ${kansasCity.name}`));
        console.log(chalk.bold.yellow(`Temperature: ${kansasCity.temp}`));
        console.log(chalk.bold.yellow(`Weather Description: ${kansasCity.description}`));
        console.log(chalk.bold.yellow(`Chance of Percipitation: ${kansasCity.percipitation}`));
    } else if (cityName === "dayton") {
        console.log(chalk.bold.red(`City Name: ${dayton.name}`));
        console.log(chalk.bold.red(`Temperature: ${dayton.temp}`));
        console.log(chalk.bold.red(`Weather Description: ${dayton.description}`));
        console.log(chalk.bold.red(`Chance of Percipitation: ${dayton.percipitation}`));
    } else {
        console.log(`${cityName} not found.`);
    }







