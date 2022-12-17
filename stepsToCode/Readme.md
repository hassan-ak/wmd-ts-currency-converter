# Steps to code CLI Currency Converter

### 1. Project initiation

- Create and navigate to project directory using following commands

  ```cmd
  mkdir wmd-ts-currency-converter
  cd wmd-ts-currency-converter
  ```

- Intilize a node project in the newly created directory using following command, this will create a `package.json` file.

  ```cmd
  npm init -y
  ```

- Create a `tsconfig.json` file to define typescript configration using following command

  ```cmd
  tsc --init
  ```

- Create two more directories to be used as root and out directory using

  ```cmd
  mkdir src
  mkdir dist
  ```

- Update `tsconfig.json` to include above directories and also change module and moduleResolution

  ```json
  "target": "ES2022",
  "module": "NodeNext",
  "rootDir": "./src",
  "moduleResolution": "NodeNext",
  "outDir": "./dist",
  ```

- Update `package.json` and add following content to it

  ```json
  "main": "./dist/index.js",
  "type": "module",
  "scripts": {
      "start": "node ."
  },
  "bin": "./dist/index.js",
  ```

### 2. Install dependencies

- Multiple third-party packages to be used in this project so install different dependacies using following commands

  ```cmd
  npm install ora
  npm install chalk
  npm install fuzzy
  npm install inquirer
  npm install cli-table
  npm install node-fetch
  npm install inquirer-autocomplete-prompt
  ```

- Install types for the installed dependancies for the development using following set of commands

  ```cmd
  npm install --save-dev @types/ora
  npm install --save-dev @types/chalk
  npm install --save-dev @types/inquirer
  npm install --save-dev @types/cli-table
  npm install --save-dev @types/node-fetch
  npm install --save-dev @types/inquirer-autocomplete-prompt
  ```

- After installation `package.json` file will be updated and `package-lock.json` file along with `node_modules` folder will be created. We don't need git to track newly created files and folders so create a `.gitignore` file with the following content

  ```gitignore
  node_modules
  package-lock.json
  ```

### 3. Create Hello World

- To check if everything is setup properly first create a hello world. All the typescript files should be created in `./src` directory. Create a `index.ts` file with the following content

  ```ts
  console.log('Hello World!');
  ```

- To transpile the code to javascript we can use any of the following command, one thing to rember we need to use first command every time we make a change and the second one automatically create js files on every change. So we are going to use the latter one. All the js files will be stored in the `./dist` folder as we declared in our `tsconfig.json` file earlier.

  ```cmd
  tsc
  tsc -w
  ```

- to run the js file we can use any of the following commands

  ```cmd
  node .\dist\index.js
  node .
  npm start
  ```

- If everything is right we will have a console output.

### 4. Create welcome message

- Create `welcome.ts` will the following content to display welcome message / app title to the user

  ```ts
  import chalk from 'chalk';
  async function wellCome(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      console.log('💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰');
      console.log(`💰💰💰${chalk.bgWhite('                    ')}💰💰💰`);
      console.log(`💰💰💰${chalk.inverse(' Currency Converter ')}💰💰💰`);
      console.log(`💰💰💰${chalk.bgWhite('                    ')}💰💰💰`);
      console.log('💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰\n');
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  }
  export { wellCome };
  ```

### 5. Create instructions

- Create `instructions.ts` with the following content to display information about the app

  ```ts
  async function instructions(): Promise<boolean> {
    console.log('Instructions : ');
    console.log(
      '\tThis app provide exchange rate for the given pair of currencies'
    );
    console.log('\tExchange rates are refreshed every 24 hours\n');
    console.log('User Inputs');
    console.log('\tSelect currency pair you want to find exchange rate of');
    console.log('\tEnter amount\n');
    console.log('App Output');
    console.log('\tLatest exchange rate\n');
    return await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  }
  export { instructions };
  ```

### 6. Ask user to play or quit

- Create `askToUse.ts` with the following content to ask user to use the app or quit with out using

  ```ts
  import inquirer from 'inquirer';
  async function askToUse(): Promise<string> {
    enum Commands {
      Use = 'Use App',
      Quit = 'Quit App',
    }
    const startAppC = await inquirer.prompt([
      {
        message: 'Do you wan to continue ? ',
        name: 'startApp',
        type: 'list',
        choices: Object.values(Commands),
      },
    ]);
    return startAppC['startApp'];
  }
  export { askToUse };
  ```

### 7. Create staring animation

- Create `startApp.ts` with the following content to display an animation before starting or re-running the app

  ```ts
  import ora, { Ora } from 'ora';
  import chalk from 'chalk';
  function startApp(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      console.log('');
      const spinner: Ora = ora(chalk.green(' Starting App '));
      spinner.spinner = 'earth';
      spinner.start();
      setTimeout(() => {
        spinner.stop();
        console.clear();
        resolve(true);
      }, 1500);
    });
  }
  export { startApp };
  ```

### 8. Create closing message

- Create `quitApp.ts` to display a message along with animation before qutting the app

  ```ts
  import ora, { Ora } from 'ora';
  import chalk from 'chalk';
  function quitApp(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      console.log('');
      const spinner: Ora = ora(chalk.magenta(' See You Again '));
      spinner.spinner = 'material';
      spinner.color = 'magenta';
      spinner.start();
      setTimeout(() => {
        spinner.color = 'red';
        spinner.text = chalk.bgRed(' Closing App ! ');
      }, 1500);
      setTimeout(() => {
        spinner.stop();
        console.clear();
        resolve(true);
      }, 3000);
    });
  }
  export { quitApp };
  ```

### 9. Create Currencies list

- Create `currencies.ts` to create a list of all currencies to be avaialable in the app. Currencies list is available at [exchangerate-api](https://www.exchangerate-api.com/docs/supported-currencies)

  ```ts
  let currencies: string[] = [
    'AED - UAE Dirham - United Arab Emirates',
    'AFN - Afghan Afghani - Afghanistan',
    'ALL - Albanian Lek - Albania',
    ...
    ...
    ....
    'ZAR - South African Rand - South Africa',
    'ZMW - Zambian Kwacha - Zambia',
    'ZWL - Zimbabwean Dollar - Zimbabwe',
  ];
  export { currencies };
  ```

### 10. Ask user for a currency pair

- Create `askInput.ts` to ask user for currency pair and amount

  ```ts
  import fuzzy from 'fuzzy';
  import inquirer from 'inquirer';
  import { currencies } from './currencies.js';
  import inquirerPrompt from 'inquirer-autocomplete-prompt';
  inquirer.registerPrompt('autocomplete', inquirerPrompt);
  function searchCurrency(answers: any, input = '') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fuzzy.filter(input, currencies).map((el) => el.original));
      }, Math.random() * 470 + 30);
    });
  }
  interface UserInput {
    countryFrom: string;
    countryTo: string;
    amount: number;
  }
  async function askInput(): Promise<UserInput> {
    let userInputs: UserInput = await inquirer.prompt([
      {
        type: 'autocomplete',
        name: 'countryFrom',
        suggestOnly: true,
        message: 'Currency From : ',
        searchText: 'We are searching the internet for you!',
        emptyText: 'Nothing found!',
        source: searchCurrency,
        pageSize: 4,
        validate(val) {
          return currencies.indexOf(val) >= 0 ? true : 'Type something!';
        },
      },
      {
        type: 'autocomplete',
        name: 'countryTo',
        suggestOnly: true,
        message: 'Currency To : ',
        searchText: 'We are searching the internet for you!',
        emptyText: 'Nothing found!',
        source: searchCurrency,
        pageSize: 4,
        validate(val) {
          return currencies.indexOf(val) >= 0 ? true : 'Type something!';
        },
      },
      {
        type: 'number',
        name: 'amount',
        message: 'Amount : ',
        default: 0,
      },
    ]);
    return userInputs;
  }
  export { askInput, UserInput };
  ```

### 11. Get API result

- Create `getResults.ts` to call API with get method and get conversion rates based on user input

  ```ts
  import fetch from 'node-fetch';
  import { UserInput } from './askInputs.js';
  type ApiResponse = {
    time_last_update_utc: string;
    time_next_update_utc: string;
    base_code: string;
    conversion_rates: { [c: string]: number };
  };
  async function getResults(
    userInputs: UserInput
  ): Promise<ApiResponse | 'error'> {
    let baseCurrency = userInputs.countryFrom.split(' - ')[0];
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/c35e8131f3d4b8d224198c79/latest/${baseCurrency}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      );
      if (!response.ok) {
        return 'error';
      }
      let result = (await response.json()) as ApiResponse;
      return result;
    } catch (error) {
      return 'error';
    }
  }
  export { getResults, ApiResponse };
  ```

### 12. Analyse input api response to get final result

- create `finalizeResults.ts` to analyse user input and api response to form final result

  ```ts
  import { UserInput } from './askInputs.js';
  import { ApiResponse } from './getResults.js';
  interface FinalResult {
    base: string;
    final: string;
    base_amount: number;
    final_amount: number;
    last_update: string;
    next_update: string;
  }
  async function finalizeResults(
    apiResults: ApiResponse,
    userInputs: UserInput
  ): Promise<FinalResult> {
    let finalResult: FinalResult = {
      base: `${userInputs.countryFrom.split(' - ')[1]} (${
        userInputs.countryFrom.split(' - ')[0]
      })`,
      final: `${userInputs.countryTo.split(' - ')[1]} (${
        userInputs.countryTo.split(' - ')[0]
      })`,
      base_amount: userInputs.amount,
      final_amount:
        apiResults.conversion_rates[userInputs.countryTo.split(' - ')[0]] *
        userInputs.amount,
      last_update: apiResults.time_last_update_utc.slice(0, 16),
      next_update: apiResults.time_next_update_utc.slice(0, 16),
    };
    return finalResult;
  }
  export { finalizeResults, FinalResult };
  ```

### 13. Create table to display results

- create `resultTable.ts` to display results in the form of a table

  ```ts
  import Table from 'cli-table';
  import { FinalResult } from './finalizeResults.js';
  async function showResults(results: FinalResult) {
    console.log('');
    return new Promise((resolve, reject) => {
      var operatorsTable = new Table({
        head: ['Conversion Results'],
      });
      let operations: string[][] = [
        [`last Updated at : ${results.last_update}`],
        [`Next Update at : ${results.next_update}`],
        [`${results.base} : ${results.base_amount}`],
        [`${results.final} : ${results.final_amount}`],
      ];
      operatorsTable.push(...operations);
      console.log(operatorsTable.toString());
      setTimeout(() => {
        console.log(' ');
        resolve(true);
      }, 1000);
    });
  }
  export { showResults };
  ```
