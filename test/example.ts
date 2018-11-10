import { yorker } from '../src/index';

const say = yorker.see('See suspicious activity...');
say('just decorations for "John Wick 3" movie.');
say('not a movie, dude!!!', new Error('Alert!'));