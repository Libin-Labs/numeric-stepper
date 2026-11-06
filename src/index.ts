export interface StepOptions {
  readonly min: number;
  readonly max: number;
  readonly step: number;
}
export function snapToStep(value: number, options: StepOptions): number {
  const { min, max, step } = options;
  if (![value, min, max, step].every(Number.isFinite))
    throw new TypeError('All values must be finite');
  if (max < min || step <= 0 || (max - min) / step > 1000000)
    throw new RangeError('Invalid range or step budget');
  const clamped = Math.min(max, Math.max(min, value)),
    index = Math.round((clamped - min) / step);
  return Math.min(max, min + index * step);
}
