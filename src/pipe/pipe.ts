import type { Fn } from './types'

const pipe =
	<T>(...args: Fn<T>[]) =>
	(value: T) =>
		args.reduce((result, func) => func(result), value)

export { pipe }
