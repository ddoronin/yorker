import { yorker } from '../src/index';

const say = yorker.see('Something is going on here...');
say('Everything is Okay!');
say('Bomb!', new Error('boooom'));