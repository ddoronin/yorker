import { yorker } from '../src/index';

const say = yorker.see('something');
say('something');
say('error', new Error('wow'));