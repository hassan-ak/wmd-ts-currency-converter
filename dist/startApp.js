// Animation before starting the app
import chalk from 'chalk';
import ora from 'ora';
/**********************************************************************/
// Create an animation with Ora
// Display for some time
// Then stops
// Clear screen before procedding
function startApp() {
    return new Promise((resolve) => {
        console.log('');
        const spinner = ora(chalk.green(' Starting App '));
        spinner.spinner = 'earth';
        spinner.start();
        setTimeout(() => {
            spinner.stop();
            console.clear();
            resolve(true);
        }, 1500);
    });
}
/**********************************************************************/
export { startApp };
