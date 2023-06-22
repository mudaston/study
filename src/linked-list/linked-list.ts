import { Node } from '../double-node'
import type { Predicate } from './types'

class List<T> {
	private Head?: Node<T>
	private Tail?: Node<T>
	private Length: number = 0

	get length() {
		return this.Length
	}

	// O(1)
	get head() {
		return this.Head?.value
	}

	// O(1)
	get tail() {
		return this.Tail?.value
	}

	// O(n)
	at(index: number) {
		const getIterator = (index: number) =>
			index >= 0 ? this.iterator : this.reverseIterator

		const getTargetIndex = (index: number) => (index >= 0 ? index : -index - 1)

		const iterator = getIterator(index)
		const targetIndex = getTargetIndex(index)
		let i = 0

		for (const value of iterator) {
			if (i === targetIndex) return value
			i++
		}
	}

	// O(n)
	find(predicate: Predicate<T>) {
		let i = 0

		for (const value of this) {
			if (predicate(value, i, this)) return value
			i++
		}
	}

	// O(n)
	findIndex(predicate: Predicate<T>) {
		let i = 0

		for (const value of this) {
			if (predicate(value, i, this)) return i
			i++
		}

		return -1
	}

	// O(n)
	toArray() {
		const nodes = new Array<T>(this.Length)
		let index = 0

		for (const value of this.iterator) {
			nodes[index] = value
			index++
		}

		return nodes
	}

	// O(1)
	prepend(value: T) {
		const node = new Node<T>(value)

		if (!this.Head || !this.Tail) {
			this.Head = node
			this.Tail = node

			return this
		}

		this.Head.prev = node
		node.next = this.Head
		this.Head = node

		this.Length++

		return this
	}

	// O(1)
	append(value: T) {
		const node = new Node<T>(value)

		if (!this.Head || !this.Tail) {
			this.Head = node
			this.Tail = node

			return this
		}

		this.Tail.next = node
		node.prev = this.Tail
		this.Tail = node

		this.Length++

		return this
	}

	// O(n)
	toString() {
		return this.toArray().toString()
	}

	// O(1)
	private get reverseIterator() {
		return this[Symbol.iterator](true)
	}

	// O(1)
	private get iterator() {
		return this[Symbol.iterator](false)
	}

	// O(n)
	*[Symbol.iterator](reverse = false) {
		const getInitalNode = (reverse: boolean) =>
			reverse ? this.Tail : this.Head

		const strategy = {
			next: (node?: Node<T>) => node?.next,
			prev: (node?: Node<T>) => node?.prev,
		}

		const getDirection = (reverse: boolean) => (reverse ? 'prev' : 'next')

		const getPerformStep = (reverse: boolean) => {
			const direction = getDirection(reverse)
			return strategy[direction]
		}

		let current = getInitalNode(reverse)
		const performStep = getPerformStep(reverse)

		while (current) {
			yield current.value
			current = performStep(current)
		}
	}
}

export { List }
