"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const utils_1 = require("../utils");
class NYPDTheme {
    see(something, dateTime) {
        const dateTimeFormatted = dateTime.toLocaleTimeString();
        this.print('🚔 ' + chalk_1.default.yellow(something), ('🚔 ' + something).length, chalk_1.default.gray.dim(dateTimeFormatted), dateTimeFormatted.length);
    }
    say(something, dateTime, ms) {
        const time = utils_1.formatTimeTicks(ms);
        this.print('🚕 ' + chalk_1.default.green(something), ('🚕 ' + (something)).length, chalk_1.default.gray.dim(time), time.length);
    }
    yell(error, something, dateTime, ms) {
        const time = utils_1.formatTimeTicks(ms);
        this.print('🚓 🚑 🚒 ' + chalk_1.default.red(something), ('🚓 🚑 🚒 ' + something).length, chalk_1.default.gray.dim(time), time.length);
        console.error(error);
    }
    print(left, leftLen, right, rightLen) {
        console.info(this.format(left, leftLen, right, rightLen));
    }
    width() {
        return process.stdout.columns;
    }
    format(left, leftLen, right, rightLen) {
        const maxLen = this.width();
        const leftLength = leftLen;
        const exactLeftLen = maxLen - rightLen;
        if (exactLeftLen < 0 || leftLength > exactLeftLen) {
            // print in two lines:
            return `${left}\n${right}`;
        }
        const spaces = new Array(exactLeftLen - leftLength);
        return left + spaces.fill(' ').join('') + right;
    }
}
exports.NYPDTheme = NYPDTheme;
//# sourceMappingURL=nypd.js.map