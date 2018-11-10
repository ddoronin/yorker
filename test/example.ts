import { yorker } from '../src/index';

const say = yorker.see('See suspicious activity...');
say('just decorations for "John Wick 3" movie.');

const say2 = yorker.see('See another suspicious activity...');
say2('another one.');

const say3 = yorker.see('See another suspicious activity...');
say3('another one.');

say('"John Wick 3" yo!');

say2('not a movie, dude!!!', new Error('Alert!'));
