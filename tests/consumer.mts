import * as api from '@lp-labs/numeric-stepper';
import { snapToStep } from '@lp-labs/numeric-stepper';
console.log(snapToStep(7.2, { min: 0, max: 10, step: 2 }));
// @ts-expect-error invalid argument must be rejected by declarations
api.snapToStep(3, { min: 0, max: 10, step: '2' });
