import { Node } from './single-node'

describe('single-node', () => {
	let node: Node<any>
	const testValue = 'test value'

	beforeAll(() => {
		node = new Node(testValue)

		const nextNode = new Node('nextNode')
		node.next = nextNode
	})

	it('should create Node', () => {
		expect(node).not.toBeUndefined()
	})

	it('should stringify value using toString method', () => {
		expect(node.toString()).toBe('test value')
	})

	it('should have next node', () => {
		expect(node.next).not.toBeUndefined()
	})
})
