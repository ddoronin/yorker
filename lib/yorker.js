"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("./theme");
const NOOP = (msg, error) => null;
/**
 * If you see something, say something.
 */
class Yorker {
    constructor(printer = new theme_1.NYPDTheme(), enabled = process.env.NODE_ENV === 'production') {
        this.printer = printer;
        this.enabled = enabled;
        this.sees = this.see;
    }
    /**
     * See something is happening...
     * @param {string} something - text
     */
    see(something) {
        if (this.enabled)
            return NOOP;
        const start = Date.now();
        this.printer.see(something, new Date(start));
        return (say, error) => {
            const end = Date.now();
            const ms = (end - start);
            if (error) {
                return this.printer.yell(error, say, new Date(end), ms);
            }
            return this.printer.say(say, new Date(end), ms);
        };
    }
}
exports.Yorker = Yorker;
//# sourceMappingURL=yorker.js.map