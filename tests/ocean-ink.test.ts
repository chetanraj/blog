import test from 'node:test';
import assert from 'node:assert/strict';
import { oceanInk } from '../src/utils/ascii-ocean.ts';

test('ocean ink is stable, restrained, and fades toward the body edges', () => {
  assert.equal(oceanInk(0, 1), 'rgba(58, 126, 139, 0.35)');
  assert.equal(oceanInk(1, 1), 'rgba(156, 211, 219, 0.95)');
  assert.equal(oceanInk(1, .6, true), 'rgba(169, 169, 202, 0.57)');
  assert.equal(oceanInk(3, 2), oceanInk(1, 1));
  assert.equal(oceanInk(-1, -1), 'rgba(58, 126, 139, 0)');
});
