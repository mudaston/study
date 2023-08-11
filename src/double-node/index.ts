export class DoubleNode<T> {
	constructor(
		public value: T,
		public next?: DoubleNode<T>,
		public prev?: DoubleNode<T>
	) {}

	toString = () => String(this.value)
}


