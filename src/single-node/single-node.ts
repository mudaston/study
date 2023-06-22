class Node<T> {
	value: T
	next?: Node<T>

	constructor(value: T, next?: Node<T>) {
		this.value = value
		this.next = next
	}

	toString = () => String(this.value)
}

export { Node }
