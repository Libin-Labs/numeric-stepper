import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('snaps to nearest grid point', () => {
  assert.equal(api.snapToStep(7.2, { min: 0, max: 10, step: 2 }), 8);
});
test('clamps below minimum', () => {
  assert.equal(api.snapToStep(-2, { min: 0, max: 10, step: 2 }), 0);
});
test('clamps above maximum', () => {
  assert.equal(api.snapToStep(20, { min: 0, max: 10, step: 2 }), 10);
});
test('anchors grid at nonzero minimum', () => {
  assert.equal(api.snapToStep(7, { min: 1, max: 10, step: 3 }), 7);
});
test('rounds exact ties upward', () => {
  assert.equal(api.snapToStep(3, { min: 0, max: 10, step: 2 }), 4);
});
test('rejects zero step', () => {
  assert.throws(() => api.snapToStep(2, { min: 0, max: 10, step: 0 }), RangeError);
});
