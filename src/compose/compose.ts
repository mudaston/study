import type { Fn } from './types'

const compose =
	<T>(...args: Fn<T>[]) =>
	(value: T) =>
		args.reduceRight((result, func) => func(result), value)

export { compose }
