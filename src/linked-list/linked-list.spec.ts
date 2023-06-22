import { List } from './linked-list'
import { Node } from '../double-node'

interface User {
	name: string
	age: number
}

describe('linked list', () => {
	it('toArray with a non-empty list', () => {
		const list = new List()
		list.append(1)

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

		list.append(1).append(2).append(3).append(4)

		const arr = list.toString()

		expect(arr).toBe('1,2,3,4')
		expect(list.head).toBe(1)
		expect(list.tail).toBe(4)
	})

	it('prepend', () => {
		const list = new List()

		list.prepend(1).prepend(2).prepend(3).prepend(4)

		const arr = list.toString()

		expect(arr).toBe('4,3,2,1')
		expect(list.head).toBe(4)
		expect(list.tail).toBe(1)
	})

	it('append + prepend works correctly', () => {
		const list = new List()

		list.append(1).prepend(2).append(3).append(4).prepend(5)

		const testValue = list.toString()
		const expectValue = '5,2,1,3,4'

		expect(testValue).toBe(expectValue)
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

	it('find', () => {
		const list = new List<User>()

		list.append({ name: 'Vasya', age: 19 }).append({ name: 'Maks', age: 27 })

		const testValue = list.find(({ name }) => name === 'Maks')
		const expectValue = { name: 'Maks', age: 27 }

		expect(testValue).toStrictEqual(expectValue)
	})

	it('find with nonexistent value', () => {
		const list = new List<User>()

		list.append({ name: 'Vasya', age: 19 }).append({ name: 'Maks', age: 27 })

		const actual = list.find(() => false)
		const expected = undefined

		expect(actual).toStrictEqual(expected)
	})

	it('findIndex', () => {
		const list = new List<User>()

		list.append({ name: 'Vasya', age: 19 }).append({ name: 'Maks', age: 27 })

		const testValue = list.findIndex(({ name }) => name === 'Maks')
		const expectValue = 1

		expect(testValue).toBe(expectValue)
	})

	it('findIndex with nonexistent value', () => {
		const list = new List<User>()

		list.append({ name: 'Vasya', age: 19 }).append({ name: 'Maks', age: 27 })

		const testValue = list.findIndex(() => false)
		const expectValue = -1

		expect(testValue).toBe(expectValue)
	})

	it('method at with positive index', () => {
		const list = new List()

		list.append(1).append(2)

		const actual = list.at(0)
		const expected = 1

		expect(actual).toBe(expected)
	})

	it('method at with negative index', () => {
		const list = new List()

		list.append(1).append(2)

		const actual = list.at(-1)
		const expected = 2

		expect(actual).toBe(expected)
	})

	it('method at with out of bounds index', () => {
		const list = new List()

		list.append(1)

		const index = list.length + 1
		const actual = list.at(index)
		const expected = undefined

		expect(actual).toBe(expected)
	})

	it('get head value', () => {
		const list = new List()

		list.append(1)

		const actual = list.head
		const expected = 1

		expect(actual).toBe(expected)
	})

	it('get tail value', () => {
		const list = new List()

		list.append(1)

		const actual = list.tail
		const expected = 1

		expect(actual).toBe(expected)
	})
})
