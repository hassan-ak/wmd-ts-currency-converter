// Ask user for currency pair

import fuzzy from 'fuzzy';
import inquirer from 'inquirer';
import { currencies } from './currencies.js';
import inquirerPrompt from 'inquirer-autocomplete-prompt';

/**************************************************************************/
// Configure autocomplete with inquirer
inquirer.registerPrompt('autocomplete', inquirerPrompt);

/**************************************************************************/
// Filter with fuzzy logic to loop over the currencies and select required one
function searchCurrency(answers: any, input = '') {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fuzzy.filter(input, currencies).map((el) => el.original));
    }, Math.random() * 470 + 30);
  });
}

/**************************************************************************/
// user input type defination
interface UserInput {
  countryFrom: string;
  countryTo: string;
  amount: number;
}

/**************************************************************************/
// use prompt to ask user for currencies
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

/**************************************************************************/
export { askInput, UserInput };
