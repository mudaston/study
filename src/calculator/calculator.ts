export const calculator = (a: number, b: number) => {
	const plus = (a: number, b: number) => a + b

	const substract = (a: number, b: number) => a - b

	const multiply = (a: number, b: number) => a * b

	const divide = (a: number, b: number) => a / b

	const operation = (operation: Actions) => {
		const performActions = {
			plus,
			substract,
			multiply,
			divide,
		}

		return performActions[operation](a, b)
	}

	return operation
}

export type Actions = 'plus' | 'substract' | 'multiply' | 'divide'
