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
    console.log(chalk.bold.bgRed(`Temperature: ${newYork.temp}`));
    console.log(chalk.bold.cyan(`Weather Description: ${newYork.description}`));
    console.log(chalk.bold.yellow(`Chance of Percipitation: ${newYork.percipitation}`));
} else if (cityName === "phoenix") {
        console.log(chalk.bold.blue(`City Name: ${phoenix.name}`));
        console.log(chalk.bold.bgRed(`Temperature: ${phoenix.temp}`));
        console.log(chalk.bold.cyan(`Weather Description: ${phoenix.description}`));
        console.log(chalk.bold.green(`Chance of Percipitation: ${phoenix.percipitation}`));
    } else if (cityName === "kansas city") {
        console.log(chalk.bold.blue(`City Name: ${kansasCity.name}`));
        console.log(chalk.bold.bgRed(`Temperature: ${kansasCity.temp}`));
        console.log(chalk.bold.cyan(`Weather Description: ${kansasCity.description}`));
        console.log(chalk.bold.yellow(`Chance of Percipitation: ${kansasCity.percipitation}`));
    } else if (cityName === "dayton") {
        console.log(chalk.bold.blue(`City Name: ${dayton.name}`));
        console.log(chalk.bold.bgRed(`Temperature: ${dayton.temp}`));
        console.log(chalk.bold.cyan(`Weather Description: ${dayton.description}`));
        console.log(chalk.bold.yellow(`Chance of Percipitation: ${dayton.percipitation}`));
    } else {
        console.log(`${cityName} not found.`);
    }


// 1.Purpose of package.json:
// package.json is a blueprint of our project, it provides the key information of our application 
// and manages the external modules yargs and chalk@4.1.2(dependencies) of our project.
// when we initialise node js with command in our terminal with "npm init -y" a json file is created with name package.json 
// the main purpose of this file is to: 
// 1.Describe the project (name, version, metadata).
// 2.keep track of dependencies(yargs, chalk) and their versions.
// 3.speify scripts for automating tasks.
// 4.ensure consist builds across environments.
// This package.json file is important because whenever we are installing "node module" npm updates the "dependencies" section in package.json file.
// This ensures that whoever clones the project that is manily in collaboration it makes sure that who ever runs "npm install" in their own terminal
// it downloads the Exact same modules to minimize conflicts.


// 2.Why node_modules should not be included in version control:
// Whenever we install yargs chalks dependencies for our project the node_module file will be automatically created which consists of source code files 
// which support the environtment but they in thousands in number so when we try to commit it git it needs a lot of memory to store those files and 
// the version control creates bloat and can cause conflicts. In order to avoid that massive storage which is not necessary we create .gitignore file where we mention 
// to ignore node_modules folder during commit.



// 3.How npm install reinstalls dependencies and its importance in collaborative projects: 
// when we remove the node_module folder of our project which supports our application and again when we try to run command "npm install" in our terminal 
// it creates the new "node_module" folder where npm reads our existing "package.json" file  of our project /application and it fetches the exact same data of 
// our dependecies and their exact versions. It directly downloads all packages into our newly created node_modules folder which makes our project to run smoothly 
// without any error. Its like new node_module folder but with same exact files of our deleted old node_module which checks json file of the project before installing and 
// make sure to create those dependencies files in new node_module folder.






