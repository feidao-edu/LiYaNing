import test from 'ava';

import { subtract, subtract2, subtract3 } from './dist/subtract';

//test('add a to b', async (t) => {
//	t.is(add1(1, 2), 3);
//});
test('a subtract b', async (t) => {
	t.is(subtract(3, 2), 1);
});