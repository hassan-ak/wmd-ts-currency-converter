// Display results in a table
import Table from 'cli-table';
/**************************************************************************/
// Function to display a table of results
async function showResults(results) {
    console.log('');
    return new Promise((resolve, reject) => {
        var operatorsTable = new Table({
            head: ['Conversion Results'],
        });
        let operations = [
            [`Last Updated at : ${results.last_update}`],
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
/**************************************************************************/
export { showResults };
