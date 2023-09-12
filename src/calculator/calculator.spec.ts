import { calculator, type Actions } from './calculator'

describe('calculator', () => {
	test.each([
		{ testCase: 'plus', a: 2, b: 2, expected: 4 },
		{ testCase: 'substract', a: 2, b: 2, expected: 0 },
		{ testCase: 'multiply', a: 2, b: 2, expected: 4 },
		{ testCase: 'divide', a: 2, b: 2, expected: 1 },
	])('should %s', ({ testCase, a, b, expected }) => {
		const calculate = calculator(a, b)

		expect(calculate(testCase as Actions)).toBe(expected)
	})
})
