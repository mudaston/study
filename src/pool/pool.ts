import { Node } from '../single-node'

class Pool<T> {
	private Head?: Node<T>
	private Length: number
	private Capacity: number

	public get length() {
		return this.Length
	}

	constructor(length: number = 10) {
		for (let i = 0; i < length; i++) this.push(new Node<T>(0 as T))
		this.Length = length
		this.Capacity = length
	}

	generatePull() {
		this.Capacity *= 1.5
		this.Capacity += 16

		for (let i = 0; i < this.Capacity; i++) this.push(new Node<T>(0 as T))
	}

	push(node: Node<T>): void {
		this.Length++

		if (!this.Head) {
			this.Head = node

			return
		}

		node.next = this.Head
		this.Head = node
	}

	pop(): Node<T> | undefined {
		if (!this.Head) return undefined
		this.Length--

		const currentNode = this.Head
		this.Head = this.Head.next
		currentNode.next = undefined

		return currentNode
	}

	peek(): T | undefined {
		return this.Head?.value
	}
}

export default Pool
