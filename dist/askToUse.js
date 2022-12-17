// Ask user to use or quit the app
import inquirer from 'inquirer';
/**********************************************************************/
// Ask user for choices if to use or quit app
// return user Input as response
async function askToUse() {
    let Commands;
    (function (Commands) {
        Commands["Use"] = "Use App";
        Commands["Quit"] = "Quit App";
    })(Commands || (Commands = {}));
    const startAppC = await inquirer.prompt([
        {
            message: 'Do you wan to continue ? ',
            name: 'startApp',
            type: 'list',
            choices: Object.values(Commands),
        },
    ]);
    return startAppC['startApp'];
}
/**********************************************************************/
export { askToUse };
