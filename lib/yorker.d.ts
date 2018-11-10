export interface ITheme {
    see: (something: string, dateTime: Date) => void;
    say: (something: string, dateTime: Date, ms: number) => void;
    yell: (error: Error, something: string, dateTime: Date, ms: number) => void;
}
/**
 * If you see something, say something.
 */
export declare class Yorker {
    private printer;
    private enabled;
    constructor(printer?: ITheme, enabled?: boolean);
    sees: (something: string) => (msg: string, error?: Error) => void;
    /**
     * See something is happening...
     * @param {string} something - text
     */
    see(something: string): (msg: string, error?: Error) => void;
}
