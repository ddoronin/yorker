import { NYPDTheme } from './theme';

const NOOP = (msg: string, error?: Error): void => null;

export interface ITheme {
    see: (something: string, dateTime: Date) => void,
    say: (something: string, dateTime: Date, ms: number) => void,
    yell: (error: Error, something: string, dateTime: Date, ms: number) => void,
}

/**
 * If you see something, say something.
 */
export class Yorker {
    constructor(
        private printer: ITheme = new NYPDTheme(),
        private enabled: boolean = process.env.NODE_ENV === 'production',
    ) { }

    sees = this.see;

    /**
     * See something is happening...
     * @param {string} something - text
     */
    see(something: string) {
        if (this.enabled) return NOOP;

        const start = Date.now();
        this.printer.see(something, new Date(start));

        return (say: string, error?: Error) => {
            const end = Date.now();
            const ms = (end - start);
            if (error) {
                return this.printer.yell(error, say, new Date(end), ms);
            }
            return this.printer.say(say, new Date(end), ms);
        };
    }
}
