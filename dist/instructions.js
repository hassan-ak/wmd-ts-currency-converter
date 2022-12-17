// Instructions
/**************************************************************************/
// console instruction
async function instructions() {
    console.log('Instructions : ');
    console.log('\tThis app provide exchange rate for the given pair of currencies');
    console.log('\tExchange rates are refreshed every 24 hours\n');
    console.log('User Inputs');
    console.log('\tSelect currency pair you want to find exchange rate of');
    console.log('\tEnter amount\n');
    console.log('App Output');
    console.log('\tLatest exchange rate\n');
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 500);
    });
}
/**************************************************************************/
export { instructions };
