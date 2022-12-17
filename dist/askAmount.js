// Ask user for amount
import inquirer from 'inquirer';
/**************************************************************************/
// use prompt to ask user for currencies
async function askInputAmount(parm) {
    console.log('');
    let userInputsAmount = await inquirer.prompt([
        {
            type: 'number',
            name: 'amount',
            message: `Enter Amount in  ${parm}: `,
            default: 0,
        },
    ]);
    return userInputsAmount['amount'];
}
/**************************************************************************/
export { askInputAmount };
