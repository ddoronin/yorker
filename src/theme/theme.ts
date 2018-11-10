import chalk from 'chalk';
import { ITheme } from '../yorker';

export abstract class Theme implements ITheme {
    abstract see(something: string, dateTime: Date): void;
    abstract say(something: string, dateTime: Date, ms: number): void;
    abstract yell(error: Error, something: string, dateTime: Date, ms: number): void;

    protected print(left: () => string, right: () => string) {
        let leftLen = 0;
        let rightLen = 0;
        const { level } = chalk;
        if (chalk.level > 0) chalk.level = 0;
        try{
            leftLen = left().length;
            rightLen = right().length;
        }
        finally{
            if (chalk.level === 0) chalk.level = level;
        }
        console.info(this.format(left(), leftLen, right(), rightLen));
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
