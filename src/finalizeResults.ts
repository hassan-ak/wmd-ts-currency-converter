// Finalize results based on userInput and data from API

import { UserInput } from './askInputs.js';
import { ApiResponse } from './getResults.js';

/**********************************************************************/
// Final result type defination
interface FinalResult {
  base: string;
  final: string;
  base_amount: number;
  final_amount: number;
  last_update: string;
  next_update: string;
}

/**********************************************************************/
// Finalize results
// Response back with the results
async function finalizeResults(
  apiResults: ApiResponse,
  userInputs: UserInput
): Promise<FinalResult> {
  let finalResult: FinalResult = {
    // split user input and save currency one in the following format
    // UAE Dirham (AED)
    base: `${userInputs.countryFrom.split(' - ')[1]} (${
      userInputs.countryFrom.split(' - ')[0]
    })`,
    // split user input and save currency two in the following format
    // UAE Dirham (AED)
    final: `${userInputs.countryTo.split(' - ')[1]} (${
      userInputs.countryTo.split(' - ')[0]
    })`,
    // get amount from user input
    base_amount: userInputs.amount,
    // get final amount by multiplying given amount and exchange rate
    final_amount:
      apiResults.conversion_rates[userInputs.countryTo.split(' - ')[0]] *
      userInputs.amount,
    // last and next update time from api response
    last_update: apiResults.time_last_update_utc.slice(0, 16),
    next_update: apiResults.time_next_update_utc.slice(0, 16),
  };
  return finalResult;
}

/**********************************************************************/
export { finalizeResults, FinalResult };
