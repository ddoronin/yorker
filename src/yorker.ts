import { NYPDTheme } from './theme';

const NOOP = (msg: string, error?: Error): void => null;

export interface ITheme {
    see(something: string, dateTime: Date, context: Map<string, any>): void;
    say(something: string, dateTime: Date, ms: number, context: Map<string, any>): void;
    yell(error: Error, something: string, dateTime: Date, ms: number, context: Map<string, any>): void;
}

/**
 * If you see something, say something.
 */
export class Yorker {
    constructor(
        private theme: ITheme = new NYPDTheme(),
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
        const context = new Map<string, any>();
        context.set('start', start);
        this.theme.see(something, new Date(start), context);
        return (say: string, error?: Error) => {
            const end = Date.now();
            context.set('end', end);
            const ms = (end - start);
            if (error) {
                return this.theme.yell(error, say, new Date(end), ms, context);
            }
            return this.theme.say(say, new Date(end), ms, context);
        };
    }
}
