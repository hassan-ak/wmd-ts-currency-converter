// Get exchange rated from internet
import fetch from 'node-fetch';
/**********************************************************************/
// call API with GET method
async function getResults(userInputs) {
    // get from currency abrevation from usr input
    let baseCurrency = userInputs.countryFrom.split(' - ')[0];
    // try catch on fetch api
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/c35e8131f3d4b8d224198c79/latest/${baseCurrency}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });
        if (!response.ok) {
            return 'error';
        }
        let result = (await response.json());
        return result;
    }
    catch (error) {
        return 'error';
    }
}
/**********************************************************************/
export { getResults };
