import chalk from 'chalk';
import { formatTimeTicks } from '../utils'
import { ITheme } from '../yorker';

export class NYPDTheme implements ITheme {
    see(something: string, dateTime: Date) {
        const dateTimeFormatted = dateTime.toLocaleTimeString();
        this.print(
            '🚔 ' + chalk.yellow(something),
            ('🚔 ' + something).length,
            chalk.gray.dim(dateTimeFormatted),
            dateTimeFormatted.length
        );
    }

    say(something: string, dateTime: Date, ms: number) {
        const time = formatTimeTicks(ms);
        this.print(
            '🚕 ' + chalk.green(something), 
            ('🚕 ' + (something)).length, 
            chalk.gray.dim(time),
            time.length
        );
    }

    yell(error: Error, something: string, dateTime: Date, ms: number) {
        const time = formatTimeTicks(ms);
        this.print(
            '🚓 🚑 🚒 ' + chalk.red(something), 
            ('🚓 🚑 🚒 ' + something).length, 
            chalk.gray.dim(time),
            time.length
        );
        console.error(error);
    }

    private print(left: string, leftLen: number, right: string, rightLen: number) {
        console.info(this.format(left, leftLen, right, rightLen));
    }

    private width(): number {
        return process.stdout.columns;
    }
    
    private format(left: string, leftLen: number, right: string, rightLen: number): string {
        const maxLen = this.width();
        const leftLength = leftLen;
        const exactLeftLen = maxLen - rightLen;
        if (exactLeftLen < 0 || leftLength > exactLeftLen) {
            // print in two lines:
            return `${left}\n${right}`;
        }
    
        const spaces = new Array<string>(exactLeftLen - leftLength);
        return left + spaces.fill(' ').join('') + right;
    }
}
