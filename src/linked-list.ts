	toArray() {
		if (!this.Head) return []

		let nodes

		let index = 0

		const isFloat = (number: number) => number % 1 !== 0

		const strategy = {
			number: Int32Array,
			float: Float32Array,
			string: Array<T>,
			bigint: Array<T>,
			boolean: Array<T>,
			symbol: Array<T>,
			undefined: Array<T>,
			object: Array<T>,
			function: Array<T>,
			unknown: Array<T>,
		}

		const getStrategy = (value: T) => {
			if (typeof value === 'number' && isFloat(value)) return 'float'

			if (typeof value === 'number' && Number.isInteger(value)) return 'number'

			return typeof value
		}

		const getArray = (value: T) => strategy[getStrategy(value)]

		const Container = getArray(this.Head.value)

		nodes = new Container(this.length)

		for (const value of this) nodes[index++] = value

		return nodes
	}
