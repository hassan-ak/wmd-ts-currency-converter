// Welcome Message

import chalk from 'chalk';

/**************************************************************************/
// function to display a welcme message / ASpp Title
// returns a promise which reslolves to true after waiting for some time
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

/**************************************************************************/
export { wellCome };
