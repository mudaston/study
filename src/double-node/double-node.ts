class Node<T> {
	public value: T
	public next?: Node<T>
	public prev?: Node<T>

	public constructor(value: T, next?: Node<T>, prev?: Node<T>) {
		this.value = value
		this.next = next
		this.prev = prev
	}

	public toString = () => String(this.value)
}

export { Node }
