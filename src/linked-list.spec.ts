import { List, Node } from './linked-list'

describe('linked list', () => {
	it('toArray with a non-empty list', () => {
		const list = new List().append(1)

		const array = list.toArray()

		const expected = 1
		const testValue = array[0]

		expect(testValue).toBe(expected)
	})

	it('toArray with an empty list', () => {
		const array = new List().toArray()

		expect(array).toStrictEqual([])
	})

	it('append', () => {
		const list = new List()

		const arr = list.append(1).append(2).append(3).append(4).toString()

		expect(arr).toBe('1,2,3,4')
		expect(list.head).toBe(1)
		expect(list.tail).toBe(4)
	})

	it('prepend', () => {
		const list = new List()

		const arr = list.prepend(1).prepend(2).prepend(3).prepend(4).toString()

		expect(arr).toBe('4,3,2,1')
		expect(list.head).toBe(4)
		expect(list.tail).toBe(1)
	})

	it('iterator works correctly', () => {
		const list = new List()
		list.append(1).append(2).append(3)

		const arr = []

		for (const value of list) arr.push(value)

		const testValue = arr.toString()
		const expectedValue = list.toArray().toString()

		expect(testValue).toStrictEqual(expectedValue)
	})

	it('test Node toString() method', () => { 
		const node = new Node(1)

		const testValue = node.toString()
		const expectedValue = '1'

		expect(testValue).toBe(expectedValue)
	 })
})
