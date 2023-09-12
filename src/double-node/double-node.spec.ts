import { DoubleNode } from '.'

describe('double-DoubleNode', () => {
	let node: DoubleNode<any>
	const testValue = 'test value'

	beforeAll(() => {
		node = new DoubleNode(testValue)

		const nextDoubleNode = new DoubleNode('nextDoubleNode')
		node.next = nextDoubleNode
	})

	it('should create DoubleNode', () => {
		expect(node).not.toBeUndefined()
	})

	it('should stringify value using toString method', () => {
		expect(node.toString()).toBe('test value')
	})

	it('should have next DoubleNode', () => {
		expect(node.next).not.toBeUndefined()
	})
})
