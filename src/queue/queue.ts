import { Node } from '../single-node'
import { Pull } from '../pull'

class Queue<T> {
	private Head?: Node<T>
	private Tail?: Node<T>
	private Pull: Pull<T>

	private Length: number

	constructor(capacity?: number) {
		this.Length = 0
		this.Pull = new Pull<T>(capacity)
	}

	public get length(): number {
		return this.Length
	}

	public get head(): T | undefined {
		return this.Head?.value
	}

	public get tail(): T | undefined {
		return this.Tail?.value
	}

	enqueue(value: T): void {
		this.Length++

		if (this.Pull.length === 0) this.Pull.generatePull()

		const node = this.Pull.pop()
		node!.value = value

		if (!this.Head || !this.Tail) {
			this.Head = node
			this.Tail = node
			return
		}

		this.Tail.next = node
		this.Tail = node
	}

	dequeue(): T | undefined {
		if (!this.Head) return undefined

		const currentNode = this.Head

		this.Head = this.Head.next
		currentNode.next = undefined
		this.Pull.push(currentNode)

		this.Length--

		if (this.Length === 0) {
			this.Tail = undefined
		}

		return currentNode.value
	}

	peek(): T | undefined {
		return this.Head?.value
	}
}

export default Queue
