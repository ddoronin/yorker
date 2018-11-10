import chalk from 'chalk';
import { formatTimeTicks } from '../utils'
import { Theme } from './theme';

const colorHex = () => Math.floor(Math.random() * 16777215).toString(16);

export class NYPDTheme extends Theme {
    see(something: string, dateTime: Date, context: Map<string, any>) {
        context.set('color', colorHex());
        const dateTimeFormatted = dateTime.toLocaleTimeString();
        this.print(
            () => chalk.hex(context.get('color'))(something),
            () => chalk.gray.dim(dateTimeFormatted)
        );
    }

    say(something: string, dateTime: Date, ms: number, context: Map<string, any>) {
        const time = formatTimeTicks(ms);
        this.print(
            () => chalk.green(' ✔ ') + chalk.hex(context.get('color'))(something), 
            () => chalk.gray.dim(time)
        );
    }

    yell(error: Error, something: string, dateTime: Date, ms: number, context: Map<string, any>) {
        const time = formatTimeTicks(ms);
        this.print(
            () => chalk.red(' ✘ ') + chalk.hex(context.get('color'))(something), 
            () => chalk.gray.dim(time)
        );
        console.error(error);
    }
}
