import { Node } from '../single-node'
import { Queue } from './queue'

describe('queue', () => {
	let queue: Queue<number>

	beforeEach(() => {
		queue = new Queue(10)
		queue.enqueue(1)
	})

	it('should create queue instance', () => {
		expect(queue).not.toBeUndefined()
	})

	it("should'n have head and tail without any values", () => {
		expect(queue.head).toBeDefined()
		expect(queue.tail).toBeDefined()
	})

	it('should return correct length (1)', () => {
		expect(queue.length).toBe(1)
	})

	it('should return last added node without deleting', () => {
		const head = queue.head
		const value = queue.peek()

		expect(value).toBe(1)
		expect(queue.head).toBe(head)
	})

	it('should delete last added node after calling dequeue method', () => {
		const head = queue.head
		const value = queue.deque()

		expect(value).toBe(1)
		expect(queue.head).not.toBe(head)
	})

	it('should set new node to head and peek added value', () => {
		const head = queue.head

		queue.enqueue(10)

		expect(queue.head).not.toBe(head)
		expect(queue.peek()).toBe(10)
	})
})
