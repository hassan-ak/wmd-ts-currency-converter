#!/usr/bin/env node

// Currency Converter

import chalk from 'chalk';
import { quitApp } from './quitApp.js';
import { wellCome } from './welcome.js';
import { askToUse } from './askToUse.js';
import { startApp } from './startApp.js';
import { askInput } from './askInputs.js';
import { askToReuse } from './askReuse.js';
import { getResults } from './getResults.js';
import { showResults } from './showResults.js';
import { askInputAmount } from './askAmount.js';
import { instructions } from './instructions.js';
import { finalizeResults } from './finalizeResults.js';

/**************************************************************************/
// Call all functions in a sequence
async function currencyConverter() {
  // clear console
  console.clear();
  // welcome message
  await wellCome();
  // instrucions for using app
  await instructions();
  let useApp = await askToUse();
  if (useApp === 'Use App') {
    // start App Animation
    await startApp();
    // Ask for usr inputs
    let repeat = false;
    do {
      console.clear();
      // welcome message
      await wellCome();
      // Ask usr for currency pair
      let userInputs = await askInput();
      // call api and get results
      let results = await getResults(userInputs);
      // based on APi result console error msg or continue with the app
      if (results === 'error') {
        // Console msg on eeror and quit app
        console.log(chalk.bgRed('\nThere is some error, kindly try Again.'));
        repeat = false;
        await quitApp();
      } else {
        let reuse = false;
        do {
          // get final result
          let finalResult = await finalizeResults(results, userInputs);
          // Show results
          await showResults(finalResult);
          // Ask for reuse
          let reUs = await askToReuse();
          // if chose to reuse for same pair ask amount and repeat
          if (reUs === 'Repeat conversion for same pair') {
            reuse = true;
            userInputs.amount = await askInputAmount(finalResult.base);
          } else if (reUs === 'Reuse App for new Conversion') {
            reuse = false;
            repeat = true;
          } else {
            reuse = false;
            repeat = false;
            await quitApp();
          }
        } while (reuse);
      }
    } while (repeat);
  } else {
    // Quit App
    await quitApp();
  }
}

/**************************************************************************/
currencyConverter();
