import chalk from 'chalk';
import { formatTimeTicks } from '../utils'
import { Theme } from './theme';

export class NYPDTheme extends Theme {
    see(something: string, dateTime: Date) {
        const dateTimeFormatted = dateTime.toLocaleTimeString();
        this.print(
            () => chalk.yellow(something),
            () => chalk.gray.dim(dateTimeFormatted)
        );
    }

    say(something: string, dateTime: Date, ms: number) {
        const time = formatTimeTicks(ms);
        this.print(
            () => chalk.green(something), 
            () => chalk.gray.dim(time)
        );
    }

    yell(error: Error, something: string, dateTime: Date, ms: number) {
        const time = formatTimeTicks(ms);
        this.print(
            () => chalk.red(something), 
            () => chalk.gray.dim(time)
        );
        console.error(error);
    }
}
