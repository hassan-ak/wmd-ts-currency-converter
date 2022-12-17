// Ask user to use or quit the app
import inquirer from 'inquirer';
/**********************************************************************/
// Ask user for choices if to use or quit app
// return the answer
async function askToReuse() {
    let Commands;
    (function (Commands) {
        Commands["Repeat"] = "Repeat conversion for same pair";
        Commands["Reuse"] = "Reuse App for new Conversion";
        Commands["Quit"] = "Quit App";
    })(Commands || (Commands = {}));
    const resuseAppC = await inquirer.prompt([
        {
            message: 'What You want to do next ? ',
            name: 'resuseApp',
            type: 'list',
            choices: Object.values(Commands),
        },
    ]);
    return resuseAppC['resuseApp'];
}
/**********************************************************************/
export { askToReuse };
