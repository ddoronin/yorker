import chalk from 'chalk';
import { formatTimeTicks } from '../utils'
import { Theme } from './theme';

/** Best color palette. */
const COLOR_PALETTE = {
    GOOGLE: [
        '#008744',
        '#0057e7',
        '#d62d20',
        '#ffa700',
    ],
    NEON: [
        '#fdfe02',
        '#0bff01',
        '#fe00f6'
    ],
    METRO: [
        '#00aba9',
        '#ff0097',
        '#a200ff',
        '#1ba1e2',
        '#f09609'
    ]
};

const BLACK_CONSOLE_PALETTE = [...COLOR_PALETTE.GOOGLE, ...COLOR_PALETTE.NEON, ...COLOR_PALETTE.METRO];

/**
 * Let's start with a random color in the palette.
 */
let nextColor = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);


const colorizer = (palette: string[]): string => {
    nextColor = ++nextColor % palette.length;
    return palette[nextColor];
};

/** Returns a hex color from a given palette */
const colorHex = (): string => colorizer(BLACK_CONSOLE_PALETTE);

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
