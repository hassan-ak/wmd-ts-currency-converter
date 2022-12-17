// Get exchange rated from internet

import fetch from 'node-fetch';
import { UserInput } from './askInputs.js';

/**********************************************************************/
// Send get request to api
// return error or response
type ApiResponse = {
  time_last_update_utc: string;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: { [c: string]: number };
};

/**********************************************************************/
// call API with GET method
async function getResults(
  userInputs: UserInput
): Promise<ApiResponse | 'error'> {
  // get from currency abrevation from usr input
  let baseCurrency = userInputs.countryFrom.split(' - ')[0];
  // try catch on fetch api
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

/**********************************************************************/
export { getResults, ApiResponse };
