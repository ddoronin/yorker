import { ITheme } from '../yorker';
export declare class NYPDTheme implements ITheme {
    see(something: string, dateTime: Date): void;
    say(something: string, dateTime: Date, ms: number): void;
    yell(error: Error, something: string, dateTime: Date, ms: number): void;
    private print;
    private width;
    private format;
}
